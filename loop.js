let a=1,b="";
for(i=1;i<=4;i++) 
{
    for(j=1;j<=i;j++) 
    {
        b+=a+"";  // b=b+a+""  
        a++;
    }
       b+='\n';  //  /n, /t, /r ,/b,\\
}
document.write(`${b}`);
document.write("<br>")

let n=[10,"orange",6,"apple",0,1]
document.write(n[4])
for(let k=0;k<n.length;k++){
    document.write(`<br> ${k}=${n[k]}`)
}
document.write("<br>for in <br>")

for( x in n)
{
    document.write(`<br>${x} =${n[x]}`)
}
document.write("<br>for of <br>")

for( x of n)
{
    document.write(`<br>${x}`)
}

let obj={
    name:"madhu",
    age:22,
    degree:"b.e"
};
document.write(`<br> name= ${obj["name"]}`)
document.write(`<br> age= ${obj.age}`)
for(a in obj){
    document.write(`<br> ${a} = ${obj[a]}`)
    
    console.log(`<br> ${a} = ${obj[a]}`)
}
/*for(a of obj){
    document.write(`<br> ${a} = ${obj[a]}`)
    
    console.log(`<br> ${a} = ${obj[a]}`)
}*/
    
n.forEach(o => {
    
    console.log(n,o);
});