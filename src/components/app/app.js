import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import gotService from '../services/got_service.js';
import ToggleBtn from '../toggleRandCharBtn/toggleBtn';

import {BrowserRouter as Router, Route} from 'react-router-dom';
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
        this.setState({showRandomChar: !this.state.showRandomChar});
    };

    onItemSelected = (id) => {
        this.setState({ selectedItem: id })
        //console.log(`selectedItem:${this.state.selectedItem}`);
    }

    render() {
        const randChar = this.state.showRandomChar ? <RandomChar/> : null;

        if (this.state.error) {
            return <ErrorMessage/>
        }
        
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                
                <Container>

                    { randChar }
                    < ToggleBtn onClick={this.toggleRandomChar}/>

                    < HousesPage/>

                </Container>
            </>
        );
    };
}
