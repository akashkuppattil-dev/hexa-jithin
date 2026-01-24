import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, mobile, email, message } = body

        // Validate required fields
        if (!name || !mobile || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            )
        }

        // Send email via Brevo API
        const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY || '',
            },
            body: JSON.stringify({
                sender: {
                    name: process.env.BREVO_SENDER_NAME || 'Hexamech Linich Tools',
                    email: process.env.BREVO_SENDER_EMAIL || 'hexamechlinichtools@gmail.com',
                },
                to: [
                    {
                        email: process.env.BREVO_RECIPIENT_EMAIL || 'hexamechlinichtools@gmail.com',
                        name: 'Hexamech Team',
                    },
                ],
                subject: `New Contact Enquiry from ${name}`,
                htmlContent: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #09757a 0%, #0bc0c8 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #09757a; border-radius: 5px; }
                .label { font-weight: bold; color: #09757a; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
                .value { margin-top: 5px; font-size: 16px; }
                .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0; font-size: 24px;">New Contact Enquiry</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Hexamech Linich Tools</p>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="label">Customer Name</div>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="label">Mobile Number</div>
                    <div class="value"><a href="tel:${mobile}" style="color: #09757a; text-decoration: none;">${mobile}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Email Address</div>
                    <div class="value"><a href="mailto:${email}" style="color: #09757a; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Message / Requirement</div>
                    <div class="value">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                  <div class="footer">
                    <p>This enquiry was submitted via the Hexamech Linich Tools contact form.</p>
                    <p>Respond promptly to maintain customer satisfaction.</p>
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
            }),
        })

        if (!brevoResponse.ok) {
            const errorData = await brevoResponse.json()
            console.error('Brevo API Error:', errorData)
            return NextResponse.json(
                { error: 'Failed to send email' },
                { status: 500 }
            )
        }

        // Send acknowledgment email to customer
        await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY || '',
            },
            body: JSON.stringify({
                sender: {
                    name: 'Hexamech Linich Tools',
                    email: process.env.BREVO_SENDER_EMAIL || 'hexamechlinichtools@gmail.com',
                },
                to: [{
                    email: email,
                    name: name,
                }],
                subject: 'Thank You for Contacting Hexamech Linich Tools',
                htmlContent: `
<!DOCTYPE html>
<html>
<head>
<style>
body{font-family:Arial,sans-serif;line-height:1.6;color:#333;margin:0;padding:0}
.container{max-width:600px;margin:0 auto}
.header{background:linear-gradient(135deg,#09757a 0%,#0bc0c8 100%);color:white;padding:40px 30px;text-align:center}
.logo{font-size:28px;font-weight:bold;margin:0;letter-spacing:2px}
.tagline{font-size:12px;opacity:0.9;margin:5px 0 0 0;letter-spacing:3px}
.content{background:#ffffff;padding:40px 30px}
.greeting{font-size:20px;color:#09757a;font-weight:bold;margin:0 0 20px 0}
.message{font-size:15px;line-height:1.8;margin-bottom:20px}
.highlight-box{background:#f0f9f9;border-left:4px solid #09757a;padding:20px;margin:25px 0;border-radius:5px}
.contact-info{background:#f9f9f9;padding:25px;border-radius:8px;margin:25px 0}
.contact-item{margin:12px 0}
.contact-label{font-weight:bold;color:#09757a;font-size:13px}
.footer{background:#0a0a0a;color:#ffffff;padding:30px;text-align:center}
.cta-button{display:inline-block;background:#09757a;color:white;padding:15px 35px;text-decoration:none;border-radius:5px;font-weight:bold;margin:20px 0}
</style>
</head>
<body>
<div class="container">
<div class="header">
<h1 class="logo">HEXAMECH</h1>
<p class="tagline">LINICH TOOLS</p>
</div>
<div class="content">
<h2 class="greeting">Dear ${name},</h2>
<p class="message">Thank you for reaching out to <strong>Hexamech Linich Tools</strong>! We have successfully received your enquiry and our team is reviewing your message.</p>
<div class="highlight-box">
<p style="margin:0;font-weight:bold;color:#09757a;font-size:14px">✓ Your Enquiry Has Been Received</p>
<p style="margin:10px 0 0 0;font-size:13px">Our dedicated sales team will review your requirements and get back to you within <strong>2-4 business hours</strong>.</p>
</div>
<p class="message">In the meantime, if you have any urgent queries or would like to speak with us directly, please don't hesitate to contact us using the information below.</p>
<div class="contact-info">
<h3 style="margin:0 0 15px 0;color:#09757a;font-size:16px">Quick Contact Options</h3>
<div class="contact-item"><span class="contact-label">📞 Phone:</span> +91 75106 38693</div>
<div class="contact-item"><span class="contact-label">💬 WhatsApp:</span> 9037872505</div>
<div class="contact-item"><span class="contact-label">✉️ Email:</span> hexamechlinichtools@gmail.com</div>
<div class="contact-item"><span class="contact-label">📍 Location:</span> Chulliparamba, Calicut, Kerala</div>
</div>
<center><a href="https://wa.me/919037872505" class="cta-button">Chat on WhatsApp</a></center>
<p class="message" style="margin-top:30px;font-size:14px;color:#666">We appreciate your interest in our professional automotive tools and look forward to serving you.</p>
<p style="margin-top:25px;font-weight:bold;color:#09757a">Best Regards,<br>The Hexamech Team</p>
</div>
<div class="footer">
<p style="font-weight:bold;font-size:14px;margin:5px 0">HEXAMECH LINICH TOOLS</p>
<p style="font-size:12px;opacity:0.8;margin:5px 0">Kerala's Premier B2B Automotive Tools Specialist</p>
<p style="font-size:11px;opacity:0.7;margin:20px 0 5px 0">© ${new Date().getFullYear()} Hexamech Linich Tools. All Rights Reserved.</p>
</div>
</div>
</body>
</html>
`,
            }),
        })

        return NextResponse.json(
            { success: true, message: 'Email sent successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
