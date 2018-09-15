import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class CafeteriaDetails extends Component{
    constructor(props){
        super(props);
        this.state = {
            details:''
        }
    }

    componentWillMount(){
        this.getCafeteria();
    }
    getCafeteria(){
        let cafeteriaId = this.props.match.params.id;
        axios.get( `http://localhost:3000/api/cafeteria/${cafeteriaId}`)
        .then(response =>{
            this.setState({details: response.data}, ()=>{
            console.log(this.state);
            });
        })
        .catch(err => console.log(err));
    }

    onDelete(){
        let cafeteriaId = this.state.details.id;
        axios.delete(`http://localhost:3000/api/cafeteria/${cafeteriaId}`)
           .then(response => {
            this.props.history.push('/');

           }).catch(err => console.log(err));
            
    }



    render(){
        return(
           <div>
            <br />   
            <Link className ="btn grey"to="/">Back</Link> 
            <h1>{this.state.details.nome}</h1>
            <ul className = "collection">
                <li className="collection-item">Cidade: {this.state.details.cidade}</li>
                <li className="collection-item">Endereço: {this.state.details.endereço}</li>
            </ul>  
            <Link className="btn" to={`/cafeteria/edit/${this.state.details.id}`}>Editar</Link>
           <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
           </div>    
        )
    }
}

export default CafeteriaDetails;