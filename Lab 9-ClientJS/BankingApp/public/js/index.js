document.addEventListener("DOMContentLoaded", async ()=>{
    await getAccounts("All");
})

async function loadPage(pageName){
    const page = await fetch(pageName);
    const pageContent  = await page.text();
    document.querySelector("#main").innerHTML = pageContent;
}
//get the accounts
async function getAccounts(acctType){
   try{
       const url = `/api/accounts/?acctType=${acctType}`;
       const data = await fetch(url);
       const accounts = await data.json();
       console.log(accounts);
   }catch(e){
       console.log(e)
   }
}
