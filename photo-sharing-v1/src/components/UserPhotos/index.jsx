import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import models from '../../modelData/models';

import "./styles.css";
import { useParams, Link } from "react-router-dom";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function formatDateTime(datetime) {
  return new Date(datetime).toLocaleString();
}
function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchedPhotos = models.photoOfUserModel(userId);
    setPhotos(fetchedPhotos || []);
    const fetchedUser = models.userModel(userId);
    setUser(fetchedUser);
  }, [userId]);

  if (!photos || !user) return <div>Loading...</div>;

  console.log(photos);

  return (
    <div className="user-photos">
      <h2>{user.first_name} {user.last_name}'s image</h2>
      {photos.length === 0 && <p>Can't find photo</p>}
      {photos.map(photo => (
        <div key={photo._id} className="photo-item">
          <img src={`/images/${photo.file_name}`} alt="Image" width="400" />
          <p className="photo-time"><strong>Time:</strong> {formatDateTime(photo.date_time)}</p>
          <div className="comments">
            {photo.comments && photo.comments.map(comment => (
              <div key={comment._id} className="comment">
                <p >
                  <Link to={`/users/${comment.user._id}`}>
                    {comment.user.first_name} {comment.user.last_name}
                  </Link>: {comment.comment}
                </p>
                <p className="comment-time"><em>{formatDateTime(comment.date_time)}</em></p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserPhotos;
