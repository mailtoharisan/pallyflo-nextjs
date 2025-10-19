# Supabase Setup for Pallyflo Project

## Project Details
- **Project Name**: pallyflo
- **Project ID**: roqqelsjmxkhreoqgcdo
- **Organization**: mailtoharisan
- **Region**: us-east-1
- **Status**: COMING_UP (initializing)

## Environment Variables
Create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://roqqelsjmxkhreoqgcdo.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
```

## Getting the Service Role Key
1. Go to https://supabase.com/dashboard
2. Select the "pallyflo" project
3. Go to Settings > API
4. Copy the "service_role" key (not the anon key)
5. Replace `your_service_role_key_here` in .env.local

## Database Schema
The following table will be created once the project is fully initialized:

### career_applications
- `id` (UUID, Primary Key)
- `first_name` (VARCHAR(100), NOT NULL)
- `last_name` (VARCHAR(100), NOT NULL)
- `email` (VARCHAR(255), NOT NULL)
- `phone` (VARCHAR(20), NOT NULL)
- `cv_link` (TEXT, NOT NULL)
- `status` (VARCHAR(20), DEFAULT 'pending')
- `created_at` (TIMESTAMP WITH TIME ZONE)
- `updated_at` (TIMESTAMP WITH TIME ZONE)

### Indexes
- Email index for faster lookups
- Status index for filtering
- Created_at index for sorting

### Security
- Row Level Security (RLS) enabled
- Public can insert applications
- Admin can view/update applications

## Next Steps
1. Wait for project to fully initialize (status: ACTIVE_HEALTHY)
2. Get service role key from Supabase dashboard
3. Update .env.local with the service role key
4. Test the career application form

