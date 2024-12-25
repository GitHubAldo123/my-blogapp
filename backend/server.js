const express = require('express');
const app = express();
const port = 5000;

// Middleware untuk menghandle request ke rute /
app.get('/', (req, res) => {
  res.send('Hello, World!'); // Ganti dengan pesan atau halaman yang sesuai
});

// Tambahkan rute API lain jika diperlukan
app.get('/api', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
