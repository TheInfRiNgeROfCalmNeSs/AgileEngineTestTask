import React, { Component } from 'react';
import './FileZone.css';

class FileZone extends Component {
    render() {
    	const textToEditor = this.props.textToEditor
    	let splittedText = textToEditor.split(" ")
    	let textInDivs = splittedText.map((word, ind) => <div key={ind} data-word={ind}>{word}</div>)
    	console.log('textInDivs', textInDivs)
        return (
            <div id="file-zone">
                <div id="file">{textInDivs}</div>
            </div>
        );
    }
}

export default FileZone;
