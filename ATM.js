let submit=document.getElementById("submit");
let table=document.querySelector("table");
let pin=document.getElementById("pin");
table.addEventListener("click",(e)=>{
    if(e.target.innerText=="<-")
    {
        let x=pin.value;
        pin.value=x.substring(0,x.length-1)
    }
    else{
    pin.value+=e.target.innerText;
    }
})
submit.addEventListener("click",()=>{
    if(pin.value=="")
    {
        alert("Please Enter your Pin")
    }
    else{
        let name=prompt("Enter user name:");
        let user=name;
        name={
            pass:pin.value,
            money:null
        }
        
    localStorage.setItem(user,JSON.stringify(name));
     pin.value="";
     alert("You sucessfully created Account")
    }
})
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}

