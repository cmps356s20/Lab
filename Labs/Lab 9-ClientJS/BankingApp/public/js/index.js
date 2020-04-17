document.addEventListener("DOMContentLoaded", async () => {
    await handleLoadAccounts("All");
})

//navigation
async function loadPage(pageName) {
    const page = await fetch(pageName);
    const pageContent = await page.text();
    document.querySelector("#main").innerHTML = pageContent;

    if(pageName=="acct-trans.html")
        await fillAccountsDD();
}

async function fillAccountsDD(){
    const accounts = await getAccounts("All");
    const content = accounts.map(account => changeAccountToHTMLOptions(account)).join("")
    document.querySelector("#accountNo").innerHTML = content;
}

function changeAccountToHTMLOptions(account){
    return `
        <option value="${account.accountNo}"> ${account.accountNo} : ${account.balance} </option>
    `
}
//get the accounts
async function getAccounts(acctType) {
    try {
        const url = `/api/accounts/?acctType=${acctType}`;
        const data = await fetch(url);
        return await data.json();
    } catch (e) {
        console.log(e)
    }
}

//load the accounts table in the home page
async function handleLoadAccounts(acctType) {
    //first I need the accounts
    const accounts = await getAccounts(acctType);
    const content = accounts.map(account => changeAccountToHTMLRow(account)).join("")

    document.querySelector("#accounts-table")
        .innerHTML = `<table> 
                            <tr>
                                <th>Account Number</th>   
                                <th>Account Type</th>   
                                <th>Balance</th>   
                            </tr>
                            ${content} 
                      </table>`;
}

function changeAccountToHTMLRow(account) {
    return `
        <tr id="row-${account.accountNo}">
            <td>${account.accountNo}</td>
            <td>${account.acctType}</td>
            <td>${account.balance}</td>  
            <td>
                ${account.balance <= 0 ? `<i class="fas fa-trash-alt" onclick="handleDeleteAccount(${account.accountNo})"></i>` : ''}
            </td> 
        </tr>
    `
}

async function handleDeleteAccount(accountNo) {
    try {
        const confirmation = confirm("Are you sure you want to do this?");
        if (confirmation) {
            const url = `/api/accounts/${accountNo}`
            const config = {method: "delete"}

            await fetch(url)
            document.querySelector(`#row-${accountNo}`).remove()
        }
    } catch (e) {
        console.log(e)
    }
}

async function handleAddAccount(event) {
    //prevent the forms default behaviour
    event.preventDefault();
    const form = event.target.form;
    const isValid = form.checkValidity();

    if(!isValid)
        return;

    //first step is to change the form into a java script object
    const account = formToJsonObject(form);

    //we send the object to the server

    const url = `/api/accounts`;
    const config = {
        method : "post",
        body : JSON.stringify(account),
        headers : {"Content-Type" : "application/json" }
    }
    await fetch(url, config);
    window.location.href = "index.html"
    await handleLoadAccounts("All");
}

function formToJsonObject(form){
    const formData = new FormData(form);
    const formObj = {}
    formData.forEach((value, key) => formObj[key] = value)
    return formObj;
}

async function handleAddTrans(event){
    event.preventDefault();
    const form = event.target.form;
    const isValid = form.checkValidity();

    if(!isValid)
        return;

    const trans = formToJsonObject(form);

    const url = `/api/accounts/${trans.accountNo}/trans`
    const config = {
        method : "post",
        body : JSON.stringify(trans),
        headers : {"Content-Type" : "application/json" }
    }

    await fetch(url, config);
    window.location.href = "index.html"
    // await handleLoadAccounts("All");
}

