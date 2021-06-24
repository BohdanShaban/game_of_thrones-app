import React, {Component} from 'react';
import './randomChar.css';

import GOT_Service from './../services/got_service.js';


export default class RandomChar extends Component {

    apiService = new GOT_Service();

    // game_of_thrones-app
    // React App Based on Game of Thrones API ( https://anapioficeandfire.com/ )

    render() {

        return (

            <div className="random-block rounded">
                <h4>Random Character: John</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender </span>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born </span>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died </span>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture </span>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </div>
        );
    }
}
