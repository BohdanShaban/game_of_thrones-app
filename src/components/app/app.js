import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import ItemDetails from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../services/got_service.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Field from '../field/field.js';
import RowBlock from '../rowBlock/';

import {CharacterPage, BooksPage, HousesPage} from '../pages';



import './app.css';



export default class App extends Component {

    gotService = new gotService();

    state = {
        showRandomChar: true,
        error: false,
        selectedItem: null
    };

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
        console.log(`selectedItem:${this.state.selectedItem}`);
    }

    render() {
        const char = this.state.showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }

        // const itemList = (

        //     <ItemList   onItemSelected={this.onItemSelected}
        //                 getData={this.gotService.getAllCharacters}
        //                 renderItem={({name}) => `${name}`} />
        // ) 

        // const itemDetails = (

        //     <ItemDetails    itemId={this.state.selectedItem}
        //                     getData={this.gotService.getCharacter}>

        //                         <Field field='gender' label='Gender' />
        //                         <Field field='born' label='Born' />
        //                         <Field field='died' label='Died' />
        //                         <Field field='culture' label='Culture' />
        //     </ItemDetails>
        // )
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            { char }
                                <button 
                                    className="toggle-btn"
                                    onClick={this.toggleRandomChar}>Toggle random character
                                </button>
                        </Col>
                    </Row>

                    < HousesPage/>

                </Container>
            </>
        );
    };
}
