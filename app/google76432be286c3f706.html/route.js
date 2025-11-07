export async function GET() {
  return new Response('google-site-verification: google76432be286c3f706.html', {
    headers: { 'content-type': 'text/plain' },
  })
}