import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://roqqelsjmxkhreoqgcdo.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

let supabase: ReturnType<typeof createClient> | null = null

if (supabaseUrl && supabaseKey) {
  try {
    supabase = createClient(supabaseUrl, supabaseKey)
  } catch (error) {
    console.error('Failed to initialize Supabase client:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, message } = body

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Full name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // If Supabase is not configured, simulate success for testing
    if (!supabase) {
      console.log('Supabase not configured, simulating successful submission')
      console.log('Contact message:', { fullName, email, phone, message })
      
      return NextResponse.json(
        { 
          message: 'Message sent successfully (simulated)',
          id: 'simulated-id-' + Date.now()
        },
        { status: 201 }
      )
    }

    // Insert contact message into Supabase
    const { data, error } = await supabase
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .from('contact_messages' as any)
      .insert({
        full_name: fullName,
        email: email,
        phone: phone || null,
        message: message,
        status: 'new',
        created_at: new Date().toISOString()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Message sent successfully',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        id: (data as any)?.[0]?.id 
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
