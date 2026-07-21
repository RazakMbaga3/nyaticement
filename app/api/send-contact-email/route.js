export const runtime = 'nodejs';

import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const formData = await req.json();

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
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
