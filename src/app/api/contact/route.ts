import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// Validation schema for contact form
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  inquiryType: z.enum(['general', 'coaching', 'team', 'support', 'press', 'partnership']),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

// Map inquiry types to readable names
const inquiryTypeLabels: Record<string, string> = {
  general: 'General Question',
  coaching: 'Coaching Session Booking',
  team: 'Team/Federation Package',
  support: 'Technical Support',
  press: 'Press & Media',
  partnership: 'Partnership Opportunity',
}

export async function POST(request: NextRequest) {
  try {
    // Debug: Log environment variables (without showing password)
    console.log('Email config check:', {
      host: process.env.EMAIL_HOST || 'NOT SET',
      port: process.env.EMAIL_PORT || 'NOT SET',
      user: process.env.EMAIL_USER || 'NOT SET',
      passwordSet: !!process.env.EMAIL_PASSWORD,
      from: process.env.EMAIL_FROM || 'NOT SET',
    })

    const body = await request.json()

    // Validate the request body
    const validatedData = contactSchema.parse(body)

    // Email to contact@theskateworkshop.app
    const contactEmail = {
      from: `"The Skate Workshop" <${process.env.EMAIL_FROM || 'waitlist@theskateworkshop.app'}>`,
      replyTo: validatedData.email,
      to: 'contact@theskateworkshop.app',
      subject: `Contact Form: ${validatedData.subject}`,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
        'X-Mailer': 'The Skate Workshop',
      },
      text: `New contact form submission:

Name: ${validatedData.name}
Email: ${validatedData.email}
Inquiry Type: ${inquiryTypeLabels[validatedData.inquiryType]}
Subject: ${validatedData.subject}

Message:
${validatedData.message}

Submitted: ${new Date().toLocaleString()}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #E84545; border-bottom: 2px solid #E84545; padding-bottom: 10px;">New Contact Form Submission</h2>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${validatedData.name}</p>
              <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              <p><strong>Inquiry Type:</strong> ${inquiryTypeLabels[validatedData.inquiryType]}</p>
              <p><strong>Subject:</strong> ${validatedData.subject}</p>
            </div>
            <div style="margin: 20px 0;">
              <p><strong>Message:</strong></p>
              <p style="background: #fff; padding: 15px; border-left: 4px solid #E84545;">${validatedData.message.replace(/\n/g, '<br>')}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">Submitted: ${new Date().toLocaleString()}</p>
          </div>
        </body>
        </html>
      `,
    }

    // Confirmation email to sender
    const confirmationEmail = {
      from: `"The Skate Workshop" <${process.env.EMAIL_FROM || 'waitlist@theskateworkshop.app'}>`,
      replyTo: process.env.EMAIL_FROM || 'waitlist@theskateworkshop.app',
      to: validatedData.email,
      subject: 'Message Received - The Skate Workshop',
      headers: {
        'X-Mailer': 'The Skate Workshop',
      },
      text: `Hey ${validatedData.name},

Thanks for reaching out to The Skate Workshop!

We've received your message about "${validatedData.subject}" and will get back to you within 24 hours.

Here's a copy of your message:
${validatedData.message}

If you need urgent assistance, please reply directly to this email.

- The Skate Workshop Team`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #E84545;">Message Received!</h2>
            <p>Hey ${validatedData.name},</p>
            <p>Thanks for reaching out to The Skate Workshop!</p>
            <p>We've received your message about <strong>"${validatedData.subject}"</strong> and will get back to you within 24 hours.</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #E84545; margin: 20px 0;">
              <p><strong>Your Message:</strong></p>
              <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
            </div>
            <p>If you need urgent assistance, please reply directly to this email.</p>
            <p style="margin-top: 30px;">- The Skate Workshop Team</p>
          </div>
        </body>
        </html>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(contactEmail),
      transporter.sendMail(confirmationEmail),
    ])

    // Log for backup
    console.log('Contact form submitted:', {
      name: validatedData.name,
      email: validatedData.email,
      inquiryType: validatedData.inquiryType,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Message sent successfully!',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: 'Invalid data provided', errors: error.issues },
        { status: 400 }
      )
    }

    // Log detailed error for debugging
    console.error('Contact form API error:', error)
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    })

    return NextResponse.json(
      {
        message: 'Failed to send message. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
