let op=(a,b)=>{
    let su=a-b;
    document.write(`<br> subtraction= ${su}`)
}
  /*document.getElementById("add1").addEventListener("click",op(30,40));
  // document.getElementById("add2").addEventListener("clcik",op(100,200))*/
  
  document.getElementById("a1").addEventListener("click",()=>{
      let num=Number(document.getElementById("in1").value);
      let num2=Number(document.getElementById("in2").value);
      c= num+num2;
      document.getElementById("res").innerHTML=c;
  });