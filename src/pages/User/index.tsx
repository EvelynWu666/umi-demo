import styles from './index.less';

const UserList = [
    {id: 1, name: 'James' },
    {id: 2, name: 'Toms' },
]

const UserPage: React.FC = () => {
  return (
    UserList.map(user  => (
      <div key={user.id}>
        <span>{user.name}</span>
      </div>
    )))
};

export default UserPage;
