import express from 'express';
import fs from 'fs';
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

const router = express.Router();
const app = express();
const port = 4001;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
