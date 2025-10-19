# 🚀 Pallyflo Next.js Deployment Guide

## Vercel Deployment Setup

### Prerequisites
1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Connected to your Vercel account
3. **Environment Variables**: Configured in Vercel dashboard

### Environment Variables Required

#### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### GitHub Actions Setup

#### Required Secrets
Add these secrets to your GitHub repository settings:

1. **VERCEL_TOKEN**: Your Vercel API token
   - Go to Vercel Dashboard → Settings → Tokens
   - Create a new token with appropriate permissions

2. **ORG_ID**: Your Vercel organization ID
   - Found in Vercel Dashboard → Settings → General

3. **PROJECT_ID**: Your Vercel project ID
   - Found in your project settings in Vercel Dashboard

### Deployment Workflow

#### Automatic Deployments
- **Main Branch**: Deploys to production
- **Pull Requests**: Creates preview deployments
- **Develop Branch**: Creates staging deployments

#### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Preview URLs

#### Pull Request Previews
- **Format**: `https://{pr-number}-pallyflo-nextjs.vercel.app`
- **Example**: `https://123-pallyflo-nextjs.vercel.app`

#### Production URL
- **URL**: `https://pallyflo-nextjs.vercel.app`

### Build Configuration

#### Next.js Optimizations
- **Framework**: Next.js 15.5.6
- **Runtime**: Node.js 18.x
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

#### Performance Settings
- **Regions**: `iad1` (US East)
- **Functions**: Serverless API routes
- **Caching**: Automatic static optimization

### Monitoring & Analytics

#### Vercel Analytics
- **Performance**: Core Web Vitals tracking
- **Real User Monitoring**: User experience metrics
- **Speed Insights**: Page load performance

#### GitHub Actions Status
- **Build Status**: ✅/❌ indicators
- **Deployment Logs**: Detailed build information
- **Preview Comments**: Automatic PR comments with URLs

### Troubleshooting

#### Common Issues
1. **Build Failures**: Check Node.js version compatibility
2. **Environment Variables**: Verify all required vars are set
3. **API Routes**: Ensure proper function configuration
4. **Static Assets**: Check file paths and imports

#### Debug Commands
```bash
# Check build locally
npm run build

# Test production build
npm start

# Vercel CLI debug
vercel logs
```

### Security Considerations

#### Environment Variables
- **Never commit**: `.env.local` files
- **Use Vercel**: Environment variable management
- **Rotate keys**: Regularly update API keys

#### API Security
- **Rate Limiting**: Implement in API routes
- **CORS**: Configure appropriate origins
- **Authentication**: Secure API endpoints

### Support

#### Documentation
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Actions**: [docs.github.com/actions](https://docs.github.com/actions)

#### Contact
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions
- **Email**: Contact development team

---

**🎉 Happy Deploying!** Your Pallyflo application is now ready for production deployment.

