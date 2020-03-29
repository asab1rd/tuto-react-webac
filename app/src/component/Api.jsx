import React, { useState, useEffect } from 'react';

function Api() {
    const [counter, setcounter] = useState(0);
    const [phrase, setphrase] = useState(null);
    function updateCounter() {
        setcounter(counter + 1);
    }
    useEffect(() => {
        const url = "http://numbersapi.com/" + counter
        fetch(url)
            .then(reponse => reponse.text())
            .then(text => setphrase(text))
    }, [counter])


    return (
        <div className="phrase-container">

            <div className="phrase"> {phrase === null ? "chargement" : phrase} </div>
            <div className="btn-phrase">
                <button onClick={updateCounter}> Update Counter </button>
            </div>

        </div>
    )
}

export default Api
