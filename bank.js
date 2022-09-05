let accountDetailsList = [];

//Creat a new Account
class Account{
    constructor(accountName,initialDeposit,typeOfAccount,emailId,phoneNumber){
        this.accountName = accountName ;                       
        this.initialDeposit = initialDeposit;    
        this.typeOfAccount = typeOfAccount;
        this.dateOfOpening = new Date();
        this.balance = initialDeposit;
        this.emailId = emailId ;
        this.phoneNumber = phoneNumber;
        this.accountNumber = Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) + 1000000000000 ;
        while(accountDetailsList.indexOf(this.accountNumber) != -1){
           this.accountNumber = Math.floor(Math.random() * (9999999999999 - 1000000000000 + 1)) + 1000000000000 ;
        }
        accountDetailsList.push(this)
    }
    interest(rateOfInterest,time){
        let interest =((this.balance * rateOfInterest * time)/365) ;
        this.balance += interest;
        console.log("Interest = ", interest)
        console.log("Balance = ", this.balance)
    }
    
    printAccountDetails(){
        console.log(this);
    }
    printBalance(){
        console.log("Account balance is " + this.balance)
    }
    
}

//Deposit & Withdraw from Savings Account(minimum balance = 100 )
class SavingAccount extends Account{
    deposit(amount){
        this.balance = this.balance + amount;
        console.log("Deposit of Rs " + amount + "Successful to "+this.accountNumber);
        console.log("Balance of rs "+this.balance+" is available at "+this.accountNumber)
     }
 
     withdraw(amount){
         if(amount < this.balance && this.balance >= 100){
            this.balance = this.balance - amount;
            console.log("withdraw of Rs " + amount + "Successful from "+this.accountNumber);
            console.log("Balance of rs "+this.balance+" is available at "+this.accountNumber)
         }
         else{
             console.log("Maintain minimum balance\n");
        }
    }
     
}

//Update CurrentAccount (minimum balance = 0)
class CurrentAccount extends Account{
    deposit(amount){
        this.balance = this.balance + amount;
        console.log("Deposit of Rs " + amount + "Successful to "+this.accountNumber);
        console.log("Balance of rs "+this.balance+" is available at "+this.accountNumber)
     }
 
     withdraw(amount){
         if(amount <= this.balance ){
             this.balance -= amount;
             console.log("withdraw of Rs " + amount + "Successful from "+this.accountNumber);
             console.log("Balance of rs "+this.balance+" is available at "+this.accountNumber)
         }
         else{
             console.log("Maintain minimum balance\n");
         }
     }
}

//Deposit to RD Account
class RecurringDeposit extends Account{
    deposit(amount,time){
        while(time){
            this.balance = this.balance + amount;
            time -= 1;
        }
        
     }
     
} 

//calulating interest for fd Account
class FD extends Account{
    interest(rateOfInterest,time){
        let interest =((this.balance * rateOfInterest * time)/100) ;
        this.balance += interest;
        console.log("Interest earned = "+ interest)
        console.log("Balance of rs "+this.balance+" is available at "+this.accountNumber)
    }
}

//Updating Loan Accounts
class LoanAccount extends Account{
    deposit(amount){
        if(this.balance >= amount ){
            this.balance = this.balance - amount ;
            console.log("Deposit of Rs " + amount + " Successful to "+ +this.accountNumber);
            console.log("Balance loan Amount = ",this.balance);
        }
       else if(amount > this.balance){
           amount = amount - this.balance;
           console.log("Deposited rs "+ this.balance + " and excess of rs "+amount +" is refunded")
           this.balance = 0
       }
       else if(this.balance == 0){
        console.log("loan cleared")
       }

     }
}

class  AccountManager {
    printAllDetails(){
        console.log("\n Account details of all users " ,accountDetailsList )
    }
}


let vpn = new SavingAccount("vpn",1500,"savings","vpn@gmail.com");
vpn.deposit(5000);
vpn.interest(4,1)
vpn.withdraw(1000);

// let pun = new CurrentAccount("pun",50000,"current");
// pun.deposit(100)
// pun.withdraw(50000);

// let pvb = new RecurringDeposit("pvb",100,"RD","pvb@robosoft.in",87445644)
// pvb.deposit(120,12);
// pvb.interest(8,2);

// let sumukh  = new FD("sumukh",5000,"FD");
// sumukh.interest(8,12);

// let sandy = new LoanAccount("sandy",5000,"Car Laon");
// sandy.interest(16,5);
// sandy.deposit(3000);

let AM = new AccountManager();
AM.printAllDetails()