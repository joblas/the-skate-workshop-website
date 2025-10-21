import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// Validation schema for coach application
const coachApplicationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  yearsExperience: z.string().min(1, 'Years of experience is required'),
  message: z.string().min(10, 'Please tell us why you want to join (at least 10 characters)'),
})

// Email transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

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
    const validatedData = coachApplicationSchema.parse(body)

    // Email to applications@theskateworkshop.app
    const applicationEmail = {
      from: `"The Skate Workshop" <${process.env.EMAIL_FROM || 'waitlist@theskateworkshop.app'}>`,
      replyTo: validatedData.email,
      to: 'applications@theskateworkshop.app',
      subject: 'New Coach Application',
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high',
        'X-Mailer': 'The Skate Workshop',
      },
      text: `New coach application received:

Full Name: ${validatedData.fullName}
Email: ${validatedData.email}
Phone: ${validatedData.phone}
Years of Experience: ${validatedData.yearsExperience}

Why they want to join:
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
            <h2 style="color: #E84545; border-bottom: 2px solid #E84545; padding-bottom: 10px;">New Coach Application</h2>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Full Name:</strong> ${validatedData.fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${validatedData.email}">${validatedData.email}</a></p>
              <p><strong>Phone:</strong> ${validatedData.phone}</p>
              <p><strong>Years of Experience:</strong> ${validatedData.yearsExperience}</p>
            </div>
            <div style="margin: 20px 0;">
              <p><strong>Why they want to join:</strong></p>
              <p style="background: #fff; padding: 15px; border-left: 4px solid #E84545;">${validatedData.message.replace(/\n/g, '<br>')}</p>
            </div>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="color: #666; font-size: 12px;">Submitted: ${new Date().toLocaleString()}</p>
          </div>
        </body>
        </html>
      `,
    }

    // Confirmation email to applicant
    const confirmationEmail = {
      from: `"The Skate Workshop" <${process.env.EMAIL_FROM || 'waitlist@theskateworkshop.app'}>`,
      replyTo: process.env.EMAIL_FROM || 'waitlist@theskateworkshop.app',
      to: validatedData.email,
      subject: 'Coach Application Received - The Skate Workshop',
      headers: {
        'X-Mailer': 'The Skate Workshop',
      },
      text: `Hey ${validatedData.fullName},

Thanks for your interest in joining The Skate Workshop coaching network!

We've received your application and will review it carefully. We'll get back to you within 3-5 business days.

In the meantime, feel free to explore our platform at theskateworkshop.app to see what we're building together.

Looking forward to potentially working with you!

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
            <h2 style="color: #E84545;">Application Received!</h2>
            <p>Hey ${validatedData.fullName},</p>
            <p>Thanks for your interest in joining The Skate Workshop coaching network!</p>
            <p>We've received your application and will review it carefully. We'll get back to you within 3-5 business days.</p>
            <p>In the meantime, feel free to explore our platform at <a href="https://theskateworkshop.app" style="color: #E84545;">theskateworkshop.app</a> to see what we're building together.</p>
            <p>Looking forward to potentially working with you!</p>
            <p style="margin-top: 30px;">- The Skate Workshop Team</p>
          </div>
        </body>
        </html>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(applicationEmail),
      transporter.sendMail(confirmationEmail),
    ])

    // Log for backup
    console.log('Coach application submitted:', {
      name: validatedData.fullName,
      email: validatedData.email,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Application submitted successfully!',
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
    console.error('Coach application API error:', error)
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    })

    return NextResponse.json(
      {
        message: 'Failed to submit application. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
