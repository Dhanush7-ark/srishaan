// 'use server';

// import nodemailer from 'nodemailer';

// export async function sendContactEmail(formData: {
//   fullName: string;
//   company: string;
//   email: string;
//   phone: string;
//   interest: string;
//   message: string;
// }) {
//   const { 
//     SMTP_HOST, 
//     SMTP_PORT, 
//     SMTP_USER, 
//     SMTP_PASS,
//     CONTACT_EMAIL_RECEIVER = 'dhanushbalusupati@gmai.com'
//   } = process.env;

//   console.log('Attempting to send email via SMTP:', {
//     host: SMTP_HOST,
//     port: SMTP_PORT,
//     user: SMTP_USER,
//     receiver: CONTACT_EMAIL_RECEIVER
//   });

//   // Check if SMTP configuration is missing
//   if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
//     console.error('SMTP configuration is missing');
//     return { 
//       success: false, 
//       error: 'Email service is not configured. Please add SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS to environment variables.' 
//     };
//   }

//   const transporter = nodemailer.createTransport({
//     host: SMTP_HOST.trim(),
//     port: parseInt(SMTP_PORT.trim()),
//     secure: parseInt(SMTP_PORT.trim()) === 465, // true for 465, false for other ports
//     auth: {
//       user: SMTP_USER,
//       pass: SMTP_PASS,
//     },
//   });

//   try {
//     const { fullName, company, email, phone, interest, message } = formData;

//     const mailOptions = {
//       from: `"Srishaan Contact" <${SMTP_USER}>`,
//       to: CONTACT_EMAIL_RECEIVER,
//       subject: `New Application: ${interest} - ${fullName}`,
//       replyTo: email,
//       html: `
//         <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 10px;">
//           <h2 style="color: #04091A; border-bottom: 2px solid #f0a500; padding-bottom: 10px;">New Form Submission</h2>
          
//           <div style="margin-top: 20px;">
//             <p><strong>Full Name:</strong> ${fullName}</p>
//             <p><strong>Company:</strong> ${company}</p>
//             <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
//             <p><strong>Phone Number:</strong> ${phone || 'Not provided'}</p>
//             <p><strong>Area of Interest:</strong> ${interest}</p>
//           </div>
          
//           <div style="margin-top: 30px; padding: 20px; background: #f8faff; border-radius: 8px;">
//             <p><strong>Message:</strong></p>
//             <p style="white-space: pre-wrap;">${message}</p>
//           </div>
          
//           <div style="margin-top: 40px; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 20px;">
//             <p>This message was sent from the contact form on srishaan.co.in</p>
//           </div>
//         </div>
//       `,
//     };

//     await transporter.sendMail(mailOptions);

//     return { success: true };
//   } catch (error: any) {
//     console.error('Nodemailer Error:', error);
//     return { success: false, error: error.message || 'An unexpected error occurred while sending the email.' };
//   }
// }



export async function sendContactEmail(formData: {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
}) {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: 'ae42f7a1-464f-457a-9afb-bfc1c11e8c55',

        subject: `New Application: ${formData.interest} - ${formData.fullName}`,

        from_name: 'Srishaan Contact Form',

        name: formData.fullName,
        email: formData.email,
        message: formData.message,

        company: formData.company,
        phone: formData.phone,
        interest: formData.interest,
      }),
    });

    const result = await response.json();

    console.log(result);

    if (result.success) {
      return { success: true };
    } else {
      return {
        success: false,
        error: result.message || 'Failed to send message',
      };
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message || 'Something went wrong',
    };
  }
}