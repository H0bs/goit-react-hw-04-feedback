import { useState } from "react";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification";
import FeedbackOptions from "./FeedbackOptions";


function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (state) => {
    switch (state) {
      case 'good':
        setGood(state => state + 1);
        return;
      case 'neutral':
        setNeutral(state => state + 1);
        return;
      case 'bad':
        setBad(state => state + 1);
        return;
      default:
        return;
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good / countTotalFeedback()) * 100);
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{good, neutral, bad}}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />) : (
            <Notification message="There is no feedback"/>
        )}
      </Section>
    </>
  )
}

export default App;

// import React, { Component } from "react";
// import Statistics from "./Statistics";
// import Section from "./Section";
// import Notification from "./Notification";
// import FeedbackOptions from "./FeedbackOptions";

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (value) => {
//     this.setState(previousState => ({
//       [value]: previousState[value] + 1,
//     }))
//   }

//   countTotalFeedback() {
//     const totalValues = Object.values(this.state)
//       .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
//     return totalValues;
//   }

//   countPositiveFeedbackPercentage() {
//     return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
//   }

//   render() {
//     const options = Object.keys(this.state);
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     const positivePercentage = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={positivePercentage}
//             />) : (
//               <Notification message="There is no feedback"/>
//           )}
//         </Section>
//       </>
//     )
//   }
// }


