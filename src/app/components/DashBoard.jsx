import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskLists } from './TaskList';

const mapStateToProps = (state) => {
    return {
        groups: state.groups
    }
};

export const DashBoard = ({groups}) => (
    <div>
        <h2>DashBoard</h2>
        {groups.map(group => (
            <ConnectedTaskLists id={group.id} name={group.name} />
        ))}
    </div>
);

export const ConnectedDashboard = connect(mapStateToProps)(DashBoard);
