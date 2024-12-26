import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      const msg = {
        to: process.env.RECIPIENT_EMAIL, // Votre adresse email
        from: email, // L'adresse email du visiteur
        subject: `Nouveau message de ${name}`,
        text: message,
        html: `<p><strong>Nom:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong><br>${message}</p>`,
      };

      await sgMail.send(msg);

      res.status(200).json({ success: true, message: 'E-mail envoyé avec succès.' });
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
      res.status(500).json({ success: false, message: 'Erreur lors de l\'envoi de l\'e-mail.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Méthode ${req.method} non autorisée` });
  }
}