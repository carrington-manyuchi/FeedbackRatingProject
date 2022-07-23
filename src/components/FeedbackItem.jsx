import { FaTimes } from "react-icons/fa";
import FeedbackStats from "./FeedbackStats";
import Card from "./shared/card";

const FeedbackItem = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-displaly">{item.text}</div>
    </Card>
  );
};

export default FeedbackItem;
