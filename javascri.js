let ass=null;
console.log(ass);
let objc=[{
    pId:12,
    pName:"soap",
    price:"30rs",
    pimage:"image/p2.jpg"
},
{
    pId:13,
    pName:"bis",
    price:"20rs",
    pimage:"image/bisc.jpg"
},{
    pId:14,
    pName:"pickel",
    price:"40rs",
    pimage:"image/pickel.jpg"
}]

let heading="The Shop"
console.log("productID:",objc["pId"]);
document.write(`<h1>${heading}</h1>`);
document.write(`<br> <img src="${objc[0].pimage}" heigth="200px" width="150px"> <br>ProductId:${objc[0].pId}<br>Product Name:${objc[0].pName}<br> Price:${objc[0].price}`)
document.write(`<br> <img src="${objc[1].pimage}"> <br>ProductId:${objc[1].pId}<br>Product Name:${objc[1].pName}<br> Price:${objc[1].price}`)
document.write(`<br> <img src="${objc[2].pimage}"> <br>ProductId:${objc[2].pId}<br>Product Name:${objc[2].pName}<br> Price:${objc[2].price}`)
