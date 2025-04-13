import React, { useEffect, useState }from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import { Link } from 'react-router-dom';
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(models.userListModel());
  }, []);

  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user._id} className="user">
          <Link to={`/users/${user._id}`}>{user.first_name} {user.last_name}</Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
