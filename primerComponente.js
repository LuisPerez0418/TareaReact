import React, {useState} from 'react'

const PrimerComponente = () => {
     const [numero, setNumero] = useState(0);
     
     const sumar =()=>{
        setNumero(numero+1);
     }
     const restar=()=>{
        setNumero(numero-1);
     }

  return (
    <div>
        <input type='text' value={numero} readOnly id='numero'></input>
        <input type='button' id='sumar' value={"sumar"} onClick={sumar} ></input>
        <input type='button' id='restar' value={"restar"} onClick={restar}></input>
    </div>
  )
}


export default PrimerComponente
