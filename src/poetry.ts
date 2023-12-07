import { queryAI } from './utilities'
import { writeToArchive, readFromArchive, Archive, PoemEntry } from './archive'

function getCommandLineArgument(i: number): string {
    return process.argv[i]
}

function getAction (): string {
    return getCommandLineArgument(2)
}

function getName(): string {
    return getCommandLineArgument(3)
}

function getTrait(): string {
    return getCommandLineArgument(4)
}

function makePoemPrompt(name: string, trait: string): string {
    return `write a short poem with 4 senteces about ${name} who is ${trait}`
}

async function main(): Promise<void> {
    const archive: Archive = await readFromArchive ()
    const action = getAction()
    
    if (action == 'new') {
        if (archive.APIKey == "") {
            return
        }
        const name = getName()
        const trait = getTrait()
        const prompt = makePoemPrompt(name, trait)
        const poem: string = await queryAI(archive.APIKey, prompt)
        console.log(poem)

        const poemEntry: PoemEntry = {
            poem: poem
        }
        archive.poemEntries.push(poemEntry)
        await writeToArchive(archive)
        return
    }
    if (action == 'key') {
        const archive: Archive = await readFromArchive ()
        archive.APIKey = getCommandLineArgument(3)
        await writeToArchive(archive)
        return
    }
    
    if (action == 'archive') {
        const archive = await readFromArchive()
        // console.log(poemEntries)
        for (let i = 0; i < archive.poemEntries.length; i++) {
            const poemEntry = archive.poemEntries [i]
            console.log(`(${i}) ${poemEntry.poem}\n`)
        }
        return
    }
    if (action == 'help') {
        console.log('poetry.ts new <name> <trait>')
        console.log('poetry.ts archive')
        console.log('poetry.ts clear')
        console.log(`poetry.ts key <APIKey>`)
        return 
    }
    if (action == 'clear') {
        const archive = await readFromArchive()
        archive.poemEntries = []
        await writeToArchive(archive)
        return
    }
    console.log(`Sorry, "${action}" is not an action.`)
}

main()
