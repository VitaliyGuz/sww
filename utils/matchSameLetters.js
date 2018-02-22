function matchSameLetters(str) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (let i = 0; i < letters.length; i++) {
        console.log(str.split(letters[i]))
        if (str.split(letters[i]).length > 5){
            return true
        }
    }
    return false
}

module.exports = matchSameLetters