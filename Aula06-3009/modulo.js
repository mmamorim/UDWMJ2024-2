function fazAlgo() {
    console.log("oi gente");
    console.log("tudo bem?");
}

function outra() {
    console.log("oi outra");
    console.log("tudo joia?");
}

function createPerson(name, age, height) {
    return {
        name,
        age,
        height,
        birthday() {
            this.age++
        }
    }
}

export { fazAlgo, outra, createPerson }
