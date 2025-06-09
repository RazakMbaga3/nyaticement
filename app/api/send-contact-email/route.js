import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.json();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'mail.lakecement.co.tz',
      port: 465,
      secure: true, // Use SSL/TLS
      auth: {
        user: '_mainaccount@lakecement.co.tz',
        pass: 'Encrypt3d@4934', // Replace with the actual cPanel password
      },
    });

    // Email options
    const mailOptions = {
      from: '_mainaccount@lakecement.co.tz',
      to: 'info@lakecement.co.tz',
      subject: 'New Contact Form Submission',
      text: `You have a new contact form submission:

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Contact Number: ${formData.contactNumber}
Email: ${formData.email}
Firm Name: ${formData.firmName}
Address: ${formData.address}
Query: ${formData.query}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
