import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditCafeteria extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            nome:'',
            cidade:'',
            endereço:''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount(){
        this.getCafeteriaDetails();
    }

    getCafeteriaDetails(){
        let cafeteriaId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/cafeteria/${cafeteriaId}`)
        .then(response => {
            this.setState({
                id:response.data.id,
                nome:response.data.nome,
                cidade:response.data.cidade,
                endereço:response.data.endereço
            }, ()=> {
                console.log(this.state);
            });
        }
        )
        .catch(err => console.log(err));
    }

    editCafeteria(newCafeteria){
        axios.request({
          method:'put',
          url:`http://localhost:3000/api/cafeteria/${this.state.id}`,
          data: newCafeteria
        }).then(response => {
          this.props.history.push('/');
        }).catch(err => console.log(err));
      }
    
      onSubmit(e){
        const newCafeteria = {
          nome: this.refs.nome.value,
          cidade: this.refs.cidade.value,
          endereço: this.refs.endereço.value
        }
        this.editCafeteria(newCafeteria);
        e.preventDefault();
      }
    
      handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }


    render(){
        return(
           <div>
                <br />   
                <Link className ="btn grey"to="/">Back</Link>    
                <h1>Editar Cafeteria</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field">
                        <input type="text" name="nome" ref="nome" value={this.state.nome} onChange={this.handleInputChange.bind(this)}/>
                        <label htmlFor="name">Nome</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="cidade" ref="cidade" value={this.state.cidade} onChange={this.handleInputChange.bind(this)} />
                        <label htmlFor="cidade">Cidade</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="endereço" ref="endereço" value={this.state.endereço} onChange={this.handleInputChange.bind(this)}/>
                        <label htmlFor="endereço">Endereço</label>
                    </div>
                    <input type="submit" value="Save" className="btn" />
                </form>
           </div>    
        )
    }
}

export default EditCafeteria;