import FileSaver from 'file-saver'

import { surpriseMePrompts } from '../constants'

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length) // Getting a random index from 1 to 49
    const randomPrompt = surpriseMePrompts[randomIndex]

    if(randomPrompt === prompt) return getRandomPrompt(prompt) // to make sure that we dont get the same prompt 2 times in a row

    return randomPrompt
}

export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpeg`)
}