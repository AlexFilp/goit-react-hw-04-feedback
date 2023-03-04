import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { GlobalStyle } from './GlobalStyles';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodInc = () => {
    setGood(prevState => prevState + 1);
  };

  const neutralInc = () => {
    setNeutral(prevState => prevState + 1);
  };

  const badInc = () => {
    setBad(prevState => prevState + 1);
  };

  const countPositiveFeedbackPercentage = (total, good) => {
    if (total > 0 && good === 0) {
      return 0;
    } else {
      return Math.round((good / total) * 100);
    }
  };
  const total = good + neutral + bad;

  const percentage = countPositiveFeedbackPercentage(total, good);

  return (
    <div
      style={{
        padding: 30,
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Section title="Please leave a feedback">
        <FeedbackOptions
          onClickGood={goodInc}
          onClickNeutral={neutralInc}
          onClickBad={badInc}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={percentage}
        />
      </Section>
      <GlobalStyle />
    </div>
  );
};

// export class OldApp extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleInc = status => {
//     this.setState(prevState => ({
//       [status]: prevState[status] + 1,
//     }));
//   };

//   countTotalFeedback = (good, neutral, bad) => {
//     return good + neutral + bad;
//   };

// countPositiveFeedbackPercentage = (total, good) => {
//   if (total > 0 && good === 0) {
//     return 0;
//   } else {
//     return Math.round((good / total) * 100);
//   }
// };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback(good, neutral, bad);
//     const percentage = this.countPositiveFeedbackPercentage(total, good);
//     return (
//       <div
// style={{
//   padding: 30,
//   fontSize: 20,
//   color: '#010101',
// }}
//       >
//         <Section title="Please leave a feedback">
//           <FeedbackOptions onClick={this.handleInc} />
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             total={total}
//             positivePercentage={percentage}
//           />
//         </Section>
//         <GlobalStyle />
//       </div>
//     );
//   }
// }
