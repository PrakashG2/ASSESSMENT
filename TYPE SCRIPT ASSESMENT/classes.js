var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Customer = /** @class */ (function () {
    function Customer(CustomerName, Age, Address, ContactNumber) {
        this.CustomerName = CustomerName;
        this.Age = Age;
        this.Address = Address;
        this.ContactNumber = ContactNumber;
    }
    return Customer;
}());
var Loan = /** @class */ (function (_super) {
    __extends(Loan, _super);
    function Loan(CustomerName, Age, Address, ContactNumber, LoanAccountNo, LoanType, LoanAmount, Duration, InterestRate) {
        var _this = _super.call(this, CustomerName, Age, Address, ContactNumber) || this;
        _this.LoanAccountNo = LoanAccountNo;
        _this.LoanType = LoanType;
        _this.Duration = Duration;
        _this.LoanAmount = LoanAmount;
        _this.InterestRate = InterestRate;
        return _this;
    }
    Loan.prototype.interestCalculate = function () {
        var Total = 0;
        Total = this.LoanAmount * this.InterestRate;
        return Total;
    };
    Loan.prototype.Display = function () {
        console.log("Customer Name    : ".concat(this.CustomerName, "\n Age      :").concat(this.Age, "\nAddress      :").concat(this.Address, "\n Contact Number     :").concat(this.ContactNumber, "\n Loan account No     :").concat(this.LoanAccountNo, "\n LoanType     :").concat(this.LoanType, "\n LoanAmount     :").concat(this.LoanAmount, "\n Duration     :").concat(this.Duration, "\nInterest Rate      :").concat(this.InterestRate, "\n TOtal Amount     :").concat(this.interestCalculate()));
    };
    return Loan;
}(Customer));
var obj2 = new Loan("PRAKASH", 15, "POLLACHI", 12345678, 4352, "car", 4000, 20, 2.25);
// var obj2 = new Loan("sample",26,"cbe",123456789,1234,"home",1000,5)
obj2.interestCalculate();
obj2.Display();
