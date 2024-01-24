let age=()=>{
    let a=document.getElementById("agee").value;
    if(a==16)
    {
        document.write("yes");
    }
    else
    {
        document.write("no");
    }
}
document.getElementById("bt").addEventListener('click',age)