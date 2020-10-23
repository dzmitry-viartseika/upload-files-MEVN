const express = require('express');
const app = express();
const router = require('./routers/export-routers');
const cors = require('cors');
const multer = require('multer');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/app', router.appRouter);
app.use('/app', router.fileRouter);
app.use(cors());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
