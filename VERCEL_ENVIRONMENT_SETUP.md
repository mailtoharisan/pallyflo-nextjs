# 🔧 Vercel Environment Variables Setup Guide

## Required Environment Variables

### Supabase Configuration
You need to set these environment variables in your Vercel dashboard:

#### 1. `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: Your Supabase project URL
- **Format**: `https://your-project-id.supabase.co`
- **Example**: `https://roqqelsjmxkhreoqgcdo.supabase.co`

#### 2. `SUPABASE_SERVICE_ROLE_KEY`
- **Value**: Your Supabase service role key
- **Format**: Long string starting with `eyJ...`
- **Security**: This is a sensitive key - keep it secure

## How to Set Environment Variables in Vercel

### Step 1: Access Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Sign in to your account
3. Navigate to your project: `pallyflo-nextjs`

### Step 2: Go to Settings
1. Click on your project
2. Go to **Settings** tab
3. Click on **Environment Variables** in the left sidebar

### Step 3: Add Environment Variables
1. Click **Add New**
2. Add each variable:

#### For `NEXT_PUBLIC_SUPABASE_URL`:
- **Name**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: `https://your-project-id.supabase.co`
- **Environment**: Select all (Production, Preview, Development)
- **Click**: **Save**

#### For `SUPABASE_SERVICE_ROLE_KEY`:
- **Name**: `SUPABASE_SERVICE_ROLE_KEY`
- **Value**: `your-service-role-key-here`
- **Environment**: Select all (Production, Preview, Development)
- **Click**: **Save**

### Step 4: Redeploy
After adding environment variables:
1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Or trigger a new deployment by pushing to GitHub

## Getting Your Supabase Values

### 1. Supabase URL
1. Go to your Supabase project dashboard
2. Go to **Settings** → **API**
3. Copy the **Project URL**

### 2. Service Role Key
1. In the same **Settings** → **API** page
2. Copy the **service_role** key (not the anon key)
3. ⚠️ **Important**: This is a sensitive key with admin privileges

## Verification

### Check Environment Variables
1. In Vercel dashboard, go to **Settings** → **Environment Variables**
2. Verify both variables are listed
3. Ensure they're enabled for all environments

### Test Deployment
1. Trigger a new deployment
2. Check the build logs for any environment variable errors
3. Test your application's API routes

## Troubleshooting

### Common Issues

#### 1. "Environment Variable not found"
- **Solution**: Ensure variables are set in Vercel dashboard
- **Check**: Variable names match exactly (case-sensitive)

#### 2. "Supabase connection failed"
- **Solution**: Verify the URL and service role key are correct
- **Check**: No extra spaces or characters in the values

#### 3. "API routes not working"
- **Solution**: Ensure `SUPABASE_SERVICE_ROLE_KEY` is set
- **Check**: Service role key has proper permissions

### Debug Commands
```bash
# Check if environment variables are accessible
echo $NEXT_PUBLIC_SUPABASE_URL
echo $SUPABASE_SERVICE_ROLE_KEY

# Test Supabase connection
curl -H "Authorization: Bearer $SUPABASE_SERVICE_ROLE_KEY" \
     "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/"
```

## Security Best Practices

### Environment Variables
- ✅ **Never commit** environment variables to git
- ✅ **Use Vercel dashboard** for sensitive values
- ✅ **Rotate keys** regularly
- ✅ **Limit access** to necessary team members

### Supabase Security
- ✅ **Use service role key** only for server-side operations
- ✅ **Implement RLS** (Row Level Security) policies
- ✅ **Monitor API usage** in Supabase dashboard
- ✅ **Set up proper CORS** for your domain

## Support

### Documentation
- **Vercel Environment Variables**: [vercel.com/docs/environment-variables](https://vercel.com/docs/environment-variables)
- **Supabase Configuration**: [supabase.com/docs/guides/getting-started](https://supabase.com/docs/guides/getting-started)

### Contact
- **Issues**: Create GitHub issues for deployment problems
- **Vercel Support**: Use Vercel dashboard support
- **Supabase Support**: Use Supabase dashboard support

---

**🎉 Once environment variables are set, your Pallyflo application will be fully functional on Vercel!**
