import React from 'react';
import {BrowserRouter as Router, Link, Switch,Route} from 'react-router-dom';
import Question from './components/question';
import Options from './components/options';
import 'fontsource-roboto';
const App = () =>{
    return(
        <div className='ui container'>
            <Router>
                <Question/>
                <Options/>
            </Router>

        </div>
    )
}
export default App;