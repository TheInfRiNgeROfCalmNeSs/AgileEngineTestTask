import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {
    replaceSelectedWordWithSynonym(e) {
        //console.log('replaceSelectedWordWithSynonym', this.props.selectedWord, e.target.dataset.synonym, this.props.synonymsArray.filter((synonym, key) => key===parseInt(e.target.dataset.synonym, 10)?synonym:null)[0].word)
        let selectedWord = this.props.selectedWord;
        let replacingSynonym = this.props.synonymsArray.filter((synonym, key) => key===parseInt(e.target.dataset.synonym, 10)?synonym:null)[0].word; 
        if(selectedWord.children[0]!==undefined&&selectedWord.children.length===1) {
            console.log('if 1')
            if(selectedWord.children[0].children[0]!==undefined&&selectedWord.children[0].children.length===1) {
                console.log('if 2')
                if(selectedWord.children[0].children[0].children[0]!==undefined&&selectedWord.children[0].children[0].children.length===1) {
                    console.log('if 3')
                    selectedWord.children[0].children[0].children[0].innerText = replacingSynonym;
                } else {
                    console.log('else 3')
                    selectedWord.children[0].children[0].innerText = replacingSynonym;
                }
            } else {
                console.log('else 2')
                selectedWord.children[0].innerText = replacingSynonym;
            }
        } else {
            console.log('else 1', selectedWord.children[0], selectedWord.children.length)
            selectedWord.innerText = replacingSynonym;
        }
    }
    render() {
    	//console.log('textInDivs', this.props.textToEditor)
        return (
            <div id="file-zone">
                <div id="file" contentEditable="true" suppressContentEditableWarning="true">{this.props.textToEditor}</div>
                <div id="synonyms">
                    {
                        this.props.synonymsArray!==null?
                            this.props.synonymsArray.map((synonym, key) => {
                                return (
                                    <div key={key} className="synonym">
                                        word: {synonym.word}, score: {synonym.score}
                                        <button className="format-action replace" type="button" data-synonym={key} onClick={this.replaceSelectedWordWithSynonym.bind(this)}>Replace</button>
                                    </div>
                                )
                            })
                        :
                            null
                    }
                </div>
            </div>
        );
    }
}

export default FileZone;
