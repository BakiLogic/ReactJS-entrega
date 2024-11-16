import { createContext, useState, useEffect, useMemo } from 'react'
export const ContextDados = createContext()


const SearchData = (props) => {

    const [data, setData] = useState([])

    const fetchData = async (palavra) => {

      const api_url = `https://api.api-ninjas.com/v1/rhyme?word=${palavra}`


      const response = await fetch(api_url, {
        method: 'GET',
        headers: {
            'X-Api-Key': 'xkOy/83rKwn6omjpGJqreg==JovTO0q9bXfw6vqY'
        },
      })
      setData(await response.json())
    }
    const contextValue = useMemo(() => ({
      data,
      fetchData
    }), [data])
    useEffect(() => {
      fetchData('')
    }, [])
  
    return (
      <ContextFetchData.Provider value={contextValue}>
        {props.children}
      </ContextFetchData.Provider>
    )
  }






export default SearchData