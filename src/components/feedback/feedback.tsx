import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  selectFeedbacks,
  selectFeedbacksLoading,
} from '../../redux/feedback/slice';
import {
  delFeedback,
  getFeedbacks,
} from '../../redux/feedback/feedbackOperations';
import { Box, Item, List } from './feedback.style';
import { AiFillDelete } from 'react-icons/ai';

type FeedbackProps = {};

const Feedback: FC<FeedbackProps> = props => {
  const Feedbacks = useAppSelector(selectFeedbacks);
  const loading = useAppSelector(selectFeedbacksLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFeedbacks());
  }, [dispatch]);

  if (!loading) {
    return (
      <div>
        <h1>I am Feedback</h1>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <Box>
      <h1>I am Feedback</h1>
      <List>
        {Feedbacks.map(feedback => (
          <Item>
            <p>{feedback.email}</p>
            <p>{feedback.firstName}</p>
            <p>{feedback.lastName}</p>
            <p>{feedback.phone}</p>
            <p>{feedback.message}</p>
            <button
              type="button"
              onClick={() => dispatch(delFeedback(feedback.id))}
            >
              <AiFillDelete />
            </button>
          </Item>
        ))}
      </List>
    </Box>
  );
};

export default Feedback;
