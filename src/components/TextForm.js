import React, { useState } from 'react'

export default function TextForm(props) {
    const clickupper = () => {
        // console.log("uppercase btn was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
    }
    const handleOnchange = (event) => {
        // console.log("uppercase btn was clicked")
        setText(event.target.value)
    }
    const clickLower = () => {
        // console.log("lower case btn was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success")

    }
    const clickClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared text", "warning")
    }
    const clickCapitalize = () => {
        let arr = text.split(" ");
         for (let i =0;i<arr.length;i++){
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
         }
         let newText = arr.join(" ");
        setText(newText);
        props.showAlert("Capitalized the first letter of each word", "success")

    }
    const clickCopy = () => {
        let newText = document.getElementById('mytextA')
        newText.select();
        navigator.clipboard.writeText(newText.value);
        setText(newText.value);
        props.showAlert("Copied to clipboard", "success")

    }
    const clickRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/g);
        setText(newText.join(" "));
        props.showAlert("Removed extra spaces from text", "success")

    }
    const [text, setText] = useState('');  //useState hook
    return (
        <div className="container" style={{backgroundColor:props.mode ==='light'?'white':'#042743',color:props.mode ==='light'?'black':'white'}} >
            <div className='container my-3'>
                <h2 className='mx-2'>{props.heading}</h2>
                <div className="container">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode ==='light'?'white':'#13466e',color:props.mode ==='light'?'black':'white'}} onChange={handleOnchange} id="mytextA" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary my-3 mx-3 ' onClick={clickupper}>CONVERT TO UPPERCASE</button>
                <button disabled={text.length===0} className='btn btn-primary my-3 mx-3' onClick={clickLower}>CONVERT TO LOWERCASE</button>
                <button disabled={text.length===0} className='btn btn-primary my-3 mx-1' onClick={clickCapitalize}>CAPITALIZE</button>
                <button disabled={text.length===0} className='btn btn-primary my-3 mx-3' onClick={clickCopy}>COPY TEXT</button>
                <button disabled={text.length===0} className='btn btn-primary my-3 mx-2' onClick={clickRemoveExtraSpaces}>REMOVE EXTRA SPACE</button>
                <button disabled={text.length===0} className='btn btn-primary my-3 mx-3 ' onClick={clickClear}>CLEAR</button>

                {/* <button className='btn btn-primary my-3 mx-3'>Convert to LowerCase</button>
            <button className='btn btn-primary my-3 mx-3'>Convert to LowerCase</button> */}
            </div>
            <div className="container" >
                <h2>Preview Summary</h2>
                <p>{text.split(" ").length && text.split(" ").filter((element)=>{ return element.length!==0}).length} words and {text.length} characters</p>
                <p>{text.length>0?"Time needed to read " + 0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length + " minutes per word":"Time needed to read above text will be displayed here, A single word takes on an average 0.008 seconds to read"}</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something above in text box to preview here"}</p>
            </div>
        </div>
    )
}
TextForm.defaultProps = {
    heading: 'Enter your text here',
}