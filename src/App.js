import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Question from './components/question';

import 'fontsource-roboto';
const App = () =>{
    return(
        <div className='ui container'>
            <Router>
                <Question/>
            </Router>

        </div>
    )
}
export default App;