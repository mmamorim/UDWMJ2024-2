
let contador = 0

let timer = setInterval(() => {
    contador++
    console.log("contador",contador);    
},1000)

setInterval(() => {
    console.log("passou 2 seg");
},2000)

