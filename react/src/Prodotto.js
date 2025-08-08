import './App.css';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Prodotto(props) {
  const [nameProduct, setNameProduct] = useState('')
  const [categoryProduct, setCategoryProduct] = useState('')
  const [isPending, setIsPending] = useState(true)
  
  
  useEffect(() => {
    setIsPending(false)
  }, [categoryProduct])

  const fetchData = () => {
    axios.get(`http://127.0.0.1:8000/getProductById?idProduct=${props.idProduct}`)
    .then(response => response.data)
    .then(response => {
    if(response.success){
        setNameProduct(response.data.nameProduct)
        setCategoryProduct(response.data.categoryProduct)

    }else{  //status < 400 ma success is false
      console.log("Non ci sono info sul prodotto");
    }
      
    }).catch(err => {//status > 400 o esplosi per qualche motivo
      console.log("Error in getProductById: ", err)
    })
  }

  return (
    <div className="App">
        <h1>Prodotto: {props.idProduct}</h1>
        {!isPending && (<h1>Name: {nameProduct}</h1>)}
        {!isPending && (<h1>Category: {categoryProduct}</h1>)}
        <button onClick={fetchData}>fetch</button>


      {/* <input onChange={() => console.log(inputElement.current.value)}type="text" ref={inputElement}/>
      <button onClick={() => console.log(inputElement.current.value)}>test</button> */}
    </div>
  );
}


export default Prodotto;
