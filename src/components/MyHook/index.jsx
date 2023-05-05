import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Loading from '../Loading'
function MyHook(){
    const [cars,setCars] = useState()
    useEffect(()=>{

        const fetchCarData = async()=>{
            await axios.get('https://myfakeapi.com/api/cars/')
            .then(res=>{
                console.log(res)
                const myData = res.data.cars.splice(0,10)
                setCars(myData)
            })
            .catch(err=>{
                console.log(err) 
            }) 
        }
        fetchCarData()

    },[])
    
    console.log('cars',cars)
    return(
        <div>
        <h1> I am a Hook Component </h1>
        <ol>
        {cars != null && cars.length ? cars.map((item)=>(
            <li key={item.id}>
                {item.car}
            </li>

        )): <Loading />}
        </ol>
        </div>
    )

}
export default MyHook;