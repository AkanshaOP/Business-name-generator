console.log("Business name generator")
let rand = Math.random()
let first, second, third
if (rand < 0.33) {
    first = "crazy"
}
else if (rand >= 0.33 && rand < 0.66) {
    first = "amazing"
}
else {
    first = "fire"
}
if (rand < 0.33) {
    second = "engine"
}
else if (rand >= 0.33 && rand < 0.66) {
    second = "food"
}
else {
    second = "garments"
}
if (rand < 0.33) {
    third = "bros"
}
else if (rand >= 0.33 && rand < 0.66) {
    third = "limited"
}
else {
    third = "hub"
}
console.log(` ${first} ${second} ${third}`)



