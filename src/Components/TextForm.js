import { useState } from "react";

export default function TextForm(props) {

  const onChangeHandler = (event) => {
    setText(event.target.value)
  };

  const onLowHandler = (event) => {
    setText(text.toLowerCase())
    props.showAlert("Text updated to lower case!", "success")
  };

  const onUpHandler = ()=>{
    setText(text.toUpperCase())
    props.showAlert("Text updated to upper case!", "success")
  }

  const onClearHandler = ()=>{
    setText("")
    props.showAlert("Text cleared!", "success")
  }

  const onCopyHandler = ()=>{
      let text = document.getElementById("myBox")
      text.select()
      navigator.clipboard.writeText(text.value)
      props.showAlert("Text copied!", "success")
  }

  const onExtraSpaceHandler = ()=>{
      let  arr = text.split(/[ ]+/);
      setText(arr.join(" "))
      props.showAlert("Extra space removed!", "success")
  }

  const [text, setText] = useState("");
  return (
   <>
    <div className="mb-3 my-4" style={{color:props.mode === 'light'?"black":"white"}}>
      <h1>{props.heading}</h1>
      <textarea style={{color:props.mode === 'light'?"black":"white", backgroundColor:props.mode==='light'?'white':'grey'}}
        className="form-control"
        placeholder="Enter your text here"
        id="myBox"
        value={text}
        onChange={onChangeHandler}
        rows="8"
      ></textarea>
      <button className="btn btn-primary my-2 mx-1" onClick={onUpHandler}>ToUpperCase</button>
      <button className="btn btn-primary my-2 mx-1" onClick={onLowHandler}>ToLowerCase</button>
      <button className="btn btn-primary my-2 mx-1" onClick={onCopyHandler}>CopyText</button>
      <button className="btn btn-primary my-2 mx-1" onClick={onExtraSpaceHandler}>Extra Space</button>
      <button className="btn btn-danger my-2 mx-1" onClick={onClearHandler}>Clear</button>
      
    </div>
    <div className="container" style={{color:props.mode === 'light'?"black":"white"}}>
      <h2>Your text summary</h2>
      <p><b>{text.trim().length===0?0:text.trim().split().length}</b> words and <b>{text.length}</b> characters</p>
      <p><b>{0.008 * text.split(" ").length} </b>min's to read!</p>
      <h2>Preview</h2>
      <p>{text.length===0?'Enter your text in above textbox to preview it here!':text}</p>
    </div>
   </>
  );
}
