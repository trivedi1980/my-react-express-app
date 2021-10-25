import React from 'react';
import { connect } from 'react-redux';
import { Task } from './Task';
import { requestTaskCreation } from '../store/mutations'

const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id;

    return {
        name: ownProps.name,
        groupId: groupId,
        tasks: state.tasks.filter(task => task.group === groupId)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewTask: (groupId) => {
            console.log('creating new task in ', groupId);
            dispatch(requestTaskCreation(groupId));
        }
    }
};

export const TaskLists = ({name, groupId, tasks, createNewTask}) => (
    <div>
        <h3>
            {name}
        </h3>
   
        <div>
            {tasks.map(task => <Task key={task.id} task={task}/> )}
        </div>
        <button onClick = { () => createNewTask(groupId) }>Add New</button>
    </div>
);

export const ConnectedTaskLists = connect(mapStateToProps, mapDispatchToProps)(TaskLists);