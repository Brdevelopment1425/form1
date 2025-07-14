# 🔧 Detaylı Kurulum ve Ayarlar Rehberi

<div style="background:#eef6fd; border-left:6px solid #3b82f6; padding:20px; border-radius:10px; margin-bottom:30px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">

<h2 style="color:#1e40af;">1. Gerekli Yazılımları ve Araçları Kurun</h2>

<p>Projeyi çalıştırmak için aşağıdaki yazılımların sisteminizde kurulu olması gerekiyor:</p>
<ul style="padding-left:20px; color:#1e293b; font-size:1rem;">
  <li><strong>Node.js:</strong> <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" style="color:#2563eb;">https://nodejs.org/</a> adresinden işletim sisteminize uygun sürümü indirin ve kurun. <br />Önerilen sürüm: <code>v16.x</code> veya üzeri.</li>
  <li><strong>NPM:</strong> Node.js ile beraber gelir. Kurulum sonrası terminalde <code>npm -v</code> komutunu yazarak doğrulayabilirsiniz.</li>
  <li><strong>Aktif Gmail Hesabı:</strong> Projenin form cevaplarını mail ile gönderebilmesi için Gmail SMTP kullanılır. Bu yüzden Gmail hesabınızın olması gerekir.</li>
</ul>

<hr style="margin:25px 0;" />

<h2 style="color:#1e40af;">2. Gmail Uygulama Şifresi Oluşturma (Önemli)</h2>

<p>Gmail SMTP'yi güvenli şekilde kullanmak için, Gmail hesabınızda <strong>İki Adımlı Doğrulama (2FA)</strong> aktif olmalıdır. Ardından, uygulamanız için özel bir <em>uygulama şifresi</em> oluşturmanız gerekmektedir.</p>

<ol style="padding-left:20px; color:#1e293b; font-size:1rem;">
  <li>Tarayıcınızda şu adresi açın: <a href="https://myaccount.google.com/security" target="_blank" rel="noopener noreferrer" style="color:#2563eb;">https://myaccount.google.com/security</a></li>
  <li><strong>İki Adımlı Doğrulama</strong> sekmesini bulun ve etkinleştirin (eğer zaten etkin değilse).</li>
  <li>İki Adımlı Doğrulama etkinleştirdikten sonra, tekrar aynı sayfada <strong>Uygulama Şifreleri</strong> bölümüne gidin veya direkt şu linkten açabilirsiniz:  
  <a href="https://myaccount.google.com/apppasswords" target="_blank" rel="noopener noreferrer" style="color:#2563eb;">https://myaccount.google.com/apppasswords</a></li>
  <li><strong>Uygulama Seçin:</strong> “Posta” seçeneğini seçin.</li>
  <li><strong>Cihaz Seçin:</strong> “Diğer (Özel ad)” seçeneğini seçin, örneğin “NodeJS Form Sistemi”.</li>
  <li><strong>Oluştur</strong> butonuna tıklayın.</li>
  <li>Karşınıza çıkan 16 karakterlik uygulama şifresini kopyalayın. Bu şifreyi projenizde kullanacağız.</li>
</ol>

<div style="background:#fef3c7; border-left:5px solid #f59e0b; padding:15px; border-radius:6px; margin-top:20px;">
  <strong>Not:</strong> Bu uygulama şifresi, normal Gmail şifrenizden farklıdır ve yalnızca SMTP bağlantısı için geçerlidir. Bu yüzden gizli tutunuz ve kimseyle paylaşmayınız.
</div>

<hr style="margin:25px 0;" />

<h2 style="color:#1e40af;">3. Projeyi İndirme ve Bağımlılıkların Kurulumu</h2>

<p>Projeyi bilgisayarınıza klonlayın ve gerekli bağımlılıkları yükleyin:</p>

<pre style="background:#e0e7ff; padding:15px; border-radius:8px; overflow-x:auto;">
<code>
git clone https://github.com/senin-kullanici-adi/secure-form-system.git
cd secure-form-system
npm install
</code>
</pre>

<p><em>Not:</em> Eğer Git yoksa <a href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer" style="color:#2563eb;">buradan</a> kurabilirsiniz.</p>

<hr style="margin:25px 0;" />

<h2 style="color:#1e40af;">4. Konfigürasyon Dosyasını Düzenleyin (<code>config.json</code>)</h2>

<p>Projede önemli ayarlar <code>config.json</code> dosyasında tutulur. Bu dosyayı açıp aşağıdaki alanları kendi bilgilerinize göre güncelleyin:</p>

<pre style="background:#e0e7ff; padding:15px; border-radius:8px; overflow-x:auto;">
<code>
{
  "adminEmail": "admin@example.com",
  "adminPassword": "guclu-admin-sifreniz",
  "gmailUser": "sizin-gmail-adresiniz@gmail.com",
  "gmailAppPassword": "gmail-uygulama-sifreniz"
}
</code>
</pre>

<ul style="padding-left:20px; color:#1e293b; font-size:1rem;">
  <li><strong>adminEmail:</strong> Form yanıtlarının gönderileceği e-posta adresi.</li>
  <li><strong>adminPassword:</strong> Admin paneline giriş için kullanılacak güçlü şifre.</li>
  <li><strong>gmailUser:</strong> Gmail SMTP için kullanılan Gmail adresiniz.</li>
  <li><strong>gmailAppPassword:</strong> Önceki adımda oluşturduğunuz 16 karakterlik uygulama şifresi.</li>
</ul>

<div style="background:#d1fae5; border-left:5px solid #22c55e; padding:15px; border-radius:6px; margin-top:20px;">
  <strong>Güvenlik Önerisi:</strong> Bu dosyada yer alan bilgileri asla paylaşmayınız veya herkese açık platformlarda tutmayınız.
</div>

<hr style="margin:25px 0;" />

<h2 style="color:#1e40af;">5. Sunucuyu Başlatma</h2>

<p>Her şey hazırsa, terminalde aşağıdaki komutu çalıştırarak sunucuyu başlatabilirsiniz:</p>

<pre style="background:#e0e7ff; padding:15px; border-radius:8px; overflow-x:auto;">
<code>
npm start
</code>
</pre>

<p>Başarılı başlatma sonrası:</p>
<ul style="padding-left:20px; color:#1e293b; font-size:1rem;">
  <li>Form sayfası: <a href="http://localhost:3000" target="_blank" rel="noopener noreferrer" style="color:#2563eb;">http://localhost:3000</a></li>
  <li>Admin panel giriş sayfası: <a href="http://localhost:3000/login" target="_blank" rel="noopener noreferrer" style="color:#2563eb;">http://localhost:3000/login</a></li>
</ul>

<div style="background:#dbeafe; border-left:5px solid #3b82f6; padding:15px; border-radius:6px; margin-top:20px;">
  <strong>İpucu:</strong> Eğer <code>localhost</code> dışında bir ortamda çalıştırıyorsanız, ilgili IP ve port ayarlarını <code>server.js</code> dosyasından güncelleyebilirsiniz.
</div>

<hr style="margin:25px 0;" />

<h2 style="color:#1e40af;">6. Form ve Admin Paneli Kullanımı</h2>

<ul style="padding-left:20px; color:#1e293b; font-size:1rem;">
  <li><strong>Form Sayfası:</strong> Kullanıcılar formu doldurabilir ve gönderim yapabilir.</li>
  <li><strong>Admin Girişi:</strong> <code>/login</code> sayfasından admin şifresi ile giriş yapılır.</li>
  <li><strong>Admin Panel:</strong> Sorular eklenir, silinir, düzenlenir. Soru tipleri ve seçenekleri yönetilir.</li>
</ul>

<hr style="margin:25px 0;" />

<h2 style="color:#1e40af;">7. Ek Güvenlik ve İpuçları</h2>

<ul style="padding-left:20px; color:#1e293b; font-size:1rem;">
  <li><strong>Admin şifrenizi güçlü ve benzersiz yapın.</strong></li>
  <li><strong>config.json dosyasını güvende tutun.</strong></li>
  <li><strong>Üretimde HTTPS kullanımı zorunludur.</strong></li>
  <li><strong>Sunucunuzu güvenlik duvarı ve izinlerle koruyun.</strong></li>
  <li><strong>Gmail uygulama şifrenizi kimseyle paylaşmayın.</strong></li>
</ul>

<hr style="margin:25px 0;" />

<h2 style="color:#1e40af;">8. Sorun Giderme</h2>

<table style="width:100%; border-collapse:collapse; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size:1rem;">
  <thead>
    <tr style="background:#3b82f6; color:white;">
      <th style="padding:10px; border:1px solid #ddd;">Problem</th>
      <th style="padding:10px; border:1px solid #ddd;">Çözüm</th>
    </tr>
  </thead>
  <tbody>
    <tr style="background:#f0f9ff;">
      <td style="padding:10px; border:1px solid #ddd;">Mail gönderilemiyor</td>
      <td style="padding:10px; border:1px solid #ddd;">Gmail 2FA aktif mi, uygulama şifresi doğru mu kontrol edin.</td>
    </tr>
    <tr>
      <td style="padding:10px; border:1px solid #ddd;">Admin paneline giriş yapılamıyor</td>
      <td style="padding:10px; border:1px solid #ddd;">config.json içindeki admin şifresi doğru mu kontrol edin.</td>
    </tr>
    <tr style="background:#f0f9ff;">
      <td style="padding:10px; border:1px solid #ddd;">Sorular görünmüyor</td>
      <td style="padding:10px; border:1px solid #ddd;">questions.json dosyasını kontrol edin, gerekirse admin panelden yeni soru ekleyin.</td>
    </tr>
    <tr>
      <td style="padding:10px; border:1px solid #ddd;">Port zaten kullanılıyor</td>
      <td style="padding:10px; border:1px solid #ddd;">server.js dosyasındaki portu değiştirin veya ilgili programı kapatın.</td>
    </tr>
  </tbody>
</table>

</div>
