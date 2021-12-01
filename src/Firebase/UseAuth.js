import { useContext } from 'react';
import { AuthProvider } from './AuthContext';

const UseAuth = () => {
    return useContext(AuthProvider);
};

export default UseAuth;