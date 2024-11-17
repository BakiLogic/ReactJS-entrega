import ListGroup from 'react-bootstrap/ListGroup'

const CaixaResposta = ({ dados, erro }) => {
    
    if (erro === false) {
      return (
        <div>
        <listgroup>
          {dados.map((rima, index) => (
            <div key={index} className='inputRhyme'>
            <ListGroup.Item>{index + 1}. {rima}</ListGroup.Item>
          </div>))}
          </listgroup>
        </div>
      )
    } else {
      return ''
    }
  }
  
  export default CaixaResposta