import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import ControlPanel from "./control-panel/ControlPanel";
import FileZone from "./file-zone/FileZone";
import getMockText from './text.service';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textToEditor: "",
            selectedWord: null,
            synonymsArray: []
        }
    }
    componentDidMount() {
        getMockText().then(result => this.setState({textToEditor: result}));
    }
    testClick(proxy) {
        //console.log('testClick', proxy.target.closest('.someWord'))
        /* function for selecting one word, but not a whole sentence */
        this.selectText(`#someWord${proxy.target.closest('.someWord').dataset.word}`)
        this.setState({selectedWord: proxy.target.closest('.someWord')})
    }
    selectText(node) {
        node = document.querySelectorAll(node)[0];
        if (document.body.createTextRange) {
            const range = document.body.createTextRange();
            range.moveToElementText(node);
            range.select();
        } else if (window.getSelection) {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(node);
            selection.removeAllRanges();
            selection.addRange(range);
        } else {
            console.warn("Error: couldn't select the word for some reason!");
        }
    }
    findWordSynonyms() {
        if(this.state.selectedWord) {
            axios.get(`http://api.datamuse.com/words?ml=${this.state.selectedWord.innerText}`)
            .then((response) => {
                console.log(response);
                this.setState({synonymsArray: response.data})
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }
    render() {
        console.log('render state:', this.state)
        const textToEditor = this.state.textToEditor
        let splittedText = textToEditor.split(" ")
        let textInDivs = splittedText.map((word, ind) => <div onClick={this.testClick.bind(this)} className="someWord" id={`someWord${ind}`} key={ind} data-word={ind}>{word}</div>)
        return (
            <div className="App">
                <header>
                    <span>Simple Text Editor</span>
                </header>
                <main>
                    <ControlPanel findWordSynonyms={this.findWordSynonyms.bind(this)} />
                    <div className="hint">Click any Word, then apply style formatting or find some synonyms</div>
                    <FileZone textToEditor={textInDivs} synonymsArray={this.state.synonymsArray} />
                </main>
            </div>
        );
    }
}

export default App;
