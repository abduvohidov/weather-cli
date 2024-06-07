import chalk from "chalk"
import dedent from "dedent-js"

const printError = (error) => {
    console.log(chalk.bgRed('Error:') + error)
}

const printSuccess = (msg) => {
    console.log(chalk.bgGreen('Success:') + msg)
}

const printHelp = () => {
    console.log(dedent(chalk.bgCyan("Help:") + `
    Без параметров - вывод погоды
    -s [CITY] для установки города
    -h для вывода помощи
    -t [API_KEY] для вывода помощ
    `))
}

export { printError, printSuccess, printHelp }