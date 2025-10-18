# 🔧 Environment Setup for Supabase Integration

## ⚠️ **IMPORTANT: You need to set up environment variables for the form to work with Supabase**

### **Step 1: Get Service Role Key**
1. Go to https://supabase.com/dashboard
2. Select the "pallyflo" project (ID: roqqelsjmxkhreoqgcdo)
3. Navigate to **Settings > API**
4. Copy the **"service_role"** key (NOT the anon key)
5. The service role key starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### **Step 2: Create Environment File**
Create a file named `.env.local` in the project root (`pallyflo-nextjs/.env.local`) with:

```env
NEXT_PUBLIC_SUPABASE_URL=https://roqqelsjmxkhreoqgcdo.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_actual_service_role_key_here
```

### **Step 3: Restart Development Server**
After creating the `.env.local` file:
1. Stop the current dev server (Ctrl+C)
2. Run `npm run dev` again
3. Test the form at `/careers/apply`

## 🧪 **Testing the Form**

### **Current Status:**
- ✅ Supabase project is ACTIVE_HEALTHY
- ✅ Database table `career_applications` is created
- ✅ API route is configured
- ❌ **Missing**: Service role key in environment variables

### **What happens without the service role key:**
- Form shows "Application submitted successfully (simulated)"
- No data is actually saved to Supabase
- Console shows "Supabase not configured, simulating successful submission"

### **What happens with the service role key:**
- Form data is saved to Supabase database
- You can view applications in Supabase dashboard
- Real-time data persistence

## 📊 **Viewing Applications in Supabase**

Once you have the service role key set up:
1. Go to https://supabase.com/dashboard
2. Select "pallyflo" project
3. Go to **Table Editor**
4. Select `career_applications` table
5. View all submitted applications

## 🔍 **Troubleshooting**

### **If form still doesn't work:**
1. Check browser console for errors
2. Verify `.env.local` file is in the correct location
3. Make sure to restart the dev server after adding environment variables
4. Check that the service role key is correct (starts with `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9`)

### **Test API directly:**
Visit `/simple-test` page to test the API endpoint without the form.
