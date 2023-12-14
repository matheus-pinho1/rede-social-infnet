import React from 'react';
import './FriendSuggestionCard.css';

const FriendSuggestionCard = ({ suggestion }) => {
  return (
    <div className="friend-suggestion-card">
      <img src={suggestion.photo} alt={`Foto de ${suggestion.name}`} className="friend-suggestion-photo" />
      <div className="friend-suggestion-info">
        <h3 className="friend-suggestion-name">{suggestion.name}</h3>
        <p className="friend-suggestion-common-friend">{suggestion.commonFriend}</p>
      </div>
    </div>
  );
};

export default FriendSuggestionCard;
