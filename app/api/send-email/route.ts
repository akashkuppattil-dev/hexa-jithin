import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, mobile, message, product_name, form_type } = body

        // Validate required fields
        if (!name || !email || !mobile || !form_type) {
            return NextResponse.json(
                { error: 'Required fields are missing' },
                { status: 400 }
            )
        }

        const apiKey = process.env.BREVO_API_KEY
        const senderEmail = process.env.BREVO_SENDER_EMAIL || 'hexamech.ac@gmail.com'
        const senderName = process.env.BREVO_SENDER_NAME || 'Hexamech Tools'
        const recipientEmail = process.env.BREVO_RECIPIENT_EMAIL || process.env.ADMIN_EMAIL || 'hexamech.ac@gmail.com'
        const whatsappNumber = "919037872505"

        if (!apiKey || apiKey === 'your_brevo_api_key_here') {
            return NextResponse.json({ error: 'Brevo API key is not configured' }, { status: 500 })
        }

        const isProductInquiry = form_type === "Product Inquiry"

        // --- 1. ADMIN NOTIFICATION HTML ---
        let adminHtml = ""
        if (isProductInquiry) {
            adminHtml = `
                <h2 style="color:#0f766e;">New Product Inquiry Received</h2>
                <p><strong>Product:</strong> ${product_name}</p>
                <p><strong>Inquiry Type:</strong> Product Inquiry</p>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0;" />
                <h4>Customer Details</h4>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0;" />
                <h4>Customer Message</h4>
                <div style="background:#f9fafb;padding:12px;border-left:4px solid #0f766e;">
                ${message ? message.replace(/\n/g, '<br>') : 'No message provided'}
                </div>
                <br />
                <p style="font-size:12px;color:#6b7280;">Sent from Hexamech Tools website</p>
            `
        } else {
            adminHtml = `
                <h2 style="color:#0f766e;">New Contact Enquiry</h2>
                <p><strong>Inquiry Type:</strong> General Contact</p>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0;" />
                <h4>Customer Details</h4>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobile}</p>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:12px 0;" />
                <h4>Message</h4>
                <div style="background:#f9fafb;padding:12px;border-left:4px solid #0f766e;">
                ${message ? message.replace(/\n/g, '<br>') : 'No message provided'}
                </div>
                <br />
                <p style="font-size:12px;color:#6b7280;">Sent from Hexamech Tools website</p>
            `
        }

        // --- 2. CUSTOMER AUTO-REPLY HTML ---
        let customerHtml = ""
        if (isProductInquiry) {
            customerHtml = `
                <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;color:#111827;">
                <h2 style="color:#0f766e;">Dear ${name},</h2>
                <p>Thank you for contacting <strong>Hexamech Tools</strong>.</p>
                <p>We have received your enquiry regarding the following product:</p>
                <p style="font-weight:bold;color:#0f766e;">${product_name}</p>
                <p>Our sales team is reviewing your request and will get back to you within <strong>2–4 business hours</strong>.</p>
                <p>For quicker assistance, you may also contact us directly on WhatsApp:</p>
                <a href="https://wa.me/${whatsappNumber}"
                style="display:inline-block;margin:16px 0;padding:12px 18px;
                    background:#0f766e;color:#ffffff;text-decoration:none;
                    border-radius:6px;font-weight:bold;">
                Chat on WhatsApp </a>
                <p style="margin-top:24px;">Best regards,<br /><strong>Hexamech Tools Team</strong></p>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
                <p style="font-size:12px;color:#6b7280;">This is an automated acknowledgement email.</p>
                </div>
            `
        } else {
            customerHtml = `
                <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;color:#111827;">
                <h2 style="color:#0f766e;">Dear ${name},</h2>
                <p>Thank you for getting in touch with <strong>Hexamech Tools</strong>.</p>
                <p>We have received your enquiry and our team will review your message shortly.</p>
                <p>You can expect a response within <strong>2–4 business hours</strong>.</p>
                <p>If you need immediate assistance, feel free to reach us on WhatsApp:</p>
                <a href="https://wa.me/${whatsappNumber}"
                style="display:inline-block;margin:16px 0;padding:12px 18px;
                    background:#0f766e;color:#ffffff;text-decoration:none;
                    border-radius:6px;font-weight:bold;">
                Chat on WhatsApp </a>
                <p style="margin-top:24px;">Warm regards,<br /><strong>Hexamech Tools Team</strong></p>
                <hr style="border:none;border-top:1px solid #e5e7eb;margin:20px 0;" />
                <p style="font-size:12px;color:#6b7280;">This is an automated acknowledgement email.</p>
                </div>
            `
        }

        // --- 1. SEND ADMIN NOTIFICATION ---
        const adminResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'api-key': apiKey,
            },
            body: JSON.stringify({
                sender: { email: senderEmail, name: senderName },
                to: [{ email: recipientEmail, name: "Hexamech Admin" }],
                subject: isProductInquiry ? `New Product Inquiry: ${product_name} - ${name}` : `New Contact Enquiry from ${name}`,
                htmlContent: adminHtml
            })
        })

        // --- 2. SEND CUSTOMER AUTO-REPLY ---
        const customerResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'api-key': apiKey,
            },
            body: JSON.stringify({
                sender: { email: senderEmail, name: senderName },
                to: [{ email: email, name: name }],
                subject: `Thank you for contacting Hexamech Tools`,
                htmlContent: customerHtml
            })
        })

        if (!adminResponse.ok) {
            const errorData = await adminResponse.json();
            console.error('Admin Email Error:', errorData);
        }

        return NextResponse.json({ success: true, message: 'Process completed' })

    } catch (error) {
        console.error('Send Email Route Error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
