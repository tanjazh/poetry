import { readFile, writeFile, stat } from "fs/promises"

const archiveFile = "archive.json"

export interface PoemEntry {
    poem: string
}

export interface Archive {
    APIKey: string,
    poemEntries: PoemEntry[]
}

/**
 * Writes an array of poem entries to the archive file.(overrides the archive)
 */
export async function writeToArchive(archive: Archive): Promise<void> {
    const archiveString = JSON.stringify(archive, null, 2)
    await writeFile(archiveFile, archiveString)
}

/**
 * Reads an array of poem entries from the archive file.
 */
export async function readFromArchive(): Promise<Archive> {
    const defaultArchive: Archive = {
        APIKey: "",
        poemEntries: [],
    }
    if (await stat(archiveFile).then(() => false).catch(() => true)){
        return defaultArchive
    }
    const archiveString = await readFile(archiveFile, { encoding: "utf-8" })
    if (archiveString == "") {
        return defaultArchive
    }
    const archive = JSON.parse(archiveString)
    return archive
}
