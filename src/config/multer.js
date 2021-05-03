const multer = require('multer');
const path = require('path'); /** nodejs */
const crypto = require('crypto'); /** nodejs */

module.exports = {
    /** __dirname(é a file config), sobre 2 nivel , entra na pasta tmp depois uploads */
    dest: path.resolve(__dirname, '..','..','tmp','uploads'),
    storage: multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(path.resolve(__dirname, '..','..','tmp','uploads'));
    },
    filename: (req, file, cb) => {
        crypto.randomBytes(16,(err, hash) =>{
            if(err) cb(err);

            const fileName = `${hash.toString('hex')}-${file.originalname}`
            cb(null, fileName);
        });
    },

    }),
    limits:{ /** todos os limite ficam aqui */
        fileSize: 2 * 1024 * 1024,
    },
    fileFilter: (req, file, cb ) => { /** arquivos que aceitamos */
        const allowedMines = [
            'image/jpeg',
            'image/jpg',
            'image/pjpeg',
            'image/png',
            'image/gif'
        ];

        if (allowedMines.includes(file.mimetype)){ 
            cb( null, true );
        }else {
            cb(new Error('Invalid file type :/ '))
        }
    },

}