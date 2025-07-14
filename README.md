# 🔧 Detaylı Kurulum ve Ayarlar Rehberi

<div style="
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  border-radius: 15px;
  box-shadow: 0 8px 24px rgba(0, 123, 255, 0.15);
  padding: 30px 40px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #1e293b;
  max-width: 900px;
  margin: 30px auto;
  line-height: 1.7;
">

<h1 style="color: #0c4a6e; font-weight: 900; font-size: 2.8rem; margin-bottom: 1rem; text-align:center;">
  🔧 Detaylı Kurulum ve Ayarlar Rehberi
</h1>

<section style="margin-bottom: 40px;">
  <h2 style="color: #0369a1; font-weight: 700; font-size: 1.8rem; margin-bottom: 12px; border-bottom: 3px solid #0284c7; padding-bottom: 6px;">
    1. Gerekli Yazılımların Kurulumu
  </h2>
  <p style="font-size: 1.1rem;">
    Bu projeyi çalıştırmak için aşağıdaki yazılımları sisteminize yüklemelisiniz:
  </p>
  <ul style="padding-left: 20px; font-size: 1.05rem; color: #334155;">
    <li style="margin-bottom: 10px;">
      <strong>Node.js</strong>: <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" style="color:#0ea5e9; text-decoration:underline;">https://nodejs.org/</a> adresinden işletim sisteminize uygun son sürümü indirip kurun.<br>
      <em>Önerilen sürüm: <code>v16.x</code> veya üzeri.</em>
    </li>
    <li style="margin-bottom: 10px;">
      <strong>NPM</strong>: Node.js kurulumu ile birlikte gelir. Terminal veya Komut İstemi’ne <code>npm -v</code> yazarak yüklü olduğunu doğrulayabilirsiniz.
    </li>
    <li style="margin-bottom: 10px;">
      <strong>Aktif Gmail Hesabı</strong>: Proje, Gmail SMTP kullanarak form cevaplarını mail olarak göndereceği için, Gmail hesabınızın olması gerekir.
    </li>
  </ul>
</section>

<section style="margin-bottom: 40px;">
  <h2 style="color: #0369a1; font-weight: 700; font-size: 1.8rem; margin-bottom: 12px; border-bottom: 3px solid #0284c7; padding-bottom: 6px;">
    2. Gmail Uygulama Şifresi Oluşturma (Güvenli SMTP Bağlantısı İçin)
  </h2>
  <p style="font-size: 1.1rem;">
    Gmail hesabınızda <strong>İki Adımlı Doğrulama (2FA)</strong> etkin olmalıdır. Ardından projeniz için özel bir <em>uygulama şifresi</em> oluşturmalısınız. İşte adımlar:
  </p>
  <ol style="padding-left: 20px; font-size: 1.05rem; color: #334155;">
    <li style="margin-bottom: 12px;">
      Tarayıcınızda Google Güvenlik sayfasını açın: <a href="https://myaccount.google.com/security" target="_blank" rel="noopener noreferrer" style="color:#0ea5e9; text-decoration:underline;">https://myaccount.google.com/security</a>
    </li>
    <li style="margin-bottom: 12px;">
      <strong>İki Adımlı Doğrulama</strong> seçeneğine gidin ve etkinleştirin (aktif değilse).
    </li>
    <li style="margin-bottom: 12px;">
      <strong>Uygulama Şifreleri</strong> bölümüne gidin veya direkt:  
      <a href="https://myaccount.google.com/apppasswords" target="_blank" rel="noopener noreferrer" style="color:#0ea5e9; text-decoration:underline;">https://myaccount.google.com/apppasswords</a>  
      adresini ziyaret edin.
    </li>
    <li style="margin-bottom: 12px;">
      <strong>Uygulama seçin:</strong> “Posta”  
      <br><strong>Cihaz seçin:</strong> “Diğer (Özel ad)”  
      <br>Örneğin: <em>NodeJS Form Sistemi</em>
    </li>
    <li style="margin-bottom: 12px;">
      <button style="background:#0ea5e9; color:#fff; padding:8px 16px; border:none; border-radius:6px; cursor:pointer; font-weight:700;">Oluştur</button> butonuna tıklayın.
    </li>
    <li style="margin-bottom: 12px;">
      Karşınıza gelen 16 karakterlik <strong>uygulama şifresini</strong> kopyalayın.
    </li>
  </ol>
  <div style="background:#fef3c7; border-left: 6px solid #fbbf24; padding: 15px; border-radius: 8px; font-size: 1rem; color:#92400e; font-weight:600; max-width: 700px; margin-top: 20px;">
    ⚠️ <strong>ÖNEMLİ:</strong> Bu uygulama şifresi Gmail ana şifrenizden farklıdır ve yalnızca SMTP bağlantısı için geçerlidir. Lütfen bu şifreyi kimseyle paylaşmayın ve güvenli tutun.
  </div>
</section>

<section style="margin-bottom: 40px;">
  <h2 style="color: #0369a1; font-weight: 700; font-size: 1.8rem; margin-bottom: 12px; border-bottom: 3px solid #0284c7; padding-bottom: 6px;">
    3. Proje Dosyalarını İndirme ve Bağımlılıkların Kurulumu
  </h2>
  <p style="font-size: 1.1rem;">
    Proje dosyalarını indirip bağımlılıkları yüklemek için terminal veya komut istemcisine aşağıdaki komutları yazın:
  </p>
  <pre style="
    background: #e0f2fe;
    padding: 20px;
    border-radius: 12px;
    font-family: Consolas, 'Courier New', monospace;
    font-size: 1rem;
    color: #1e293b;
    overflow-x: auto;
  ">
git clone https://github.com/senin-kullanici-adi/secure-form-system.git
cd secure-form-system
npm install
  </pre>
  <p style="font-size: 1rem; color: #475569;">
    <em>Not:</em> Eğer Git sisteminizde yüklü değilse, <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" style="color:#0ea5e9;">buradan</a> indirip kurabilirsiniz.
  </p>
</section>

<section style="margin-bottom: 40px;">
  <h2 style="color: #0369a1; font-weight: 700; font-size: 1.8rem; margin-bottom: 12px; border-bottom: 3px solid #0284c7; padding-bottom: 6px;">
    4. config.json Dosyasını Düzenleme
  </h2>
  <p style="font-size: 1.1rem;">
    Projede tüm kritik ayarlar <code>config.json</code> dosyasında tutulur. Bu dosyayı açıp aşağıdaki örneğe göre kendi bilgilerinizi girin:
  </p>
  <pre style="
    background: #e0f2fe;
    padding: 20px;
    border-radius: 12px;
    font-family: Consolas, 'Courier New', monospace;
    font-size: 1rem;
    color: #1e293b;
    overflow-x: auto;
  ">
{
  "adminEmail": "admin@example.com",
  "adminPassword": "guclu-admin-sifreniz",
  "gmailUser": "sizin-gmail-adresiniz@gmail.com",
  "gmailAppPassword": "gmail-uygulama-sifreniz"
}
  </pre>
  <ul style="padding-left: 20px; font-size: 1rem; color: #334155;">
    <li><strong>adminEmail:</strong> Form yanıtlarının gönderileceği e-posta adresiniz.</li>
    <li><strong>adminPassword:</strong> Admin paneline giriş için güçlü şifreniz.</li>
    <li><strong>gmailUser:</strong> SMTP için kullanacağınız Gmail adresiniz.</li>
    <li><strong>gmailAppPassword:</strong> 2. adımda oluşturduğunuz uygulama şifresi.</li>
  </ul>
  <div style="background:#d1fae5; border-left: 6px solid #22c55e; padding: 15px; border-radius: 8px; color:#166534; font-weight:600; max-width: 700px; margin-top: 20px;">
    🔒 <strong>Güvenlik Notu:</strong> <code>config.json</code> dosyanızı asla herkese açık ortamlarda paylaşmayın ve gizliliğini sağlayın.
  </div>
</section>

<section style="margin-bottom: 40px;">
  <h2 style="color: #0369a1; font-weight: 700; font-size: 1.8rem; margin-bottom: 12px; border-bottom: 3px solid #0284c7; padding-bottom: 6px;">
    5. Sunucuyu Başlatma
  </h2>
  <p style="font-size: 1.1rem;">
    Her şey hazırsa, terminalden aşağıdaki komutla sunucunuzu başlatabilirsiniz:
  </p>
  <pre style="
    background: #e0f2fe;
    padding: 20px;
    border-radius: 12px;
    font-family: Consolas, 'Courier New', monospace;
    font-size: 1rem;
    color: #1e293b;
    overflow-x: auto;
  ">
npm start
  </pre>
  <p style="font-size: 1.1rem; margin-top: 10px;">
    Başarıyla çalışmaya başladığında, şu adreslerden erişebilirsiniz:
  </p>
  <ul style="padding-left: 20px; font-size: 1rem; color: #334155;">
    <li><strong>Form sayfası:</strong> <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" style="color:#0ea5e9; text-decoration:underline;">http://localhost:3000</a></li>
    <li><strong>Admin Panel Girişi:</strong> <a href="http://localhost:3000/login" target="_blank" rel="noopener noreferrer" style="color:#0ea5e9; text-decoration:underline;">http://localhost:3000/login</a></li>
  </ul>
  <div style="background:#dbeafe; border-left: 6px solid #3b82f6; padding: 15px; border-radius: 8px; margin-top: 20px; color: #1e40af;">
    💡 <strong>İpucu:</strong> Üretim ortamında çalıştırırken <code>server.js</code> dosyasındaki port ve IP ayarlarını ihtiyacınıza göre değiştirebilirsiniz.
  </div>
</section>

<section style="margin-bottom: 40px;">
  <h2 style="color: #0369a1; font-weight: 700; font-size: 1.8rem; margin-bottom: 12px; border-bottom: 3px solid #0284c7; padding-bottom: 6px;">
    6. Form ve Yönetim Paneli Kullanımı
  </h2>
  <ul style="padding-left: 20px; font-size: 1rem; color: #334155;">
    <li><strong>Form:</strong> Kullanıcılar ana sayfadaki formu doldurabilir ve cevaplarını gönderebilir.</li>
    <li><strong>Admin Girişi:</strong> <code>/login</code> sayfasından, <code>adminPassword</code> ile giriş yapabilirsiniz.</li>
    <li><strong>Admin Panel:</strong> Buradan soruları <em>ekleyebilir</em>, <em>düzenleyebilir</em>, <em>silebilir</em> ve sorulara çoktan seçmeli seçenekler ekleyebilirsiniz.</li>
  </ul>
</section>

<section style="margin-bottom: 40px;">
  <h2 style="color: #0369a1; font-weight: 700; font-size: 1.8rem; margin-bottom: 12px; border-bottom: 3px solid #0284c7; padding-bottom: 6px;">
    7. Güvenlik Önerileri ve İpuçları
  </h2>
  <ul style="padding-left: 20px; font-size: 1rem; color: #334155;">
    <li><strong>Admin şifrenizi güçlü, tahmin edilmesi zor yapın.</strong></li>
    <li><strong>config.json dosyasını gizli tutun ve versiyon kontrolüne dahil etmeyin.</strong></li>
    <li><strong>Üretimde mutlaka HTTPS protokolü kullanın.</strong></li>
    <li><strong>Sunucu güvenliği için firewall ve erişim izinlerini doğru yapılandırın.</strong></li>
    <li><strong>Gmail uygulama şifrenizi kimseyle paylaşmayın.</strong></li>
  </ul>
</section>

<section style="margin-bottom: 40px;">
  <h2 style="color: #0369a1; font-weight: 700; font-size: 1.8rem; margin-bottom: 12px; border-bottom: 3px solid #0284c7; padding-bottom: 6px;">
    8. Olası Problemler ve Çözüm Yolları
  </h2>
  <table style="width: 100%; border-collapse: collapse; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 1rem; color:#334155;">
    <thead>
      <tr style="background-color: #0284c7; color: white; text-align: left;">
        <th style="padding: 12px; border: 1px solid #1e40af;">Problem</th>
        <th style="padding: 12px; border: 1px solid #1e40af;">Çözüm</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #e0f2fe;">
        <td style="padding: 12px; border: 1px solid #1e40af;">Formdan mail gönderilemiyor</td>
        <td style="padding: 12px; border: 1px solid #1e40af;">Gmail hesabınızda 2FA aktif mi ve uygulama şifresi doğru mu kontrol edin. Ayrıca config.json dosyasındaki bilgileri tekrar gözden geçirin.</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #1e40af;">Admin paneline giriş yapılamıyor</td>
        <td style="padding: 12px; border: 1px solid #1e40af;">config.json içindeki <code>adminPassword</code> doğru yazıldığından emin olun.</td>
      </tr>
      <tr style="background-color: #e0f2fe;">
        <td style="padding: 12px; border: 1px solid #1e40af;">Sorular admin panelde görünmüyor</td>
        <td style="padding: 12px; border: 1px solid #1e40af;">questions.json dosyasını kontrol edin. Gerekirse admin panelden yeni soru ekleyin.</td>
      </tr>
      <tr>
        <td style="padding: 12px; border: 1px solid #1e40af;">Port zaten kullanımda</td>
        <td style="padding: 12px; border: 1px solid #1e40af;">server.js içindeki portu değiştirin veya ilgili programı kapatın.</td>
      </tr>
    </tbody>
  </table>
</section>

<footer style="text-align:center; color:#64748b; font-size: 0.85rem; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin-top: 60px;">
  &copy; 2025 <strong>Senin Adın</strong> - Tüm Hakları Saklıdır.
</footer>

</div>
