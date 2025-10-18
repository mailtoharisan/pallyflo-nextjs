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
    const formData = await request.formData()
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const resumeFile = formData.get('resume') as File

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !resumeFile) {
      return NextResponse.json(
        { error: 'All fields are required' },
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

    // Validate file size (5MB limit)
    if (resumeFile.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'File size must be less than 5MB' },
        { status: 400 }
      )
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'text/plain']
    if (!allowedTypes.includes(resumeFile.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only PDF, DOC, DOCX, and TXT files are allowed' },
        { status: 400 }
      )
    }

    // If Supabase is not configured, simulate success for testing
    if (!supabase) {
      console.log('Supabase not configured, simulating successful submission')
      console.log('Application data:', { firstName, lastName, email, phone, resumeFile: resumeFile.name })
      
      return NextResponse.json(
        { 
          message: 'Application submitted successfully (simulated)',
          id: 'simulated-id-' + Date.now()
        },
        { status: 201 }
      )
    }

    // Upload file to Supabase Storage
    const fileExt = resumeFile.name.split('.').pop()
    const fileName = `${firstName}_${lastName}_${Date.now()}.${fileExt}`
    const filePath = `resumes/${fileName}`

          const { error: uploadError } = await supabase.storage
      .from('resumes')
      .upload(filePath, resumeFile)

    if (uploadError) {
      console.error('File upload error:', uploadError)
      return NextResponse.json(
        { error: 'Failed to upload resume file' },
        { status: 500 }
      )
    }

    // Get public URL for the uploaded file
    const { data: urlData } = supabase.storage
      .from('resumes')
      .getPublicUrl(filePath)

    // Insert application into Supabase
    const { data, error } = await supabase
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .from('career_applications' as any)
      .insert({
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        cv_link: urlData.publicUrl,
        resume_file_path: filePath,
        resume_file_name: resumeFile.name,
        status: 'pending',
        created_at: new Date().toISOString()
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any)
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Application submitted successfully',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        id: (data as any)?.[0]?.id,
        resume_url: urlData.publicUrl
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
