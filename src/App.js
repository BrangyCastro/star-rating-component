import "./App.css";
import { StarRating } from "./components/StarRating";

function App() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <h1>Star Rating</h1>
      <div className="box">
        <StarRating countStar={5} onChange={ratingChanged} />
      </div>
    </div>
  );
}

export default App;
