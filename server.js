
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const app = express();
const config = require('./config.json');
let questions = JSON.parse(fs.readFileSync('./questions.json', 'utf-8'));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(session({ secret: 'secretkey123', resave: false, saveUninitialized: true }));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render("index.html"));

app.get('/login', (req, res) => res.render("login.html"));

app.post('/login', (req, res) => {
  if (req.body.password === config.adminPassword) {
    req.session.auth = true;
    res.redirect('/admin');
  } else {
    res.send("Hatalı şifre");
  }
});

app.get('/admin', (req, res) => {
  if (req.session.auth) res.render("admin.html");
  else res.redirect('/login');
});

app.get('/questions', (req, res) => res.json(questions));

app.post('/admin-add', (req, res) => {
  questions.push(req.body);
  fs.writeFileSync('./questions.json', JSON.stringify(questions, null, 2));
  res.send("Eklendi");
});

app.post('/admin-delete', (req, res) => {
  questions.splice(req.body.index, 1);
  fs.writeFileSync('./questions.json', JSON.stringify(questions, null, 2));
  res.send("Silindi");
});

app.post('/send', async (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const data = Object.entries(req.body).map(([k,v],i) => {
    const q = questions[i]?.question || "Soru";
    return [q, v];
  });
  const html = `
    <h2>📩 Yeni Form Yanıtı</h2>
    <table border="1" cellpadding="8" cellspacing="0">
      <tr><th>Soru</th><th>Cevap</th></tr>
      ${data.map(([q,a]) => `<tr><td>${q}</td><td>${a}</td></tr>`).join("")}
    </table>
    <p><b>IP:</b> ${ip}</p>
    <p><b>Tarih:</b> ${new Date().toLocaleString()}</p>
  `;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.gmailUser,
      pass: config.gmailAppPassword
    }
  });
  try {
    await transporter.sendMail({
      from: config.gmailUser,
      to: config.adminEmail,
      subject: "📝 Yeni Form Yanıtı",
      html
    });
    res.send("Mail gönderildi!");
  } catch (e) {
    console.error(e);
    res.status(500).send("Mail gönderilemedi.");
  }
});

app.listen(3000, () => console.log("http://localhost:3000"));
