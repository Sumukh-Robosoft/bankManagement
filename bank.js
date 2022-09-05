let accountDetailsList = []; //List of all account numbers

class Account{
    constructor(name,initialDeposit,typeOfAccount,emailId,phoneNumber){
        this.name = name ;                       //Name of Account holder
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
        accountDetailsList.push(this.accountNumber)
    }

    interest(rateOfInterest,time){
        let interest =((this.balance * rateOfInterest * time)/365) ;
        this.balance += interest;
        console.log("Interest = ", interest)
    }
    
    printAccountDetails(){
        console.log(this)
    }

}

class CaSa extends Account{
    deposit(amount){
        this.balance = this.balance + amount;
        console.log("Deposit of Rs " + amount + "Successful");
     }
 
     withdraw(amount){
         if(amount < this.balance){
             this.balance -= amount;
             console.log("withdraw of Rs " + amount + "Successful");
         }
         else{
             console.log("Maintain minimum balance");
         }
     }
 
     
}

class RecurringDeposit extends Account{
    deposit(amount){
        this.balance = this.balance + amount;
        console.log("Deposit of Rs " + amount + "Successful");
     }
     
} 

class FD extends Account{
    fdBalance(rateOfInterest,time){
        this.balance = this.balance + ((this.balance * rateOfInterest * time)/365);
        console.log("Balance during Withdrawal = "+this.balance)
    }
}

class LoanAccount extends Account{
    deposit(amount){
        this.balance = this.balance - amount ;
        console.log("Deposit of Rs " + amount + " Successful");
        console.log("Balance loan Amount = ",this.balance);
     }
}




