import { Login } from './Login';
import { ProfileProps } from './Profile'; //update

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>; //update
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="mary" />;
  }
  return <Login />;
};
