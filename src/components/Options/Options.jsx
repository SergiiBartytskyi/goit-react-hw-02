import css from "./Options.module.css";

export default function Options({
  totalFeedback,
  updateFeedback,
  resetFeedback,
}) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button className={css.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
