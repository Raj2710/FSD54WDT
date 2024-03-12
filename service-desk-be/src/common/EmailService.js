import sgMail from '@sendgrid/mail'

const sendMail = async()=>{

    sgMail.setApiKey(process.env.SG_API_KEY)
    
    const msg = {
        to: 'nagarajansai2727@gmail.com', // Change to your recipient
        from: process.env.FROM_EMAIL, // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })

}

const welcomeEmail = async (req,res)=>{
    console.log(process.env.FROM_EMAIL,process.env.SG_API_KEY)
    await sendMail()
    res.send({
        message:"Email Sent"
    })
}

export default {
    welcomeEmail
}