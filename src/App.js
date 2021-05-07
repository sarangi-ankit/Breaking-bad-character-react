
import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import Header from "./Component/Ui/Header"
import Character from "./Component/Character/Character"
import Search from "./Component/Ui/Search"


function App() {

  const [items,setItems]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery]=useState("")

  useEffect(()=>{
    const fetchApi=()=>{
      axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      .then((response)=>{
        console.log(response.data)
        setItems(response.data)
        setIsLoading(false)
      })
    }
    fetchApi()
  },[query])
  return (
    <>
    <Header />
    <Search getquery={(q)=>setQuery(q)}/>
    <Character isLoading={isLoading} items={items}  />
    </>
  );
}

export default App;
