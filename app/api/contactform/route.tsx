export async function POST(req: any) {
  let nodemailer = require("nodemailer");

  const params = await req.json();

  const endEmail = "biuro@impresjahomes.pl";
  const fromEmail = process.env.FROM_EMAIL;
  const pass = process.env.EMAIL_PASS;

  const transporter =  nodemailer.createTransport({
    port: 465,
    host: "mail-serwer141299.lh.pl",
    secure: true,
    tls: {
      ciphers: "SSLv3",
    },
    auth: {
      // type: "OAuth2",
      user: fromEmail,
      pass: pass,
    },
  });

  const mailData = {
    from: fromEmail,
    to: endEmail,
    subject: `Wiadomość ze strony od: ${params.name}`,
    text: "Hello. This email is for your email verification.",
    html:
      `Imię i nazwisko: ${params.name} ${params.lastName}` +
      `<br>` +
      `Email kontaktowy: ${params.email}` +
      `<br>` +
      `Telefon kontaktowy: ${params.phone}` +
      `<br><br>` +
      `Wiadomość: ${params.massege}` +
      `<br>`,
  };

  async function send() {
    await transporter.sendMail(mailData, function (err: any, info: any) {
      console.log("wysłane");
      if (err) console.log(err);
      else console.log(info);
    });
    Response.json({ status: 200 });
  }

  send();
}
