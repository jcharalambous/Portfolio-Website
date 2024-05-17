import React from 'react';
import './App.css';
import ExampleComponent from './components/ExampleComponent'; // Ensure this path is correct

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My Portfolio</h1>
                <ExampleComponent />
            </header>
        </div>
    );
}

export default App;
