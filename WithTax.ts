// Accessor decorator.

function WithTax(rate: number) {
    return function(target: any, key: string, descriptor: PropertyDescriptor) {
        const original = descriptor.get;

        // You can run some code here, before method call...

        descriptor.get = function() {  // NEVER USE ARROW FUNCTION HERE.
            const result = original.apply(this)
            return (result * (1 - rate)).toFixed(2)
        }

        // You can run some code here, after method call...

        return descriptor;
    }
}

class Wallet {
    private _amount = 34.0

    @WithTax(0.15)
    get amount() {
        return this._amount
    }
}

let wallet = new Wallet() 

console.log(wallet.amount)

