import React from 'react';
import './Post.css';

const Post = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        {post.image && <img src={post.image} alt="Imagem da Postagem" className="post-image" />}
        <p className="post-text">{post.text}</p>
        <div className="post-details">
          <p className="post-date">Publicado em: {post.publicationDate}</p>
          <p className="post-author">Autor: {post.author}</p>
          <p className="post-likes">Curtidas: {post.likes}</p>
          <p className="post-shares">Compartilhamentos: {post.shares}</p>
        </div>
        <div className="post-comments">
          <h3>Comentários:</h3>
          <ul>
            {post.comments.map(comment => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Post;
