const revert = (str) => str.split('').reverse().join('')

if (process.argv.length !== 3) {
    console.log('error: pas le bon nomber')
    process.exit(1)
}
const pal = process.argv[2]

if (pal === revert(pal)) {
    console.log(`${pal} is a palindrome`)
} else {
    console.log(`${pal} is not a palindrome`)
}
