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
    console.error('Failed to initialize Supabase client for business inquiries:', error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, companyName, email, companyAddress, website, phone, message, consent } = body

    // Validate required fields
    if (!fullName || !companyName || !email || !companyAddress || !phone || !message) {
      return NextResponse.json(
        { error: 'Full Name, Company Name, Email, Company Address, Phone, and Message are required' },
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

    // Validate consent
    if (!consent) {
      return NextResponse.json(
        { error: 'You must agree to the terms and conditions' },
        { status: 400 }
      )
    }

    // If Supabase is not configured, simulate success for testing
    if (!supabase) {
      console.log('Supabase not configured, simulating successful business inquiry submission')
      console.log('Business inquiry data:', { fullName, companyName, email, companyAddress, website, phone, message, consent })
      
      return NextResponse.json(
        { 
          message: 'Business inquiry submitted successfully (simulated)',
          id: 'simulated-inquiry-id-' + Date.now()
        },
        { status: 201 }
      )
    }

    // Insert business inquiry into Supabase
    const { data, error } = await supabase
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .from('business_inquiries' as any)
      .insert({
        full_name: fullName,
        company_name: companyName,
        email: email,
        company_address: companyAddress,
        website: website || null,
        phone: phone,
        message: message,
        consent: consent,
        status: 'new', // Default status
        created_at: new Date().toISOString()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit business inquiry' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        message: 'Business inquiry submitted successfully',
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
