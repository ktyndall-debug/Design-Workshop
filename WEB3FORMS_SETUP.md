# Web3Forms Setup Instructions

## 🚀 Quick Setup Guide

### Step 1: Get Your Web3Forms Access Key

1. **Visit Web3Forms**: Go to [https://web3forms.com](https://web3forms.com)
2. **Create Account**: Sign up for a free account
3. **Get Access Key**: Copy your unique access key from the dashboard

### Step 2: Add Your Access Key

1. **Open `index.html`**
2. **Find this line** (around line 366):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
3. **Replace `YOUR_ACCESS_KEY_HERE`** with your actual access key:
   ```html
   <input type="hidden" name="access_key" value="your-actual-access-key-here">
   ```

### Step 3: Test Your Form

1. **Open your website** in a browser
2. **Fill out the contact form** with test data
3. **Submit the form** - you should see a success message
4. **Check your email** - you should receive the form submission

## 📧 Email Configuration

### Default Settings:
- **From**: The email entered in the form
- **To**: Your Web3Forms account email
- **Subject**: "New Contact Form Submission from Kyle's Design Workshop"

### Custom Email Settings (Optional):

You can customize the email by adding these hidden fields to your form:

```html
<!-- Custom "To" email -->
<input type="hidden" name="to" value="your-custom-email@domain.com">

<!-- Custom "From" name -->
<input type="hidden" name="from_name" value="Kyle's Design Workshop">

<!-- Custom "Reply To" -->
<input type="hidden" name="replyto" value="noreply@yourdomain.com">
```

## 🔧 Advanced Features

### 1. Custom Success Page
Change the redirect URL in the form:
```html
<input type="hidden" name="redirect" value="https://yourdomain.com/thank-you">
```

### 2. Email Template Customization
Add this field to customize the email format:
```html
<input type="hidden" name="template" value="table">
```

### 3. CC/BCC Recipients
```html
<input type="hidden" name="cc" value="manager@company.com">
<input type="hidden" name="bcc" value="backup@company.com">
```

## 🛡️ Security Features

### Spam Protection:
- **Honeypot field**: Already included (hidden checkbox)
- **reCAPTCHA**: Can be added for extra protection
- **Rate limiting**: Built into Web3Forms

### Data Privacy:
- **GDPR Compliant**: Add consent checkbox if needed
- **No data storage**: Web3Forms doesn't store submissions permanently
- **Secure transmission**: All data sent via HTTPS

## ✅ Form Features Included:

- ✅ **Working contact form** with Web3Forms integration
- ✅ **Loading states** with spinner animation
- ✅ **Success/error messages** with auto-hide
- ✅ **Spam protection** with honeypot field
- ✅ **Responsive design** that works on all devices
- ✅ **Custom styling** that matches your site
- ✅ **Form validation** for required fields
- ✅ **Professional email formatting**

## 🎯 Next Steps:

1. **Get your Web3Forms access key**
2. **Replace the placeholder in index.html**
3. **Test the form thoroughly**
4. **Customize email settings if needed**
5. **Monitor form submissions in Web3Forms dashboard**

## 💡 Pro Tips:

- **Test regularly**: Send yourself test emails to ensure it's working
- **Monitor submissions**: Check your Web3Forms dashboard weekly
- **Update subject lines**: Make them specific to track different forms
- **Set up email filters**: Create rules to organize form submissions

## 🆘 Troubleshooting:

**Form not working?**
- Check if access key is correctly replaced
- Verify internet connection
- Check browser console for errors

**Not receiving emails?**
- Check spam/junk folder
- Verify email address in Web3Forms dashboard
- Try a different email address

**Need help?**
- Web3Forms documentation: https://docs.web3forms.com
- Contact Web3Forms support through their website
