import React, { useState } from 'react'

export default function TestForm(props) {
    const [text, setText] = useState("Enter text here")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClickUpper = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "Success")
    }

    const handleClickLower = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase", "Success")
    }

    const handleClear = () => {
        setText("")
        props.showAlert("Cleared Text", "Success")
    }

    const handleCopy = () => {
        let x = document.getElementById("myBox");
        x.select();
        navigator.clipboard.writeText(x.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Copied Text", "Success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "Success")
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h3>{props.heading}</h3>
                <div class="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="5"  ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClickUpper}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClickLower}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
            </div >

            <div className="container my-4" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your text Summary</h2>
                <ul>
                    <li><b>{text.split(/\s+/).filter((el) => { return el.length !== 0 }).length}</b> words and <b>{text.length} </b> characters</li>
                    <li> <b>{0.008 * text.split(" ").length}</b> minutes read</li>
                </ul>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter in the textbox to preview"}</p>
            </div>


        </>
    )
}
