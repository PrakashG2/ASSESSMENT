abstract class Customer{
    CustomerName:string;
    Age:number;
    Address:String;
    ContactNumber:number;
    constructor(CustomerName:string,Age:number,Address:string,ContactNumber:number){
        this.CustomerName=CustomerName;
        this.Age=Age;
        this.Address=Address;
        this.ContactNumber=ContactNumber;

    }
    public abstract Display():any;
}

class Loan extends Customer{
    LoanAccountNo:number;
    LoanType:string;
    LoanAmount:number;
    Duration:number;
    InterestRate:number;
     constructor(CustomerName:string,Age:number,Address:string,ContactNumber:number,LoanAccountNo:number,LoanType:string,LoanAmount:number,Duration:number,InterestRate:number){
        super(CustomerName,Age,Address,ContactNumber);
        this.LoanAccountNo=LoanAccountNo;
        this.LoanType=LoanType;
        this.Duration=Duration;
        this.LoanAmount=LoanAmount;
        this.InterestRate=InterestRate;
    }
    
    public interestCalculate():number{
        var Total=0;
       Total=this.LoanAmount*this.InterestRate;
       return Total;
    }
    public Display() {
        console.log(`Customer Name    : ${this.CustomerName}\n Age      :${this.Age}\nAddress      :${this.Address}\n Contact Number     :${this.ContactNumber}\n Loan account No     :${this.LoanAccountNo}\n LoanType     :${this.LoanType}\n LoanAmount     :${this.LoanAmount}\n Duration     :${this.Duration}\nInterest Rate      :${this.InterestRate}\n TOtal Amount     :${this.interestCalculate()}`)
    }

}

var obj2 = new Loan("PRAKASH",15,"POLLACHI",12345678,4352,"car",4000,20,2.25);
// var obj2 = new Loan("sample",26,"cbe",123456789,1234,"home",1000,5)

obj2.interestCalculate();
obj2.Display(); 