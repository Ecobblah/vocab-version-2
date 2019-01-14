import React from 'react';

const DefSites = ({sites}) => {
    return(
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label  onClick={sites} id="https://www.dictionary.com/browse/" className="btn btn-primary active">
                <input type="radio" name="options" autoComplete="off" defaultChecked /> Dictionary
            </label>
            <label  onClick={sites} id="https://www.merriam-webster.com/dictionary/" className="btn btn-primary">
                <input type="radio" name="options" autoComplete="off" /> Merriam-Webster
            </label>
            <label onClick={sites}  id="https://www.wordnik.com/words/" className="btn btn-primary">
                <input  type="radio" name="options" autoComplete="off" /> Wordnik
            </label>
        </div>
    )
}

export default DefSites;