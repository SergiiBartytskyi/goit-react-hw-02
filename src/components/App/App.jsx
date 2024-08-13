import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

import css from "./App.module.css";

function App() {
  const [count, setCount] = useState(() => {
    const savedCount = window.localStorage.getItem("count");
    if (savedCount !== null) {
      return JSON.parse(savedCount);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  const updateFeedback = (feedbackType) => {
    setCount({ ...count, [feedbackType]: count[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  const totalFeedback = count.good + count.neutral + count.bad;

  const positiveFeedback = Math.round(
    ((count.good + count.neutral) / totalFeedback) * 100
  );

  return (
    <div className={css.container}>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 && (
        <Feedback
          value={count}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
      {!totalFeedback && <Notification />}
    </div>
  );
}

export default App;
