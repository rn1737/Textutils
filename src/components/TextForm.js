import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success"); 
  }

  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");   
  } 

  const handleOnChange = (event) => {
    setText(event.target.value);
    props.showAlert("Text Changed!", "success");
  }

  const handleClearData = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  }

  const handleCopy = () => {
    let textToCopy = document.getElementById("myBox");
    textToCopy.select();
    navigator.clipboard.writeText(textToCopy.value);
    props.showAlert("Copied done!", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra Spaces!", "success");
  }

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3"></div>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
        <div style={{ marginTop: '10px' }}>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowerClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearData}>Clear Data</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div> 

        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text : "Nothing to Preview !"}</p> 
        </div>
      </div>
    </>
  );
}
