import { useState } from 'react'

function Relogio(params) {
    let [ msg, setMsg ] = useState("oi gente")
    let [ minutos, setMinutos ] = useState(parseInt(params.min))

    

    function adicionar() {
        console.log("passei aqui",minutos);
        setMinutos(minutos+5)
        setMsg("Alterei")
    }

    function start() {
        setInterval(() => {
            setMinutos(minutos+1)
        },1000)
    }

    return (
        <div className="border p-1 m-1 rounded">
            relógio ({msg}): {params.hora} : { minutos < 10 ? '0'+minutos : minutos } 
            <button onClick={adicionar} className="border p-1 rounded mx-1">
                Add
            </button>
            <button onClick={start} className="border p-1 rounded mx-1">
                Start
            </button>
        </div>
    )
}

export default Relogio