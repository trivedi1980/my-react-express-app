import React from 'react';
import { Link } from 'react-router-dom';

export const Task = ({task}) => (
    <Link to={`/task/${task.id}`}>
        <div>
            {task.name}
        </div>
    </Link>
);