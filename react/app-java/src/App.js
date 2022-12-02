import './App.css';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Prodotto from './Prodotto';

function App() {
  // const [name, setName] = useState('Lorenzo');
  // const inputElement = useRef();

  // response = {
    //   ... 
    //   data: {
    //     success: true,
    //     data:{
    //       idProducts:[]
    //     }
    //   }
    // }

  const [idProducts, setIdProducts] = useState([])
  const [isPending, setIsPending] = useState(true)

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/data")
    .then(response => response.data)
    .then(response => {
    if(response.success){
      setIdProducts(response)
    }else{  //status < 400 ma success is false
      console.log("Non ci sono prodotti");
    }
      
    }).catch(err => {//status > 400 o esplosi per qualche motivo
      console.log("Error in getAllId: ", err)
    })
  }, [])  //[] runna solo la prima volta
  
  useEffect(() => {
    setIsPending(false)
  }, [idProducts])

  return (
    <div className="App">

      {!isPending && idProducts.map((item) => (<Prodotto idProduct={item.idProduct}/>))}


      {/* <input onChange={() => console.log(inputElement.current.value)}type="text" ref={inputElement}/>
      <button onClick={() => console.log(inputElement.current.value)}>test</button> */}
    </div>
  );
}


export default App;
