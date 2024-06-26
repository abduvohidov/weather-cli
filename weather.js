#!/usr/bin/env node
import { getArgs } from "./helpers/args.js"
import { getWeather } from "./services/api.service.js"
import { printError, printHelp, printSuccess } from "./services/log.service.js"
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js"

const saveToken = async (token) => {

    if (!token.length) {
        printError("Не передан токен!")
        return
    }

    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token)
        printSuccess("Токен сохронен!")

    } catch (error) {
        printError(error.message)
    }
}

const getForcast = async () => {
    try {
        const weather = await getWeather(process.env.CITY)
        console.log(weather)
    } catch (e) {
        if (e?.response?.status === 404) {
            printError("Неверно указан город!")
        } else if (e?.response?.status === 401) {
            printError("Неверно указан токен!")
        } else {
            printError(e.message)
        }
    }

}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h) {
        printHelp()
    }

    if (args.s) {

    }

    if (args.t) {
        return saveToken(args.t)
    }

    getForcast()
}

initCLI(); 