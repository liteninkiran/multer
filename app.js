const express = require('express');
const multer = require('multer');

const app = express();

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: fileStorageEngine });

app.post('/single', upload.single('image'), (req, res) => {
    console.log(req.file);
    res.send('Single file upload complete');
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
