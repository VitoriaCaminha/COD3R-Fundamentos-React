export default function ComParametro(props) {
    const aluno = props.aluno
    const status = props.nota >= 7 ? "aprovado" : "em recuperação"
    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{aluno} tem nota {props.nota} e está <strong>{status}</strong>!</p>
        </div>
    )
}