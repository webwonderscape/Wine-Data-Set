import React, {useEffect,useState} from 'react'
import Context from './components/Context/Context'
import UtilityCalculations from './components/UtilityCalculations'


const App = ()=> {
  // State to store the data fetched from 'data.json'
  const [data, setData] = useState([])
  // Function to fetch data from 'data.json' and update the state
  const getData=()=>{
    fetch('data.json',{headers:{
      'content-type':'application/json',
      'Accept':'application/json'
    }}).then((response)=>{
      return response.json()
    }).then((myjson)=>{
      setData(myjson)
    })
  }

  // Fetch data on component mount using useEffect
  useEffect(()=>{
    getData()
  }, [])

return(
  <Context.Provider value={data}>    
    <UtilityCalculations/>
  </Context.Provider>
)

}
export default App
