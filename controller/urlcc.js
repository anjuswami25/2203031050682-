const { nanoid } = require('nanoid');
const urlDatabase = new Map(); // In-memory DB

const BASE_URL = 'http://localhost:5000/api';

exports.shortenUrl = (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl) return res.status(400).json({ error: 'URL is required' });

    const shortCode = nanoid(6);
    urlDatabase.set(shortCode, longUrl);

    const shortUrl = `${BASE_URL}/${shortCode}`;
    res.status(201).json({ shortUrl });
};

exports.redirectUrl = (req, res) => {
    const shortCode = req.params.shortCode;
    const longUrl = urlDatabase.get(shortCode);

    if (longUrl) {
        res.redirect(longUrl);
    } else {
        res.status(404).json({ error: 'URL not found' });
    }
};
