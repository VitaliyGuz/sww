function matchConsecutiveLetters(str) {
    const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
    for (let i = 0; i < letters.length - 4; i++) {
        const consecutiveString = new RegExp(letters[i] + letters[i + 1] + letters[i + 2] + letters[i + 3] + letters[i + 4])
        if (consecutiveString.test(str)){
            return true
        }
    }
    return false
}

module.exports = matchConsecutiveLetters