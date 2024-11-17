import ListGroup from 'react-bootstrap/ListGroup'

const Resposta = ({ dados, erro }) => {
    
    if (erro == false) {
      return (
        <div>
          {dados.map((rima, index) => (<div key={index} className='inputRhyme'>
            <ListGroup.Item>{index + 1}. {rima.word}</ListGroup.Item>
          </div>))}
        </div>
      )
    } else {
      return ''
    }
  }
  
  export default Resposta