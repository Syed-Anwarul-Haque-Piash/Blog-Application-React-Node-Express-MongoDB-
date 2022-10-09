const express=require("express");
const app=express();
const cors=require("cors");
const dotenv=require("dotenv");
const mongoose=require("mongoose");
const authRouter=require('./routes/auth');
const userRouter=require('./routes/users');
const postRouter=require('./routes/posts');
const categoryRouter=require('./routes/categories');
const multer=require("multer");
const path=require("path");
app.use(express.json());
app.use(cors());
app.use("/images",express.static(path.join(__dirname,"/images")));

dotenv.config();

//connect with mongodb/mongoose
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    UseUnifiedTopology: true,
    useFindAndModify:true
    // UseCreateIndex: true,
})
.then(console.log("connected to mongodb"))
.catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRouter);
app.use("/api/users",userRouter);
app.use('/api/posts',postRouter);
app.use('/api/categories',categoryRouter);


app.listen(5000,()=>{
    console.log("Listening from 5000 port");
})