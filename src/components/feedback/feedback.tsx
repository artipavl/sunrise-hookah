import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  selectFeedbacks,
  selectFeedbacksLoading,
} from '../../redux/feedback/slice';
import {
  // delFeedback,
  getFeedbacks,
} from '../../redux/feedback/feedbackOperations';
import { Box } from './feedback.style';
import DataTables from '../dataTables/dataTables';

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

      <DataTables
        rows={['email', 'firstName', 'lastName', 'phone', 'message']}
        columns={Feedbacks}
      />
    </Box>
  );
};

export default Feedback;
