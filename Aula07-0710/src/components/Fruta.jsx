

function Fruta({ fruta }) {
    let { nome, id, emoji } = fruta

    return (
        <div className="flex gap-1">
            <div className="bg-gray-200 my-1 p-1 rounded">
                {emoji}
            </div>
            <div className="text-3xl bg-gray-200 my-1 p-1 rounded">
                {id}
            </div>
            <div className="bg-gray-200 my-1 p-1 rounded">
                {nome}
            </div>
            <div>
                <button>remover</button>
            </div>
        </div>
    )
}

export default Fruta