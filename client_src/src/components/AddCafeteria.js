import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class AddCafeteria extends Component{
    
    addCafeteria(newCafeteria){
       axios.request({
           method:'post',
           url:'http://localhost:3000/api/cafeteria',
           data: newCafeteria
            
       }).then(response =>{
           this.props.history.push('/');
       }).catch(err => console.log(err));
    }

    onSubmit(e){
        const newCafeteria = {
            nome: this.refs.nome.value,
            cidade: this.refs.cidade.value,
            endereço: this.refs.endereço.value
        }
        this.addCafeteria(newCafeteria)
        e.preventDefault();
    }
    
    render(){
        return(
           <div>
                <br />   
                <Link className ="btn grey"to="/">Back</Link>    
                <h1>Adicionar Cafeteria</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="nome" ref="nome" />
                        <label htmlFor="name">Nome</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="cidade" ref="cidade" />
                        <label htmlFor="cidade">Cidade</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="endereço" ref="endereço" />
                        <label htmlFor="endereço">Endereço</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
           </div>    
        )
    }
}

export default AddCafeteria;