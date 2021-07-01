import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import gotService from '../services/got_service';
import {withRouter} from 'react-router-dom';
import ItemDetails from '../itemDetails';
import RowBlock from '../rowBlock';
import Field from '../field/field.js';


export class BooksPage extends Component {
    gotService = new gotService();

    state = {
        selectedBook: null,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook: id
        })
    }

    componentDidCatch(err) {
        this.setState({
            error: true
        })

        console.log(err);
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (

            <ItemList   onItemSelected={(itemId) => { this.props.history.push(itemId)  }}
                        getData={this.gotService.getAllBooks}
                        renderItem={({name}) => `${name}`} />
        ) 

        const itemDetails = (

            <ItemDetails    itemId={this.state.selectedItem}
                            getData={this.gotService.getBook}>

                                <Field field='numberOfPages' label='Pages Number:' />
                                <Field field='publisher' label='Publisher:' />
                                <Field field='released' label='Released:' />
                                {/* <Field field='culture' label='Culture' /> */}
            </ItemDetails>
        )

        return (
            < RowBlock left={itemList} right={itemDetails}/>
        )
    }
}
export default withRouter(BooksPage);