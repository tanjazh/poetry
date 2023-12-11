interface Counter {
    getValue(): number
    increment(): void
    add(counter: Counter): void
    setStepSize(stepsize: number): void
}

function createCounter(stepsize: number = 1, value: number = 0): Counter {
    const counter: Counter = {
        getValue(): number {
            return value
        },
        increment(): void {
            value = value + stepsize
        },
        add(counter: Counter): void {
            value = value + counter.getValue()
        },
        setStepSize(newStepSize) {
            stepsize = newStepSize
        }
    }
    return counter
}

const counter0: Counter = createCounter() 

console.log("should be 0:", counter0.getValue())

counter0.increment()

console.log("should be 1:", counter0.getValue())

counter0.setStepSize(2)
counter0.increment()

console.log("should be 3:", counter0.getValue())

// const counter2 = counter1.increment()
// console.log("should be 2:", counter2.getValue())

