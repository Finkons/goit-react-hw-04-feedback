import PropTypes from 'prop-types';
import { Wrapper, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Wrapper>
    {options.map((option, index) => (
      <Button key={index} type="button" onClick={() => onLeaveFeedback(option)}>
        {option}
      </Button>
    ))}
  </Wrapper>
);
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
