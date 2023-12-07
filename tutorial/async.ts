
function ping() {
    console.log("ping")
}

function pong() {
    console.log("pong")
}

// callbacks

// ping()
// setTimeout(pong, 3000)
// ping()

// promise

function fetchExampleDotCom(): Promise<string> {
    return fetch("http://example.com")
        .then((response: Response) => response.text())
        .then((text) => "hi " + text)
}

// fetchExampleDotCom().then(text => { console.log(text )})

// async await

async function fetchExampleDotCom2(): Promise<string> {
    const response = await fetch("http://example.com")
    const text = await response.text()
    return "hi " + text
}

function setTimeoutPromise(ms: number): Promise<void> {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
        // resolv/e()
    })
}

async function main(): Promise<void> {
    // const text = await fetchExampleDotCom()
    // console.log(text)
    console.log("1")
    await setTimeoutPromise(2000)
    console.log("2")
}

main()


// setTimeoutPromise(1000).then(() => { console.log("pong") })
