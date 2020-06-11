const express=require("express");
const ejs=require("ejs");

const data=[
{img:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/12/05/12057100.jpeg",
name:"Hotel Hayat ⭐⭐⭐",
city:"Lucknow"
},
{
  img:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/20/29/20290060_v1.jpeg",
  name:"Vivanta Residency ⭐⭐⭐⭐",
  city:"Delhi"
},
  {
    img:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/77/33/773383_v1.jpeg",
    name:"Hotel Vivek ⭐⭐⭐",
    city:"Delhi"
  },
    {
      img:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/87/33/8733898.jpeg",
      name:"Levana Suites ⭐⭐",
      city:"Lucknow"
    },
    {img:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/12/05/12057100.jpeg",
    name:"Hotel Hayat ⭐⭐⭐",
    city:"Lucknow"
  },
    {
      img:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/20/29/20290060_v1.jpeg",
      name:"Vivanta Residency ⭐⭐⭐⭐",
      city:"Delhi"
    },
      {
        img:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/77/33/773383_v1.jpeg",
        name:"Hotel Vivek ⭐⭐⭐",
        city:"Delhi"},
        {
          img:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/87/33/8733898.jpeg",
          name:"Levana Suites ⭐⭐",
          city:"Lucknow"
        },
        {img:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/12/05/12057100.jpeg",
        name:"Hotel Hayat ⭐⭐⭐",
        city:"Lucknow"
        },
        {
          img:"https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/20/29/20290060_v1.jpeg",
          name:"Vivanta Residency ⭐⭐",
          city:"Delhi"
        }
];

const app=express();
app.set("view engine",'ejs')
app.use(express.static("public"));

app.get("/",function(req,res){
res.render("home",{item:data});
});

app.get("/login",function(req,res){
res.render("login");
});


app.get("/hotellogin",function(req,res){
res.render("hotellogin");
});

app.get("/register",function(req,res){
res.render("register");
});

app.get("/hotelregister",function(req,res){
res.render("hotelregister");
});





app.listen(3000,function(){
  console.log("successfully connected");
});
