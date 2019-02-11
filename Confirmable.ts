// Method decorator.

function Lucky(message: string) {
    return function(target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
        const original = descriptor.value

        // You can run some code here, before method call...

        descriptor.value = function(...args: any[]) { // NEVER USE ARROW FUNCTION HERE.
            const allow = Math.random() >= 0.5
            console.log(message, allow)

            if (allow) {
                const result = original.apply(this, args)
                return result
            } else {
                return null
            }
        }

        // You can run some code here, after method call...

        return descriptor
    }
}

class AnotherClass {
    items = []

    @Lucky('Checking if you are lucky...')
    @Lucky('And another time...')
    addItem(item = 'something') {
        this.items.push(item)
    }

    getItems() {
        return this.items
    }
}

let anotherClass = new AnotherClass()
anotherClass.addItem('item1')
anotherClass.addItem('item2')
anotherClass.addItem('item3')
anotherClass.addItem('item4')

console.log('This items was added:', anotherClass.getItems())