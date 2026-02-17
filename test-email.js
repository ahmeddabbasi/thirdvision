// Test script to verify Brevo email functionality
// Run with: node test-email.js

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = process.env.BREVO_LIST_ID || '5';

const testName = 'Ahmed Abbasi';
const testEmail = 'ahmedabbasi1031@gmail.com'; // Your test email

console.log('🧪 Testing Brevo Integration...\n');

async function testBrevoIntegration() {
  try {
    console.log('1️⃣ Adding contact to Brevo list...');
    
    // Add contact to Brevo list
    const contactRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: testEmail,
        attributes: {
          FIRSTNAME: testName.split(' ')[0] || testName,
          LASTNAME: testName.split(' ').slice(1).join(' ') || ''
        },
        listIds: [parseInt(BREVO_LIST_ID)],
        updateEnabled: true
      }),
    });

    if (!contactRes.ok && contactRes.status !== 204) {
      const errorData = await contactRes.json();
      console.error('❌ Failed to add contact:', errorData);
      return;
    }

    console.log('✅ Contact added successfully!\n');

    console.log('2️⃣ Sending welcome email...');

    // Send immediate welcome email
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
          email: testEmail,
          name: testName
        }],
        subject: 'Your Third Vision AI Framework Document',
        htmlContent: `
          <html>
            <body style="font-family: sans-serif; line-height: 1.6; color: #333;">
              <h2 style="color: #BFA35B;">Hi ${testName.split(' ')[0]},</h2>
              
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

    const emailData = await emailRes.json();
    
    if (!emailRes.ok) {
      console.error('❌ Failed to send email:', emailData);
      console.log('\nFull response:', JSON.stringify(emailData, null, 2));
      return;
    }

    console.log('✅ Email sent successfully!\n');
    console.log('Email Response:', emailData);
    console.log('🎉 Test completed! Check your inbox at:', testEmail);
    console.log('\nNext steps:');
    console.log('- Check spam folder if you don\'t see the email');
    console.log('- Verify contact appears in Brevo dashboard');
    console.log('- Set up follow-up automation in Brevo (optional)');
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testBrevoIntegration();
