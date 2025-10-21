import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

// Validation schema
const waitlistSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
})

// Path to store waitlist emails
const WAITLIST_FILE = path.join(process.cwd(), 'data', 'waitlist.json')

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data')
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true })
  }
}

// Check if email already exists
function isEmailInWaitlist(email: string): boolean {
  try {
    ensureDataDirectory()
    if (!fs.existsSync(WAITLIST_FILE)) {
      return false
    }
    const data = fs.readFileSync(WAITLIST_FILE, 'utf-8')
    const waitlist = JSON.parse(data)
    return waitlist.some((entry: any) => entry.email.toLowerCase() === email.toLowerCase())
  } catch (error) {
    console.error('Error checking waitlist:', error)
    return false
  }
}

// Add email to waitlist file (only works locally, fails gracefully on Vercel)
function addToWaitlist(email: string, name?: string) {
  try {
    ensureDataDirectory()
    let waitlist = []
    if (fs.existsSync(WAITLIST_FILE)) {
      const data = fs.readFileSync(WAITLIST_FILE, 'utf-8')
      waitlist = JSON.parse(data)
    }
    waitlist.push({
      email,
      name: name || null,
      timestamp: new Date().toISOString(),
    })
    fs.writeFileSync(WAITLIST_FILE, JSON.stringify(waitlist, null, 2))
  } catch (error) {
    // Vercel has read-only filesystem, so this will fail in production
    // Just log and continue - emails are the primary record
    console.log('Note: Waitlist file storage unavailable (Vercel environment)')
  }
}

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
      recipient: process.env.WAITLIST_RECIPIENT || 'NOT SET',
    })

    const body = await request.json()

    // Validate the request body
    const validatedData = waitlistSchema.parse(body)

    // Check for duplicate email (only works locally with file storage)
    // In production (Vercel), duplicate prevention is handled via email records
    if (isEmailInWaitlist(validatedData.email)) {
      return NextResponse.json(
        { message: "You're already on the waitlist! We'll notify you when we launch." },
        { status: 400 }
      )
    }

    // Try to add to waitlist file (works locally, fails gracefully on Vercel)
    addToWaitlist(validatedData.email, validatedData.name)

    // Email 1: Notify admin
    const adminEmail = {
      from: process.env.EMAIL_FROM || 'waitlist@theskateworkshop.app',
      to: process.env.WAITLIST_RECIPIENT || 'waitlist@theskateworkshop.app',
      subject: 'New Waitlist Signup',
      text: `New waitlist signup:\n\nEmail: ${validatedData.email}${validatedData.name ? `\nName: ${validatedData.name}` : ''}\nDate: ${new Date().toLocaleString()}`,
    }

    // Email 2: Confirm to user
    const userEmail = {
      from: process.env.EMAIL_FROM || 'waitlist@theskateworkshop.app',
      to: validatedData.email,
      subject: 'Welcome to The Skate Workshop Waitlist!',
      text: `${validatedData.name ? `Hey ${validatedData.name}` : 'Hey'},\n\nThanks for joining The Skate Workshop waitlist!\n\nWe'll notify you as soon as we launch. Get ready to level up your skateboarding with Willy Santos.\n\nStay tuned!\n\n- The Skate Workshop Team`,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminEmail),
      transporter.sendMail(userEmail),
    ])

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

    // Log detailed error for debugging
    console.error('Waitlist API error:', error)
    console.error('Error details:', {
      name: error instanceof Error ? error.name : 'Unknown',
      message: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    })

    return NextResponse.json(
      {
        message: 'Failed to join waitlist. Please try again.',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
