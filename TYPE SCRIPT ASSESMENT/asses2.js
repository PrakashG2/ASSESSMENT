var Account = /** @class */ (function () {
    function Account(accid, accname) {
        this.acc_id = accid;
        this.acc_name = accname;
    }
    Account.prototype.balance = function (amount, interest) {
        console.log("----------DETAILS----------");
        console.log("ACC NUMBER:".concat(this.acc_id));
        console.log("ACC HOLDER NAME :".concat(this.acc_name));
        if (interest != null) {
            console.log("BALANCE [SAVINGS ACC] : ", amount + (amount * interest));
        }
        else {
            console.log("BALANCE [CURRENT ACC] : " + amount);
        }
    };
    return Account;
}());
var savings = new Account(2900, 'custName');
savings.balance(5000, 0.5);
var current = new Account(2900, 'custName');
current.balance(1000);
