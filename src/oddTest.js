const nb = Number(process.argv[2])

if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}

if (nb % 2 == 0) {
    console.log(`Ceci est un nombre impair`)
} else {
    console.log(`Ceci n'est pas un nombre impair`)
}
