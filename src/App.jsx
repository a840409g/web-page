import React from 'react';
import NewsHome from './views/NewsHome';
import './App.css';
import{
    HashRouter as Router,
    Routes,
    Route
} from 'react-router-dom';

function App () {
    return (
        <Router>
            <div id = "app">
                <Routes>
                    <Route path = '/' exact element = { <NewsHome /> } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
