import React from 'react';
import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';
import './FriendCard.css';

const FriendCard = ({ friend }) => {
  return (
    <Card className="friend-card">
      <CardHeader
        avatar={
          <Avatar src={friend.photo} alt={`Foto de ${friend.name}`} />
        }
        title={friend.name}
        subheader={`Amigos em comum: ${friend.commonFriends}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          Rio de Janeiro, RJ.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FriendCard;
