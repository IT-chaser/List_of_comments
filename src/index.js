import { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function App() {
  const [comments, setComments] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/comments"
    );

    setComments(response.data);
  };

  return (
    <div className="App">
      <h1>List of Comments</h1>
      <h2>Fetch a comment list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Display Comments
        </button>
        <br />
      </div>

      {/* Display comment from API */}
      <div className="comments">
        {comments &&
          comments.map((comment, index) => {
            return (
              <div className="comment" key={index}>
                <h3>Comment {index + 1}</h3>

                <div className="details">
                  <p>{comment.name} pages</p>
                  <p>{comment.email}</p>
                  <p>{comment.body}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
