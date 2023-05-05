import React, { Component } from 'react'
import axios from 'axios'
import LoadingComponent from '../Loading'
class FootballStadiums extends Component {

    state = {
        stadiums: null
    }

    constructor(props){
        super()
        
    }
    componentDidMount(){

        const fetchCarData = async ()=>{
            await axios.get('https://myfakeapi.com/api/football')
            .then(res=>{
                console.log(res)
                const myData = res.data.football.stadiums
                this.setState({stadiums: myData })
            })
            .catch(err=>{
                console.log(err)
            })
        }
        fetchCarData()
    }
    render(){
            const stadiums = this.state.stadiums
        return(
            <div>
                <h1> Football Stadiums</h1>
                <ol>
                {stadiums != null && stadiums.length ? stadiums.map(item=>(
                    <li key={item.id}>{item.city}
                            <img 
                                src={item.image}
                                width={250}
                                height={250}
                                alt=""
                            />
                    </li>
                )): <LoadingComponent />} 
                </ol>


            </div>
        )
    }
}
export default FootballStadiums;