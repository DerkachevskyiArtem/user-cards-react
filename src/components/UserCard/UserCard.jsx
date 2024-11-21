import React from 'react';
import './UserCard.css';

function UserCard({ id, name, gender }) {
  const cardClass = gender
    ? gender === 'male'
      ? 'user-card male'
      : 'user-card female'
    : 'user-card';

  const heading = React.createElement(
    'h2',
    { className: 'user-card-heading' },
    `Name: ${name}`
  );
  const idParagraph = React.createElement(
    'p',
    { className: 'user-card-id' },
    `Id: ${id}`
  );
  const genderParagraph = React.createElement(
    'p',
    { className: 'user-card-gender' },
    `Gender: ${gender}`
  );

  const article = React.createElement(
    'article',
    { className: cardClass },
    heading,
    idParagraph,
    genderParagraph
  );

  return article;
}

export default UserCard;
