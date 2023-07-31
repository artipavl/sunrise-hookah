import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  selectFeedbacks,
  selectFeedbacksLoading,
} from '../../redux/feedback/slice';
import { getFeedbacks } from '../../redux/feedback/feedbackOperations';
import { Box, Title } from './feedback.style';
import FeedbackDataTable from '../feedbackDataTable/feedbackDataTable';

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
        <Title>Зворотній зв'язок</Title>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <Box>
      <Title>Зворотній зв'язок</Title>

      <FeedbackDataTable data={Feedbacks} />
    </Box>
  );
};

export default Feedback;
