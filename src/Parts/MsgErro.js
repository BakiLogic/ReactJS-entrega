import { useState, useEffect } from 'react'
import Toast from 'react-bootstrap/Toast';

function ErrorMsg({catchErro}) {
    const [visibility, mostrar] = useState(false)
    let msg = "Nenhuma rima encontrada"
    useEffect(() => {
        if (catchErro === true) {
            mostrar(true)
        } else {
            mostrar(false)
        }
    }, [catchErro])
    
    return (
        <>
            <Toast show={visibility} className='ErrorMsgs'>
                <Toast.Header>
                    ERRO             
                </Toast.Header> 
                <Toast.Body>
                    {msg}               
                </Toast.Body>                          
            </Toast>
        </>
   )

} export default ErrorMsg