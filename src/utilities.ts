import { createInterface } from 'readline'

export function getRandomString(list: string[]): string {
    const i = Math.floor(Math.random()*list.length)
    return list[i]
}

/**
 * Asks a question inside the command line and waits until the user answers.
 */
export async function queryHuman(prompt: string): Promise<string> {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise((resolve) => {
        readline.question(prompt + "\n", (answer) => {
            readline.close()
            resolve(answer)
        })
    })
}

interface OpenAIResponse {
    choices: {
        message: {
            content: string
        }
    }[]
}

/**
 * Sends the prompt to the AI and waits until the AI answers.
 */
export async function queryAI(openAiApiKey: string, prompt: string): Promise<string> {
    // https://platform.openai.com/docs/api-reference/chat/create
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",    
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${openAiApiKey}`,
        },
        body: JSON.stringify({
            // model: "gpt-3.5-turbo",
            model: "gpt-4",
            max_tokens: 50,
            messages: [{
                role: "user",
                content: prompt,
            }]
        })
    })
    const body = await response.json() as OpenAIResponse;
    return body.choices[0].message.content
}
