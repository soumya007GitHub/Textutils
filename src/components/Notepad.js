import { useState } from "react";
function Notepad(props){
   let [data, setData] = useState("Just a sample paragraph");
    function upperCase(){
        setData(data.toUpperCase());
    }
    function lowerCase(){
        setData(data.toLowerCase());
    }
    function clearData(){
        setData(data = '');
    }
    function copyText(){
        navigator.clipboard.writeText(data)
        .then(() => {
          console.log(data + " copied ");
        })
        .catch((error) => {
          console.error('Error copying text: ', error);
        });
    }
    function speak(){
        let msg = new SpeechSynthesisUtterance();
        msg.text = data;
        window.speechSynthesis.speak(msg);
    }
    const handleChange = (event) => {
        setData(event.target.value);
      };
    return (
        <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={data}onChange = {handleChange} style = {{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
  <button type="button" className="btn btn-primary mt-2 mx-1" onClick = {upperCase}>Upper Case</button>
  <button type="button" className="btn btn-success mt-2 mx-1" onClick = {lowerCase}>Lower Case</button>
  <button type="button" className="btn btn-warning mt-2 mx-1" onClick = {clearData}>Clear</button>
  <button type="button" className="btn btn-danger mt-2 mx-1" onClick = {copyText}>Copy Text</button>
  <button type="button" className="btn btn-info mt-2 mx-1" onClick = {speak}>Speak</button>
  <h3>Preview :-</h3>
  <p>{data}</p>
  <p>Words - {data.split(" ").length} | Characters - {data.trim().length}</p>
</div>
    );
}
export default Notepad;