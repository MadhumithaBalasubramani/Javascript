let obj=[
{    name:"madhuumitha",    degree:"B.E",    age:22},
{    name:"gayathri",    degree:"MBBS",    age:23},
{    name:"maha",    degree:"Bsc",    age:24},
];


document.getElementById("h1").addEventListener('click',()=>{

   document.getElementById("di").innerHTML= obj.map((aro)=>{
        return `<br> Name:${aro.name} <br> Degree : ${aro.degree} <br> Age:${aro.age}`
        });
})

let filar=obj.filter((fil)=>fil.degree=="MBBS")


document.getElementById("hde").addEventListener('click',()=>{

    document.getElementById("di").innerHTML= filar.map((aro)=>{
         return `<br> <button onClick="addfun()">add course</button> <br>Name:${aro.name} <br> Degree : ${aro.degree} <br> Age:${aro.age}`
         });
 })
 //add course
 let addfun=()=>{
 let addcour={ name:"xyz", degree:"Mbbs",age:23 };
 filar.push(addcour);
 console.log(filar)
 document.getElementById("di").innerHTML= filar.map((aro)=>{
    return `<br> <br>Name:${aro.name} <br> Degree : ${aro.degree} <br> Age:${aro.age}`
    });
 }

 //



let obj1=[{

    name: "xyz",
    hob: ["reading","baking","singing"],
    course1:()=>{
                console.log("HELLO")
            }
},
{   name: "abc",
    hob: ["reading","baking","singing"],
    course1:()=>{
            console.log("Hi")
        }
}];

document.write(`Naame: ${obj1[0].name}  Hob:${obj1[0].hob[2]} Function : ${obj1[0].course1()}<br>`)
document.write(`Naame: ${obj1[1].name}  Hob:${obj1[1].hob}Function : ${obj1[1].course1()}`)


