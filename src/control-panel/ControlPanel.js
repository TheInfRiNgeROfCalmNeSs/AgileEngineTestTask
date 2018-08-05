import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
    makeWordBold() {
        document.execCommand('bold')
    }
    makeWordItalic() {
        document.execCommand('italic')
    }
    makeWordUnderlined() {
        document.execCommand('underline')
    }
    render() {
        return (
            <div id="control-panel">
                <div id="format-actions">
                    <button className="format-action" type="button" onClick={this.makeWordBold}><b>B</b></button>
                    <button className="format-action" type="button" onClick={this.makeWordItalic}><i>I</i></button>
                    <button className="format-action" type="button" onClick={this.makeWordUnderlined}><u>U</u></button>
                    <button className="format-action" type="button" onClick={this.props.findWordSynonyms}>Find Synonyms</button>
                </div>
            </div>
        );
    }
}

export default ControlPanel;
