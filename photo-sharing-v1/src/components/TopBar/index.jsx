import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import models from '../../modelData/models';
import './styles.css';

function TopBar() {
  const location = useLocation();
  const [title, setTitle] = useState('');
  const { userId } = useParams();

  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/users/') && !path.startsWith('/photos/')) {
      const user = models.userModel(path.split('/')[2]);
      setTitle(`User information: ${user.first_name} ${user.last_name}`);
    } else if (path.startsWith('/photos/')) {
      const user = models.userModel(path.split('/')[2]);
      setTitle(`${user.first_name} ${user.last_name}'s image`);
    } else {
      setTitle('');
    }
  }, [location]);

  return (
    <div className="top-bar">
      <div className="top-bar-left">Nguyen Dac Hoang</div>
      <div className="top-bar-right">{`Display - ${title}`}</div>
    </div>
  );
}

export default TopBar;
