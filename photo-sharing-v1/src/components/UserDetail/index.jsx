import React, { useEffect, useState }  from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {useParams, Link} from "react-router-dom";
import models from '../../modelData/models';

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(models.userModel(userId));
  }, [userId]);

  if (!user) return <div>Đang tải...</div>;

  return (
    <div className="user-detail">
      <h2>{user.first_name} {user.last_name}</h2>
      <p><strong>Job:</strong> {user.occupation}</p>
      <p><strong>Address:</strong> {user.location}</p>
      <p><strong>Description:</strong> {user.description}</p>
      <Link to={`/photos/${user._id}`}>View photo</Link>
    </div>
  );
}

export default UserDetail;
