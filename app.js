const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

// Middleware - Statik dosyalar için
app.use(express.static(path.join(__dirname, 'public')));

// View Engine olarak EJS kullanıyoruz
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ana sayfa
app.get('/', (req, res) => {
  res.render('index');
});

// Hakkımda sayfası
app.get('/about', (req, res) => {
  res.render('about');
});

// İletişim sayfası
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor...`);
});
