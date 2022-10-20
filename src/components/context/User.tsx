import { useContext } from 'react';
import { UserContext } from './UserContext';

const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    //update
    userContext.setUser({
      name: 'Mary',
      email: 'Mary@ex.com',
    });
  };

  const handleLogout = () => {
    //update
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>User Email is {userContext.user?.email}</div>
    </div>
  );
};

export default User;
