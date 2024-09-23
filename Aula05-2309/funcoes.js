
function fazAlgo(valor) {
    console.log("chamei faz algo",valor);
}

function chamaFuncao(func) {
    console.log("func",func);
    func(10)
}

let f3 = function() {
    console.log("eu sou f3");
}

let f4 = () => {
    console.log("eu sou f4");
}

let f5 = (x) => console.log(x);

//chamaFuncao(function() {
//    console.log("eu sou uma função sem nome");
//})
chamaFuncao((x) => x+2)

console.log(f5(8))