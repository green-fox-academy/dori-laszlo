'use strict';

let accounts: any[] = [
    { client_name: 'Igor', account_number: 11234543, balance: 203004099.2 },
    { client_name: 'Vladimir', account_number: 43546731, balance: 5204100071.23 },
    { client_name: 'Sergei', account_number: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// The output should be: "Igor", "203004099.2"
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from account_number
//  - to account_number
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// var accounts = [
//	{ 'client_name': 'Igor', 'account_number': 11234543 , 'balance': 203004099.2 },
//	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204099571.23 },
//	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1354100.0 }
//]

function getNameAndBalance(accountList: any[], clientNumber: number): string[] {
    let getAccount: string[] = [];
    getAccount.push(accountList[clientNumber].client_name, accountList[clientNumber].balance);
    return getAccount;
};

function transferAmount(accountList: any[], from: number, to: number, cash: number) {
    let validAccounts: number = 0;
    for (let i: number = 0; i < accountList.length; i++) {
        if (accountList[i].clientNumber === from || accountList[i].clientNumber === to) {
            validAccounts++;
        }
        for (let i: number = 0; i < accountList.length; i++) {
            if (validAccounts === 2 && accountList[i].clientNumber === from) {
                return accountList[i].balance -= cash;
            } if (validAccounts === 2 && accountList[i].clientNumber === to) {
                return accountList[i].balance += cash;
            } else {
                return "404 - account not found";
            }
        }
    }
};


console.log(getNameAndBalance(accounts, 1));
console.log(transferAmount(accounts, 43546731, 23456311, 500.0));

// export = {
//     getNameAndBalance,
//     transferAmount,
//     accounts
// }