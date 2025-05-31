This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

### Environment Variables for Vercel Deployment

For successful deployment, set up the following environment variables in Vercel:

```
EMAIL_SERVER_HOST=smtp.example.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_SECURE=false
EMAIL_SERVER_USER=your-email@example.com
EMAIL_SERVER_PASSWORD=your-email-password
EMAIL_FROM=website@lakecement.co.tz
NEXT_PUBLIC_SITE_URL=https://your-deployed-url.vercel.app
```

**Note:** The `server.js` file is used for custom server configurations and is not needed for Vercel deployments as Vercel handles server configurations automatically.

## Project Structure

- `/app` - Main application code (Next.js App Router)
- `/public` - Static assets
- `/app/api` - API routes
- `/app/components` - Reusable components
- `/app/translations` - Multilingual content

See `.env.example` for all required environment variables.
