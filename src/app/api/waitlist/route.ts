import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'

// Validation schema
const waitlistSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
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
    const body = await request.json()

    // Validate the request body
    const validatedData = waitlistSchema.parse(body)

    // Send simple email notification
    const emailContent = {
      from: process.env.EMAIL_FROM || 'waitlist@theskateworkshop.app',
      to: process.env.WAITLIST_RECIPIENT || 'waitlist@theskateworkshop.app',
      subject: 'New Waitlist Signup',
      text: `New waitlist signup:\n\nEmail: ${validatedData.email}${validatedData.name ? `\nName: ${validatedData.name}` : ''}\nDate: ${new Date().toLocaleString()}`,
    }

    // Send the email
    await transporter.sendMail(emailContent)

    // Log for backup
    console.log('Waitlist submission:', validatedData)

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist!',
        data: validatedData,
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

    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { message: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    )
  }
}
