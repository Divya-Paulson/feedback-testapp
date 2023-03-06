import Header from './components/Header'
import { useState } from 'react';
import FeedbackItem from './components/FeedbackItem'
import './App.css';

function App() {
  const [feedback, setFeedback] = useState();

  return (
    <div className="App">
      <Header></Header>
      <FeedbackItem></FeedbackItem>
    </div>
  );
}

export default App;
