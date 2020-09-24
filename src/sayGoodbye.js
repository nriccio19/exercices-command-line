/* Ecrivez un script sayGoodbye.js qui prend 
en argument de la ligne de commande une string 
et affiche un message comme ci-dessous: */

if (process.argv.length !== 3) {
    console.log('Trop de mots !')
    process.exit(1)
}

if (!isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} ce n'est pas des lettres.`)
    process.exit(2)
}

let name = process.argv[2]
console.log(`sayGoodbye, ${name}`)
