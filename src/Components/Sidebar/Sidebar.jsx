/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { withRouter } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = props => {
  const users = props.users;

  if (!users) return <p>No data</p>;

  return props.users.map(user => (
    <div
      key={user.id}
      className="users__item"
      onClick={() => props.history.push('/users/' + user.id)}
    >
      {user.username}
    </div>
  ));
};

export default withRouter(Sidebar);
