import React, { Component } from 'react'
import LoadingComponent from '../Loading'
class MyData extends Component {

    state = {
        cars: null
    }

    constructor(props){
        super()
        
    }
    componentDidMount(){

        const fetchCarData = async ()=>{
            const response = await fetch('https://myfakeapi.com/api/cars/')
            const data = await response.json()
            const myData = data.cars.splice(0,10)
            this.setState({cars: myData})
    
        }
        fetchCarData()
    }
    
    render(){
            const Cars = this.state.cars
        return(
            <div>
                <h1> My Cars</h1>
                <ol>
                {Cars != null && Cars.length ? Cars.map(item=>(
                    <li key={item.id}>{item.car}</li>
                )): <LoadingComponent />} 
                </ol>


            </div>
        )
    }
}
export default MyData;