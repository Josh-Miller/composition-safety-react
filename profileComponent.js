import React from 'react';
import Maybe from 'data.maybe';

const prop = property => obj =>
  obj && property in obj
    ? Maybe.of(obj[property])
    : Maybe.Nothing();

const user = {
  name: 'Fernando Torres',
  username: 'torres',
};

const Profile = () => (
  <div>
    <div>
      <label>Name</label>
      {
        prop('name')(user)
          .map(name => `Hello ${name}`)
          .getOrElse('No name found')
      }
    </div>
    <div>
      <label>Age:</label>
      {
        prop('age')(user)
          .getOrElse('No age found')
      }
    </div>
    <div>
      <label>Username:</label>
      {
        prop('username')(user)
          .getOrElse('No username found')
      }
    </div>
  </div>
);

export default Profile;
