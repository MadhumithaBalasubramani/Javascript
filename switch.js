function department(a){
    switch(a.target.getAttribute("id"))
    {
        case "Sales":
            document.getElementById("dep").innerHTML="This is Sales "
        break;
        case "Service":
            document.getElementById("dep").innerHTML="This is Service"
        break;
        case "Development":
            document.getElementById("dep").innerHTML="This is Development"
        break;
        case "Executive":
            document.getElementById("dep").innerHTML="This is Executive "
        break;
        default:
            document.getElementById("dep").innerHTML="Not Applicable "
        break;
    }
}


/*switch()
{
    case val:
        statement
    break;
    default
     statement
     break
}*/

/*function addoper(a,b)
{
    c=a+b;
    document.write(c);
}
addoper(60,70);*/

/*let op=(a,b)=>{
   let su= a+b;
   document.write(`<br> subtraction= ${su}`)
}
document.getElementById("add1").addEventListener("click",op(30,40));
document.getElementById("add2").addEventListener("clcik",op(100,200))*/
document.getElementById("a1").addEventListener("mouseleave",()=>{//arrow func(` temolate literal)
    let num=Number(document.getElementById("in1").value);
    let num2=Number(document.getElementById("in2").value);
    c= num+num2;
    document.getElementById("res").innerHTML=c;
});
