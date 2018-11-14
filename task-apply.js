import Task from 'data.task';

const userId = 9;

const UserProfile = user => friends => (
  <div>

    <h3>User:</h3>
    {
      prop('name')(user)
        .getOrElse('No name')
    }
    <h3>Friends:</h3>
    {
      friends.map(friend => <div>{ prop('name')(friend).getOrElse('') }</div>)
    }

  </div>
)

Task.of(UserProfile)
  .ap(getUser(userId))
  .ap(getUserFriends(userId));
