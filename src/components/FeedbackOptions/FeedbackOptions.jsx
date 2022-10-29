import PropTypes from "prop-types";
import {ButtonList, ButtonListItem, Button} from "./FeedbackOptions.styled"

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <ButtonList>
      {Object.keys(options).map(button => (
        <ButtonListItem key={button}>
          <Button type="button" onClick={() => onLeaveFeedback(button)}>{button}</Button>
        </ButtonListItem>
      ))}
    </ButtonList>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;