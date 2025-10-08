let container=document.getElementById("con");
let table=document.querySelector("table");
let pin=document.getElementById("pin");
let login=document.getElementById("login");
let oper=document.getElementById("oper");
let credit=document.getElementById("credit");
let debit=document.getElementById("debit");

let deposit=document.getElementById("deposit");
let dtable=document.getElementById("dtable");
let dsubmit=document.getElementById("dsubmit");
let amount=document.getElementById("amount");
let par=document.querySelector("p")
let operation=document.getElementsByClassName("operations")[0];

let check=document.getElementById("check")

let message=document.getElementById("message");
 let name= prompt("Enter your name");

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
login.addEventListener("click",()=>{
  // console.log(storedData.pass);
   let storedData=JSON.parse(localStorage.getItem(name));
    if(pin.value==storedData.pass)
    {
        container.style.display="none";
        oper.style.display="block"

    }
    else
    {
        message.innerText="Invalid credintails";
    }
})
let action;
operation.addEventListener("click",(e)=>
{
    if(e.target.innerText=="Credit")
    {
        action=e.target.innerText;
    oper.style.display="none";
    deposit.style.display="block";
    }
    else if(e.target.innerText=="Debit")
    {
         action=e.target.innerText;
         oper.style.display="none";
         deposit.style.display="block";
         amount.setAttribute("placeholder","Enter withdraw amount");
        // dsubmit.setAttribute("id","wSubmit");    
    }
    else if(e.target.innerText=="CheckBalance"){
         oper.style.display="none";
          action=e.target.innerText;
           let storedData=JSON.parse(localStorage.getItem(name));
        let balance=Number(storedData.money);
        message.innerText="Available balance is : ₹"+balance;


    }

})
dtable.addEventListener("click",(e)=>{

     if(e.target.innerText=="<-")
    {
        let x=amount.value;
        amount.value=x.substring(0,x.length-1)
    }
    else{
    amount.value+=e.target.innerText;
    }
})
dsubmit.addEventListener("click",()=>{
    if(action=="Credit"){
    let storedData=JSON.parse(localStorage.getItem(name))
    let balance=Number(storedData.money);
    balance+=Number(amount.value);
    storedData.money=balance;
    localStorage.setItem(name,JSON.stringify(storedData));
    amount.value="";
    deposit.style.display="none";
     message.innerText="Deposit successful! New balance: ₹" + balance;
     par.innerHTML+=`<a href="index.html"><button>Back to Home</button></a>`   
    }
    else if(action=="Debit")
    {
         let storedData=JSON.parse(localStorage.getItem(name))
         let balance=Number(storedData.money);
         let val=Number(amount.value)
         if(val<=balance)
         {
            balance-=val;
            storedData.money=balance;
            localStorage.setItem(name,JSON.stringify(storedData));
            amount.value="";
             deposit.style.display="none";
            message.innerText="WithDraw successfully! "+val+" New balance: ₹"+balance;
            par.innerHTML+=`<a href="index.html"><button>Back to Home</button></a>`   
         }
         else{
              amount.value="";
              deposit.style.display="none";
             message.innerText="Insufficient balance : ₹"+balance;
            par.innerHTML+=`<a href="index.html"><button>Back to Home</button></a>`   

         }

    }
    

}

)
