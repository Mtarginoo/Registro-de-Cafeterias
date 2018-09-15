import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CafeteriaItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render(){
        return(
            <li className="collection-item">
                <Link to={`/cafeteria/${this.state.item.id}`}>{this.state.item.nome}</Link>
            </li>  
        )
    }
}

export default CafeteriaItem;