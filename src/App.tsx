import React from 'react';

import './App.css';
import Person, {PersonInfo} from './Person/Person';

const App = (): JSX.Element => {

    function generateName() {
        return "Ivo";
    }

    const personInfo: PersonInfo = {id: 378943879654, name: "Ivo"}
    const personInfo2: PersonInfo = {id: 378943879655, name: "Danny"}

    return (
          <div className="App">
            <h1>Hallo, {generateName()} !!!!1!</h1>
            <Person personInfo={personInfo}>
                <Person personInfo={personInfo2}>
                </Person>
            </Person>
          </div>
        );
}

export default App;
