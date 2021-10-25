import React from 'react';
import { connect } from 'react-redux';

const TaskDetail = ({ id, comments, task, isComplete }) => (
    <div>
        Task Detail
    </div>
);

export const ConnectedTaskDetail = connect(state=>state)(TaskDetail);