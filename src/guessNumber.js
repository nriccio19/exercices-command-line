import readlineSync from 'readline-sync'
import chalk from 'chalk'

let secretNumber = 10

while (true) {
    let rightNumber = readlineSync.question(`Trouve le bon nombre : `)
    if (rightNumber < secretNumber) {
        console.log(chalk.bgRed(`Nombre trop petit`))
        continue
    }
    if (rightNumber < secretNumber) {
        console.log(chalk.bgRed(`Nombre trop grand`))
        continue
    }
    if ((rightNumber = secretNumber)) {
        console.log(chalk.bgGreen(`Bravo`))
        break
    }
}
