import React, { useState } from 'react';

export default function About(props) {
  //const [myStyle, setMyStyle] = useState({
  //color: 'black',
  //backgroundColor: 'white',
  //border: '2px solid white' // Add the border property here
  //}); 
  let myStyle={  
    color: props.mode==='dark'?'white':'#042743',
    backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',
  }

  const [btnText, setBtnText] = useState("Enable Dark Mode"); 

  return (
    <div className="container" style={myStyle}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
          <button
        className="accordion-button"
        type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseOne" // Make sure this matches the ID
      aria-expanded="true"
      aria-controls="collapseOne" // Make sure this matches the ID
>
  <strong>Analyze Your Text</strong> 
</button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            Textutils gives you a to analyze your text Quickly and efficiently. Be it word count,character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Textutils is a free character count tool that provides instant character & word count statistics for a fiven Text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            This word counter software works in any web browsers such as chrome,firebox,Internet Explorer, safari,opera.It suits to count characters in Facebook,bolgs books, excel, document,pdf, essays etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3"></div>
      </div> 
  );
}
