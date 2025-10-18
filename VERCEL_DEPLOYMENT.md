# Vercel Deployment Guide

This guide explains how to deploy your Pallyflo Next.js application to Vercel with automatic deployments and preview URLs.

## Quick Setup

### 1. Connect to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository: `mailtoharisan/pallyflo-nextjs`
4. Set the **Root Directory** to: `pallyflo-nextjs`
5. Click "Deploy"

### 2. Environment Variables
Add these environment variables in Vercel dashboard:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Automatic Deployments
- **Production**: Automatically deploys when you push to `main` branch
- **Preview**: Creates preview URLs for pull requests
- **Branch**: Each branch gets its own preview URL

## Manual GitHub Actions Setup

If you want to set up GitHub Actions for more control:

### 1. Create Workflow File
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
        vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### 2. GitHub Secrets
Add these secrets to your repository:
- `VERCEL_TOKEN`: Get from Vercel Account Settings → Tokens
- `VERCEL_ORG_ID`: Get from Vercel Team Settings
- `VERCEL_PROJECT_ID`: Get from Vercel Project Settings

## Preview URLs

### Automatic Preview URLs
- **Pull Requests**: Vercel automatically creates preview URLs
- **Branches**: Each branch gets a unique preview URL
- **Production**: Deployed to your custom domain

### Manual Preview URLs
You can also create preview deployments manually:
```bash
npx vercel --prod
```

## Troubleshooting

### Common Issues
1. **Build Failures**: Check environment variables are set
2. **Supabase Errors**: Verify database connection
3. **TypeScript Errors**: Run `npm run build` locally first

### Environment Variables
Make sure all required environment variables are set in Vercel:
- `NEXT_PUBLIC_SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

## Deployment Status

After deployment, you'll get:
- ✅ **Production URL**: Your live application
- 🔗 **Preview URLs**: For testing changes
- 📊 **Analytics**: Performance and usage data
- 🔄 **Automatic Updates**: On every push to main

## Next Steps

1. **Test Your Deployment**: Visit your Vercel URL
2. **Set Custom Domain**: Add your domain in Vercel settings
3. **Monitor Performance**: Use Vercel Analytics
4. **Set Up Monitoring**: Configure error tracking

Your Pallyflo application will be live at: `https://your-project-name.vercel.app`
