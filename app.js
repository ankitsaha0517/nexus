const pro = [{

    img:"p1.jpeg",
    name:"Vringra Lavender Agarbatti",
    price:"165",
},
{
    img:"p2.jpg",
    name:"Handcrafted Ajrakh Print Cotton Fabric",
    price:"270",
},
{
    img:"p3.jpg",
    name:"Southern Blends Kerala Origin Classic Black Coffe",
    price:"218",
},
{
    img:"p4.jpeg",
    name:"Sampoornam AR0027NA Brass Ganesha Statuee",
    price:"2200",
},{
    img:"p5.webp",
    name:"Kohler July Pillar Wash Basin Ta",
    price:"2426",
}
,{
    img:"p6.jpg",
    name:"Ethnic Woven Design Handloom Saree",
    price:"1099",
},{
    img:"p7.jpg",
    name:"NK Textiles Women's Butta Woven",
    price:"1899",
},{
    img:"p8.webp",
    name:"ASSAM HANDICRAFTS Hand made Bamboo Bottles",
    price:"1200",
}];

let st = "";
pro.forEach((el)=>{
    st += ` <div class="product-box">
                    <div class="pro-img">
                        <img src="./product/${el.img}" alt="">
                    </div>
                    <h4>${el.name}</h4>
                    <h5>&#8377;${el.price}</h5>
            <i class="fa-solid fa-heart heart"></i>
            </div>`
});

document.querySelector(".all-product").innerHTML=st;