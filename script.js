const characterAmountRange = document. getElementById ("characterAmountRange");
const characterAmountNumber = document. getElementById("characterAmountNumber")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeLowercaseElement = document.getElementById("includeLowercase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")


const form = documents.getElementById("passwordwordGeneratorform")

characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)

form.addEventListener("submit", e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeLowercase = includeLowercaseElement.checked
    const includeNumbers = includeLNumbersElement.checked
    const includeUppercase = includeUppercaseElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeLowercase, 
    includeSymbols, includNumbers )
})


function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}