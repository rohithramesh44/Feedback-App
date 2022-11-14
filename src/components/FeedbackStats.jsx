import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
  //calculation rating avg.
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>feedback.lenght</h4>
      <h4>Avrage Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};
export default FeedbackStats;
