import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { productName, productSku, name, mobile, email, message } = body

    // Validate required fields
    if (!productName || !name || !mobile || !email) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // Send notification email to Hexamech team
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
            name: 'Hexamech Sales Team',
          },
        ],
        subject: `Product Inquiry: ${productName} - ${name}`,
        htmlContent: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #09757a 0%, #0bc0c8 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
                .product-banner { background: #0a0a0a; color: white; padding: 20px; text-align: center; }
                .product-name { font-size: 20px; font-weight: bold; margin: 0; }
                .product-sku { font-size: 14px; opacity: 0.8; margin: 5px 0 0 0; }
                .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
                .field { margin-bottom: 20px; padding: 15px; background: white; border-left: 4px solid #09757a; border-radius: 5px; }
                .label { font-weight: bold; color: #09757a; text-transform: uppercase; font-size: 12px; letter-spacing: 1px; }
                .value { margin-top: 5px; font-size: 16px; }
                .cta { background: #09757a; color: white; padding: 15px 30px; text-align: center; border-radius: 5px; margin: 20px 0; }
                .cta a { color: white; text-decoration: none; font-weight: bold; }
                .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1 style="margin: 0; font-size: 24px;">🔧 New Product Inquiry</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Hexamech Linich Tools</p>
                </div>
                <div class="product-banner">
                  <p class="product-name">${productName}</p>
                  ${productSku ? `<p class="product-sku">SKU: ${productSku}</p>` : ''}
                </div>
                <div class="content">
                  <h2 style="color: #09757a; margin-top: 0;">Customer Details</h2>
                  
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
                  ${message ? `
                  <div class="field">
                    <div class="label">Additional Message</div>
                    <div class="value">${message.replace(/\n/g, '<br>')}</div>
                  </div>
                  ` : ''}
                  
                  <div class="cta">
                    <p style="margin: 0;">Quick Actions:</p>
                    <p style="margin: 10px 0 0 0;">
                      <a href="tel:${mobile}">📞 Call Customer</a> | 
                      <a href="mailto:${email}">✉️ Send Email</a> | 
                      <a href="https://wa.me/${mobile.replace(/\D/g, '')}">💬 WhatsApp</a>
                    </p>
                  </div>
                  
                  <div class="footer">
                    <p>This inquiry was submitted via the Hexamech product page.</p>
                    <p><strong>Action Required:</strong> Respond within 2 hours for best conversion rate.</p>
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
        subject: `Thank You for Your Interest in ${productName}`,
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
.product-box{background:#0a0a0a;color:white;padding:25px;margin:20px 0;border-radius:8px;text-align:center}
.product-title{font-size:18px;font-weight:bold;margin:0;color:#0bc0c8}
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
<p class="message">Thank you for your interest in our products! We have successfully received your inquiry for:</p>
<div class="product-box">
<p class="product-title">${productName}</p>
${productSku ? `<p style="margin:5px 0 0 0;font-size:13px;opacity:0.8">SKU: ${productSku}</p>` : ''}
</div>
<div class="highlight-box">
<p style="margin:0;font-weight:bold;color:#09757a;font-size:14px">✓ Your Product Inquiry Has Been Received</p>
<p style="margin:10px 0 0 0;font-size:13px">Our sales team is reviewing your inquiry and will contact you within <strong>2-4 business hours</strong> with detailed pricing and availability information.</p>
</div>
<p class="message">We understand the importance of quality tools for your business. Our team will provide you with:</p>
<ul style="margin:15px 0;padding-left:20px">
<li style="margin:8px 0">Competitive wholesale pricing</li>
<li style="margin:8px 0">Product specifications and availability</li>
<li style="margin:8px 0">Bulk order discounts (if applicable)</li>
<li style="margin:8px 0">Delivery timeline and options</li>
</ul>
<p class="message">For immediate assistance, feel free to reach out to us directly:</p>
<div class="contact-info">
<h3 style="margin:0 0 15px 0;color:#09757a;font-size:16px">Quick Contact Options</h3>
<div class="contact-item"><span class="contact-label">📞 Phone:</span> +91 75106 38693</div>
<div class="contact-item"><span class="contact-label">💬 WhatsApp:</span> 9037872505</div>
<div class="contact-item"><span class="contact-label">✉️ Email:</span> hexamechlinichtools@gmail.com</div>
</div>
<center><a href="https://wa.me/919037872505?text=Hi, I inquired about ${encodeURIComponent(productName)}" class="cta-button">Chat on WhatsApp</a></center>
<p class="message" style="margin-top:30px;font-size:14px;color:#666">Thank you for choosing Hexamech Linich Tools. We look forward to serving your business needs.</p>
<p style="margin-top:25px;font-weight:bold;color:#09757a">Best Regards,<br>The Hexamech Sales Team</p>
</div>
<div class="footer">
<p style="font-weight:bold;font-size:14px;margin:5px 0">HEXAMECH LINICH TOOLS</p>
<p style="font-size:12px;opacity:0.8;margin:5px 0">Serving 4,000+ Workshops Across India</p>
<p style="font-size:11px;opacity:0.7;margin:20px 0 5px 0">© ${new Date().getFullYear()} Hexamech Linich Tools. All Rights Reserved.</p>
</div>
</div>
</body>
</html>
`,
      }),
    })

    return NextResponse.json(
      { success: true, message: 'Product inquiry sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Product inquiry error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
