import { useState } from 'react'
import { useEffect } from 'react';
import Fruta from "./Fruta"

function ListaFrutas(params) {
    let [msg, setMsg] = useState("oi gente")
    let [frutas, setFrutas] = useState([])

    async function loadFrutas() {
        let resp = await fetch('http://localhost:3000/frutas')
        let obj = await resp.json()
        let vetor = []
        for (let key in obj) {
            vetor.push(obj[key])
        }
        console.log(vetor);
        setFrutas(vetor)
    }

    useEffect(() => {
        console.log("montando componente");
        loadFrutas()
    }, [])

    return (
        <div>
            {
                frutas.map((obj, index) => {
                    return(
                        <Fruta key={index} fruta={obj}></Fruta>
                    )
                })
            }
        </div>
    )
}

export default ListaFrutas