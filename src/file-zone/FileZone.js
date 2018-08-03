import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {
    render() {
    	//console.log('textInDivs', this.props.textToEditor)
        return (
            <div id="file-zone">
                <div id="file" contentEditable="true" suppressContentEditableWarning="true">{this.props.textToEditor}</div>
                <div id="synonyms">
                    {
                        this.props.synonymsArray!==null?
                            this.props.synonymsArray.map(synonym => {
                                return (
                                    <div className="synonym">word: {synonym.word}, score: {synonym.score}</div>
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
