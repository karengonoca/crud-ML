/*const path = require('path');
const multer = require('multer');


const storageImageProduct = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, '../../public/images/products')
    },
    filename : (req, file, cb) => {
        cb(null, 'product-' + Date.now()+ path.extname(file.originalname))
    }

})

const uploadImageProduct= multer({
    storageImageProduct
});

module.exports = {
    uploadImageProduct
}
*/