import './App.css';

function Message(props) {
    return (
      <div className="App">
        <header className="App-header">
           Well, {props.name}
        </header>
      </div>
    );
  }
  
  export default Message;
  