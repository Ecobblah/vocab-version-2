import React,{Component} from 'react';
import axois from 'axios';
import DefSites from './DefSites';

class Vocab extends Component{
    state={
        word: "",
        list: [],
        cards: true,
        error: false,
        site: "https://www.dictionary.com/browse/"
    }

    handleChange = (e) => {
        this.setState({
            word: e.target.value
        })
    }
    handleSearch = (e) => {
        e.preventDefault();
        axois.get("https://api.wordnik.com/v4/word.json/"+this.state.word.toLowerCase()+"/definitions?limit=1&includeRelated=false&useCanonical=false&includeTags=false&api_key=92175cfc532f814ba060408916a0e492075768c5fb262baba")
        .then(res => {
            // if word not found
            if( res.data.length === 0 ){
                this.setState({
                    error: true
                })
            }
            else{
                let wordsList = [...this.state.list,res.data[0]];
                this.setState({
                    word: "",
                    list: wordsList,
                    error: false
                });
            }
            
        })  
    }

    handleToggle = (e) => {
        if(this.state.cards === true){
            this.setState({
                cards: false
            })
        }
        else
        this.setState({
            cards: true
        })
    }

    handleSites = (e) => {
        this.setState({
            site: e.target.id
        })
    }
    
    render(){
        // Make sure words stay updated
        let vocabList = this.state.list.map( i=>{
            if(this.state.cards===true){
                if (i===undefined){
                    return(null);
                }
                else {
                    return(
                        <div className="card w-100 my-4" key={i.word}>
                            <div className="card-header">
                                <a href={this.state.site+i.word} target="_blank" rel="noopener noreferrer">
                                    <h4>{i.word}</h4>
                                </a>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Definition: </h5>
                                <p className="card-text">{i.text}</p>
                            </div>
                        </div>
                    )
                }
            }
            else {
                if (i===undefined){
                    return(null);
                }
                else{
                    return(
                        <div className="bigText"key={i.word}>
                            <p>
                                <strong>{i.word}:</strong> {i.text}
                            </p>
                        </div>
                    )
                }
            }
        });


        let outputError = this.state.error ? (
                
                <h1 className="display-4">
                    Not found
                </h1>
        ) : (
            null
        );

        return(
            <div className="container">
                <div className="row mt-2">
                    <div className="col-sm mt-2">
                        <DefSites sites={this.handleSites} />
                    </div>
                    <div className="col-sm text-center mt-2">
                        <button onClick={this.handleToggle} className="btn btn-outline-primary">Cards?</button>
                    </div>
                </div>
                {outputError}
                <h1 className="display-3">Search: {this.state.word}</h1>
                <form onSubmit={this.handleSearch}>
                    <div className="input-group input-group-lg">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="submit" id="inputGroup-sizing-lg">Search</button>
                        </div>
                        <input onChange ={this.handleChange} type="text" className="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" value={this.state.word}></input>
                    </div>
                </form>

                {vocabList}
            </div>
        )
    }
}
export default Vocab;