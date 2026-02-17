# Brevo Integration Setup Guide

## What You Need from Brevo

### 1. API Key
- Log in to your Brevo account
- Go to **Settings** → **SMTP & API** → **API Keys**
- Create a new API key with permissions for "Contacts"
- Copy the API key and replace `YOUR_BREVO_API_KEY` in `components/EmailCaptureModal.tsx`

### 2. List ID
- Go to **Contacts** → **Lists**
- Create a new list called **"White Paper – Execution Authority"**
- Click on the list to view details
- The List ID will be in the URL or list settings (it's a number like `2`, `5`, etc.)
- Replace `YOUR_LIST_ID` in `components/EmailCaptureModal.tsx`

### 3. Email Automation Setup in Brevo

#### A. Confirmation Email (Immediate)
1. Go to **Automation** → **Create a new workflow**
2. **Trigger**: Contact added to list "White Paper – Execution Authority"
3. **Action**: Send email immediately
4. **Email Content**:
   - **Subject**: Your Third Vision AI Whitepaper
   - **Body**: Include a link to the PDF hosted on your site:
     ```
     Thank you for your interest in Third Vision AI.
     
     You can download the whitepaper here:
     https://yourdomain.com/#/thank-you
     
     Or access it directly: https://yourdomain.com/resources/ThirdVision-AI%20Enterprise.pdf
     ```

#### B. Follow-Up Email Sequence (3 emails)
1. **Email 1** (2 days after): Introduction to Third Vision AI's mission
2. **Email 2** (5 days after): Case studies or deployment examples
3. **Email 3** (8 days after): Call to action (pilot inquiry, demo booking)

Configure these in the same automation workflow with delays between actions.

### 4. Update EmailCaptureModal.tsx

Open `components/EmailCaptureModal.tsx` and replace these placeholders:
```typescript
const BREVO_API_KEY = 'YOUR_BREVO_API_KEY'; // Line 9
const BREVO_LIST_ID = 'YOUR_LIST_ID'; // Line 10 (just the number, e.g., '5')
```

### 5. Testing

After configuration:
1. Test the form on your site
2. Check if contact appears in Brevo list
3. Verify confirmation email is sent
4. Test the follow-up sequence timing

## Flow Summary

1. User enters **name + work email** on homepage
2. Contact added to Brevo list **"White Paper – Execution Authority"**
3. User redirected to **Thank You page** (/#/thank-you)
4. Brevo sends **immediate confirmation email** with PDF link
5. Brevo sends **3-email follow-up sequence** automatically

## Support

If you need help with Brevo setup:
- Brevo Documentation: https://developers.brevo.com/
- API Reference: https://developers.brevo.com/reference/createcontact
