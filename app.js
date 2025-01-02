const express = require("express")
const app = express()
const path = require("path")
const fs = require("fs")
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname , "public")))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/' , (req , res) => {
    res.send("hi there")
})

app.get('/create' , (req , res) => {
   fs.readdir(`./files` , function(err , files){
    res.render("index", {files:files})
   })
})

app.listen(3000)