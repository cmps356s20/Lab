document.addEventListener("DOMContentLoaded", async () => {
    await getAccounts("All");
})

//navigation
async function loadPage(pageName) {
    const page = await fetch(pageName);
    const pageContent = await page.text();
    document.querySelector("#main").innerHTML = pageContent;
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
        <tr>
            <td>${account.accountNo}</td>
            <td>${account.acctType}</td>
            <td>${account.balance}</td>  
            <td>
                ${account.balance <= 0 ? `<i class="fas fa-trash-alt"></i>` : '' }
            </td> 
        </tr>
    `
}