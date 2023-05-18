import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notific from './Notific/Notific';
import css from './App.module.css';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }

    const countTotalFeedback = () => {
      return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
      return Math.round((good / countTotalFeedback()) * 100);
    };

    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notific message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  };
}
