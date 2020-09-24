import readlineSync from 'readline-sync'

const majority = process.argv[2]
const age = readlineSync.question(`Quel est votre age ?`)

if (majority < age) {
    console.log(
        `Désolé, prenom nom, vous êtes mineur, vous ne pouvez pas voter`
    )
} else {
    console.log(`prenom nom, vous êtes majeur, vous pouvez voter`)
}
