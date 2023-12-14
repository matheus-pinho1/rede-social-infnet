import React from 'react';
import './App.css';
import Header from './Header';
import Post from './Post';
import FriendCard from './FriendCard';
import FriendSuggestionCard from './FriendSuggestionCard'; 

export default function App() {

  const postsData = [
    {
      title: 'Novo óculos! 🤓',
      text: 'Já estava na hora de trocar a armação, obrigado Óticas do Povo! #publi',
      publicationDate: '13 de dezembro de 2023',
      author: 'Owen Reece',
      likes: 25,
      shares: 10,
      comments: [
        { id: 1, text: 'Wade Wilson comentou: Muito maneira essa armação nova!' },
        { id: 2, text: 'Ororo Munroe comentou: Lindo!' },
      ],
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Novo visual 💋',
      text: 'De tranças agora, estou me amandou muito mais.',
      publicationDate: '15 de dezembro de 2023',
      author: 'Ororo Munroe',
      likes: 30,
      shares: 15,
      comments: [
        { id: 1, text: 'Jenna Monroe comentou: Minha irmã é linda.' },
      ],
      image: 'https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  const friendsData = [
    {
      name: 'Johnny Dang',
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      commonFriends: 10,
    },
    {
      name: 'Elliot Aviane',
      photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      commonFriends: 5,
    },
  ];

  const suggestionsData = [
    {
      name: 'Carl Banks',
      photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      commonFriend: 'Ororo Munroe é um amigo em comum.',
    },
    {
      name: 'Hellena Hughes',
      photo: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      commonFriend: 'Owen Reece é um amigo em comum.',
    },
    
  ];

  return (
    <div>
      <Header />
      <div className="post-container">
        {postsData.map((postData, index) => (
          <Post key={index} post={postData} />
        ))}
      </div>
      <div className="friend-suggestions-title">
        <h2>Relação de amigos:</h2>
      </div>
      <div className="friends-container">
        {friendsData.map((friend, index) => (
          <FriendCard key={index} friend={friend} />
        ))}
      </div>
      <div className="friend-suggestions-title">
        <h2>Sugestões de Amizade:</h2>
      </div>
      <div className="friend-suggestions-container">
        {suggestionsData.map((suggestion, index) => (
          <FriendSuggestionCard key={index} suggestion={suggestion} />
        ))}
      </div>
    </div>
  );
}
