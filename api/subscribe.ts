import type { VercelRequest, VercelResponse } from '@vercel/node';

// Brevo API Configuration (keep secret on server-side)
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID || '5';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email } = req.body;

  // Validate input
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    // Add contact to Brevo list
    const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        attributes: {
          FIRSTNAME: name.split(' ')[0] || name,
          LASTNAME: name.split(' ').slice(1).join(' ') || ''
        },
        listIds: [parseInt(BREVO_LIST_ID)],
        updateEnabled: true
      }),
    });

    if (!contactRes.ok && contactRes.status !== 204) {
      const errorData = await contactRes.json();
      console.error('Brevo contact creation failed:', errorData);
      throw new Error('Failed to add contact to Brevo');
    }

    // Send immediate welcome email via Brevo API
    const emailRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: {
          name: 'Third Vision AI',
          email: 'jay@thirdvisionai.com'
        },
        to: [{
          email: email,
          name: name
        }],
        subject: 'Your Third Vision AI Framework Document',
        htmlContent: `
          <html>
            <body style="font-family: sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color: #BFA35B;">Hi ${name.split(' ')[0]},</h2>
              
              <p>Thank you for your interest in Third Vision AI.</p>
              
              <p style="margin: 30px 0;">
                <a href="https://thirdvisionai.com/resources/ThirdVision-AI%20Enterprise.pdf" 
                   style="display: inline-block; background-color: #BFA35B; color: #000; padding: 15px 30px; text-decoration: none; font-weight: bold; font-size: 16px; border-radius: 4px;">
                  Download Your Framework (PDF)
                </a>
              </p>
              
              <p style="color: #666; font-size: 14px;">
                Or view online: <a href="https://thirdvisionai.com/#/thank-you" style="color: #BFA35B;">Access Document</a>
              </p>
              
              <hr style="border: 0; border-top: 1px solid #ddd; margin: 30px 0;">
              
              <p style="color: #666; font-size: 14px; line-height: 1.8;">
                Warmest Regards<br>
                <strong>Jayshree Mallaya</strong><br>
                Founder | Third Vision AI<br>
                <a href="mailto:jay@thirdvision.ai" style="color: #BFA35B; text-decoration: none;">jay@thirdvision.ai</a>
              </p>
              
              <p style="color: #999; font-size: 12px; margin-top: 40px;">
                Third Vision AI<br>
                Breakwater Boulevard, V&A Waterfront<br>
                Cape Town, South Africa
              </p>
            </body>
          </html>
        `
      })
    });

    if (!emailRes.ok) {
      const errorData = await emailRes.json();
      console.error('Brevo email send failed:', errorData);
      // Don't fail the whole request if email fails, contact is already added
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Subscription error:', error);
    return res.status(500).json({ error: 'Failed to process subscription' });
  }
}
