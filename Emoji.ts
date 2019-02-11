// Field decorator.

/**
 * This is decorator factory (decorator function that returns the decorator itself).
 */
function Emoji() {
    return (target: Object, key: string) => {
        let value = target[key];

        const getter = () => {
            return value;
        }

        const setter = (next) => {
            console.log('Updating flavor....')
            value = `;P ${next} ;D`
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true,
        })
    }
}

class IceCream {
    @Emoji()
    flavor = 'Vanilla'
}

let iceCream = new IceCream()
console.log(iceCream.flavor)