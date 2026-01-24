import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    return NextResponse.json({
        hasApiKey: !!process.env.BREVO_API_KEY,
        apiKeyLength: process.env.BREVO_API_KEY?.length || 0,
        apiKeyPrefix: process.env.BREVO_API_KEY?.substring(0, 20) || 'NOT_FOUND',
        senderEmail: process.env.BREVO_SENDER_EMAIL,
        senderName: process.env.BREVO_SENDER_NAME,
        recipientEmail: process.env.BREVO_RECIPIENT_EMAIL,
    })
}
