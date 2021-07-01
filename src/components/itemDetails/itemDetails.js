import React, {Component} from 'react';
import gotService from '../services/got_service.js';
import './itemDetails.css';

import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';


// const Field = ({item, field, label}) => {

//     return(

//         <li className="list-group-item d-flex justify-content-between">

//             <span className="term"> {label} </span>
//             <span>{item[field]}</span>
//         </li>
//     )
// }
// export {Field};


export default class ItemDetails extends Component {

    state = {
        item: null,
        error: false
    }

    componentDidMount() {
        //this.updateItem();  // —> getData(null) OtherWise
    }

    componentDidUpdate(prevProps) {
        if( this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    componentDidCatch() {
        this.setState({error:true});
    }

    updateItem = () => {
        this.setState( (item) => {
            const {getData, itemId} = this.props;
            getData(itemId)
                .then( item => this.setState({item}))
        })
    }
    

    render() {

        if( !this.state.item) {
            return <span className="itemUnselected">Please Select Smth From ItemList</span>
        }

        if( this.state.error) {
            return <ErrorMessage/>
        }

        const {item} = this.state;
        const {name} = item;
       

        return (
            <div className="char-details rounded">
                <h4> {name} </h4>

                <ul className="list-group list-group-flush">
                    
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item} )
                        })
                    }
                </ul>
            </div>
        );
    }
}