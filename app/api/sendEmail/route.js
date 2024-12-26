import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);



export async function POST(req) {

  try {
    const body = await req.json(); 
    const { name, email, message } = body;

      const msg = {
        to: process.env.RECIPIENT_EMAIL, 
        cc: email,
        from: process.env.RECIPIENT_EMAIL,
        subject: `Message envoyé depuis ords-portefolio. Expediteur : ${name}`,
        text: message,
        html: `<p><strong>Nom:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br>${message}</p>`,
      };

      await sgMail.send(msg);

      return new Response(
        JSON.stringify({ success: true, message: "E-mail envoyé avec succès." }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error.response.body);
      return new Response(
        JSON.stringify({ success: false, message: "Erreur lors de l'envoi de l'e-mail." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );

}

}