# Third Vision AI - Setup Instructions

## Environment Variables

This project requires Brevo API credentials. Create a `.env.local` file in the root directory:

```bash
BREVO_API_KEY=your_brevo_api_key_here
BREVO_LIST_ID=your_list_id_here
```

**Never commit `.env.local` to git** - it's already in `.gitignore`.

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables (see above)

3. Run development server:
```bash
vercel dev
```

Or use Vite directly:
```bash
npm run dev
```

4. Test email functionality:
```bash
node test-email.js
```

## Deployment to Vercel

1. Deploy:
```bash
vercel
```

2. Add environment variables in Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add `BREVO_API_KEY`
   - Add `BREVO_LIST_ID`
   - Redeploy

## Questions?

Contact: jay@thirdvisionai.com
