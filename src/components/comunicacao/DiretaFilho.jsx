export default props => {
    return (
        <div>
            <span>{props.nome} </span>
            <span><strong>{props.idade} </strong></span>
            <span>{props.trabalho ? "Verdadeiro" : "Falso"}!</span>
        </div>
    )
}