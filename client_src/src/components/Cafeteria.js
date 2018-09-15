import React, {Component} from 'react';
import axios from 'axios';
import CafeteriaItem from './CafeteriaItem';

class Cafeteria extends Component{
    constructor(){
        super();
        this.state = {
            cafeteria: []
        }
    }

    componentWillMount(){
       this.getCafeteria();
    }

    getCafeteria(){
        axios.get('http://localhost:3000/api/cafeteria')
        .then(response =>{
            this.setState({cafeteria: response.data}, ()=>{
            console.log(this.state);
            });
        })
        .catch(err => console.log(err));
    }

    render(){
        const cafeteriaItems = this.state.cafeteria.map((cafeteria, i) => {
            return(
               <CafeteriaItem key = {cafeteria.id} item={cafeteria}/>
            )
        })

        return(
            <div>
                <h1>Cafeteria</h1>
                <ul className="collection">
                    {cafeteriaItems}
                </ul>    
            </div>    
        )
    }
}

export default Cafeteria
