const path=require("path");
const multer=require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"../../public/uploads/products"));//ruta donde quiero guardar la imagen
  },
  filename: function (req, file, cb) {
    cb(null, `image-${Date.now()+path.extname(file.originalname)}`)//nombre y extension de la imagen
  }
})

var uploadprod = multer({ storage: storage })

module.exports=uploadprod;