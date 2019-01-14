import React,{Component} from 'react';
import axois from 'axios';

class DayWord extends Component{
    state={
        wordOfDay: null,
        defin: null,
        sentence: null,
        PartOfSpeech: null
    }
    componentDidMount = () => {
        axois.get("https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=92175cfc532f814ba060408916a0e492075768c5fb262baba")
        .then(res => {
            this.setState({
                wordOfDay: res.data.word,
                defin: res.data.definitions[0].text,
                sentence: res.data.examples[0].text,
                partOfSpeech: res.data.definitions[0].partOfSpeech
            })
        })   
   }
   handleClick = (e) => {
        let path = '/Vocab';
        this.props.history.push(path);
    }
 
    render(){

        let wordOfTheDayOutput = this.state.defin === null ? (
            <div className="d-flex justify-content-center mt-4">
                <div className="spinner-border mt-4" role="status">
                    <span className="sr-only mt-4">Loading...</span>
                </div>
            </div>
        ) : (
            <div>
                <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Word Of the Day: <strong>{this.state.wordOfDay}</strong></h1>
                            <h4>Definition:</h4>
                            <p className="lead">{this.state.defin}</p>
                            <h4>Sentence:</h4>
                            <p className="lead">{this.state.sentence}</p>
                        </div>
                </div>
                <div className="container text-center mb-4 pb-4">
                    <h1 className="display-4">Lets go Search some words!</h1>
                    <button onClick={this.handleClick} type="button" className="btn btn-outline-primary btn-lg pb">Search!</button>
                </div>
            </div>
        );

        return(
            <div>
                {wordOfTheDayOutput}
            </div>
        )
    }
}

export default DayWord;