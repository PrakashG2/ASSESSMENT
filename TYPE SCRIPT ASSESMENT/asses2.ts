interface ISavingsAccount {
    acc_id: number;
    acc_name: string;
    balance(amount?: any, interest?: any): void;
}
interface ICurrentAccount {
    acc_id: number;
    acc_name: string;
    balance(amount?: any, interest?: any): void;
}
class Account implements ISavingsAccount, ICurrentAccount {
    acc_id: number;
    acc_name: string
    constructor(accid: number, accname: string) {
        this.acc_id = accid;
        this.acc_name = accname;
    }
    balance(amount?: any, interest?: any) {
        console.log("----------DETAILS----------");
        console.log(`ACC NUMBER:${this.acc_id}`);
        console.log(`ACC HOLDER NAME :${this.acc_name}`);
        if (interest != null) {
            console.log("BALANCE [SAVINGS ACC] : ", amount + (amount * interest));
        }
        else {
            console.log("BALANCE [CURRENT ACC] : "+amount);

        }
    }
}
let savings: ISavingsAccount = new Account(2900, 'custName');
savings.balance(5000, 0.5);


let current: ICurrentAccount = new Account(2900, 'custName');
current.balance(1000);