import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Validation schema
const waitlistSchema = z.object({
  email: z.string().email('Invalid email address'),
  name: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the request body
    const validatedData = waitlistSchema.parse(body)

    // TODO: Store in database (Supabase)
    // For now, we'll just log it and return success
    console.log('Waitlist submission:', validatedData)

    // In a real implementation, you would:
    // 1. Check if email already exists
    // 2. Save to Supabase waitlist table
    // 3. Send confirmation email
    // 4. Add to mailing list (e.g., Mailchimp, SendGrid)

    // Example Supabase implementation:
    /*
    const { createClient } = require('@supabase/supabase-js')
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          email: validatedData.email,
          name: validatedData.name,
          source: 'website',
          created_at: new Date().toISOString(),
        }
      ])
      .select()

    if (error) {
      // Check for unique constraint violation
      if (error.code === '23505') {
        return NextResponse.json(
          { message: "You're already on the waitlist! Check your email for updates." },
          { status: 400 }
        )
      }
      throw error
    }
    */

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
        { message: 'Invalid data provided', errors: error.errors },
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
