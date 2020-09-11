const path=require("path");
const multer=require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname,"../../public/uploads/avatars"));//ruta donde quiero guardar la imagen
  },
  filename: function (req, file, cb) {
    cb(null, `avatar-${req.body.email}$-${Date.now()+path.extname(file.originalname)}`)
  }
})

var upload = multer({ storage: storage })

module.exports=upload;