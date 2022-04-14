import React, { useState } from "react"

import IndiretaFilho from "./IndiretaFilho"

export default props => {
    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [trabalho, setTrabalho] = useState(false)

    function fornecerInformacoes(nome, idade, trabalho) {
        setNome(nome)
        setIdade(idade)
        setTrabalho(trabalho)
    }
    return (
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong></span>
                <span> {trabalho ? "verdadeiro" : "falso"}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
        </div>
    )
}