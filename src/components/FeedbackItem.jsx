import React,{useState}from 'react'
import './feedbackItem.css'

function FeedbackItem() {
const[rating,setRating]=useState(7);
const[text,setText]=useState('This is an example of feedback Item');
const handleClick =()=>{
  setRating(10);
  setText('Button changes the text');
}
  return (
    <div className="card">
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
        <button onClick={handleClick}>click</button>
    </div>
  )
}

export default FeedbackItem