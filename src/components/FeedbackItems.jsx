import { FaTimes } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "./shared/Card";

function FeedbackItems({ item, handleDelete }) {
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="wheat" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}
FeedbackItems.propTypes = {
  item: PropTypes.object.isRequired,
};
export default FeedbackItems;
