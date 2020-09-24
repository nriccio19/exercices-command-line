const vote = (prenom, nom, age) => {
    return age >= 18
        ? `${prenom} ${nom}, vous êtes majeur, vous pouvez voter`
        : `Désolé, ${prenom} ${nom}, vous êtes mineur, vous ne pouvez pas voter`
}

console.log(vote('nicolas', 'riccio', '30'))
