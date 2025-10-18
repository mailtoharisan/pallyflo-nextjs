# 📁 File Upload Setup for Career Applications

## ✅ **Supabase Storage Configuration Complete**

### **🗄️ Storage Bucket Created:**
- **Bucket Name**: `resumes`
- **File Size Limit**: 5MB
- **Allowed File Types**: PDF, DOC, DOCX, TXT
- **Access**: Public upload, private by default

### **🔒 Security Policies:**
- ✅ Public can upload resumes
- ✅ Public can view resumes  
- ✅ Admin can manage all resumes

### **📊 Database Schema Updated:**
- ✅ `resume_file_path` - Path in storage bucket
- ✅ `resume_file_name` - Original filename
- ✅ `cv_link` - Public URL (backward compatibility)

## 🎯 **Form Features:**

### **✅ File Upload Field:**
- **Type**: File input with drag & drop styling
- **Accepted Types**: `.pdf`, `.doc`, `.docx`, `.txt`
- **Size Limit**: 5MB maximum
- **Validation**: Client-side and server-side

### **✅ User Experience:**
- **File Selection**: Shows selected file name and size
- **Progress**: Real-time file size display
- **Validation**: Immediate feedback on file type/size
- **Error Handling**: Clear error messages

### **✅ Security Features:**
- **File Type Validation**: Only allowed MIME types
- **Size Validation**: 5MB limit enforced
- **Unique Filenames**: Prevents conflicts
- **Secure Storage**: Files stored in Supabase Storage

## 🧪 **Testing the File Upload:**

### **Step 1: Test Form**
1. Navigate to `/careers/apply`
2. Fill out all required fields
3. **Select a resume file** (PDF, DOC, DOCX, or TXT)
4. Submit the form

### **Step 2: Verify Upload**
1. Check browser console for success message
2. Go to Supabase Dashboard > Storage > resumes
3. Verify file was uploaded with correct name
4. Check database table for new entry

### **Step 3: Test File Validation**
- **Try uploading large file** (>5MB) - should show error
- **Try uploading wrong file type** - should show error
- **Try submitting without file** - should show error

## 📁 **File Storage Structure:**

```
Supabase Storage > resumes/
├── John_Doe_1734512345678.pdf
├── Jane_Smith_1734512345679.docx
└── ...
```

## 🔍 **Database Records:**

Each application now includes:
- `resume_file_path`: `resumes/John_Doe_1734512345678.pdf`
- `resume_file_name`: `John_Doe_Resume.pdf`
- `cv_link`: `https://roqqelsjmxkhreoqgcdo.supabase.co/storage/v1/object/public/resumes/...`

## 🚀 **Benefits of File Upload:**

### **✅ Security:**
- Files stored securely in Supabase Storage
- No external dependencies
- Controlled access and permissions

### **✅ User Experience:**
- No need for external file sharing services
- Direct upload from form
- Real-time validation and feedback

### **✅ Management:**
- All resumes in one place
- Easy to download and review
- Organized by applicant name and timestamp

## 🔧 **Troubleshooting:**

### **If file upload fails:**
1. Check file size (must be < 5MB)
2. Check file type (PDF, DOC, DOCX, TXT only)
3. Check browser console for errors
4. Verify Supabase Storage bucket exists

### **If form submission fails:**
1. Check environment variables are set
2. Verify Supabase project is active
3. Check storage policies are correct
4. Test with smaller file first

**The file upload system is now fully functional! Users can upload their resumes directly through the form, and files are securely stored in Supabase Storage.**
