import nodemailer from 'nodemailer';

export const mailer = (text) => {
    // Create a transporter object using SMTP with Gmail
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,      
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });    
    
    // Define email message options
    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.TO,
        subject: text?.title,
        html: `<p>${text?.title}</p><br/><br/><p>${text?.link}</p><br/><br/><p>${text?.content}</p>`
    };
    
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};
