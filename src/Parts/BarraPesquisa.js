import React, {useState, useContext, useEffect} from 'react'
import ErrorMsg from './MsgErro'
import CaixaResposta from './CaixaResposta'
import {ContextDados} from '../api/SearchData'
import Button from 'react-bootstrap/Button'


const BarraPesquisa = () => {
    const {dados, buscarDados} = useContext(ContextDados)
    const [palavraChave, setPalavraChave] = useState('')
    const [erro, setErro] = useState(0)
    const [initPesquisa, setPesquisar] = useState(false)

    const resposta = () => {const palavra = palavraChave
        if (!initPesquisa) {
            return
        }
        if (palavra === '' || dados.length === 0) {
            setErro(true)
        } else {
            setErro(false)
        }
    }
    useEffect(() => {resposta()})

    const editPalavra = (event) => {setPalavraChave(event.target.value)}
    const buscarPalavra = () => {
        setPesquisar(true)
        buscarDados(palavraChave)
    }

    return (
        <div>
            <input type="text" value={palavraChave} onChange={editPalavra} />
            <Button onClick={buscarPalavra} variant="outline-warning">...</Button>
            {(erro !== 0||dados.length > 0) && <CaixaResposta dados={dados} erro={erro}/>}
            <ErrorMsg catchErro={erro}/>
        </div>
    )
}

export default BarraPesquisa