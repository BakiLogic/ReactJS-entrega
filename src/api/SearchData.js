import { createContext, useState, useEffect, useMemo } from 'react'
export const ContextDados = createContext()


const SearchData = (props) => {

    const [dados, setDados] = useState([])

    const buscarDados = async (palavra) => {

      const api_url = `https://api.api-ninjas.com/v1/rhyme?word=` + palavra

      const resposta = await fetch(api_url, {method: 'GET', headers: {'X-Api-Key': 'xkOy/83rKwn6omjpGJqreg==JovTO0q9bXfw6vqY'},})
      setDados(await resposta.json())
    }
    const valorContexto = useMemo(() => ({dados,buscarDados}),[dados]) 
    useEffect(() => {buscarDados('')},[])
  
    return (
      <ContextDados.Provider value={valorContexto}> {props.children} </ContextDados.Provider>
    )
  }

export default SearchData