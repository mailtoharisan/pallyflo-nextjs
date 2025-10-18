-- Create career_applications table
CREATE TABLE career_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  cv_link TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'reviewed', 'accepted', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX idx_career_applications_email ON career_applications(email);

-- Create index on status for filtering
CREATE INDEX idx_career_applications_status ON career_applications(status);

-- Create index on created_at for sorting
CREATE INDEX idx_career_applications_created_at ON career_applications(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting applications (public can insert)
CREATE POLICY "Allow public to insert applications" ON career_applications
  FOR INSERT WITH CHECK (true);

-- Create policy for admin to view all applications
CREATE POLICY "Allow admin to view applications" ON career_applications
  FOR SELECT USING (true);

-- Create policy for admin to update applications
CREATE POLICY "Allow admin to update applications" ON career_applications
  FOR UPDATE USING (true);
