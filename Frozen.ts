// Class decorator.

/**
 * Decorator that freezes a class. It prevents this class to be used as superclass.
 */
function Frozen(constructor: Function) {
    Object.freeze(constructor)
    Object.freeze(constructor.prototype)
}

@Frozen
class SomeClass {
    constructor() {}
}

console.log("Is object frozen?", Object.isFrozen(SomeClass))