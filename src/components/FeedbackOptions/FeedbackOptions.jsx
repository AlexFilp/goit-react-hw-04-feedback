import { Container, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
  onClickGood,
  onClickNeutral,
  onClickBad,
}) => {
  return (
    <Container>
      <Btn type="button" onClick={onClickGood}>
        Good
      </Btn>
      <Btn type="button" onClick={onClickNeutral}>
        Neutral
      </Btn>
      <Btn type="button" onClick={onClickBad}>
        Bad
      </Btn>
    </Container>
  );
};
