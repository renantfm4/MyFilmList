import {useContext} from 'react';
import { Auth } from './Auth';

export function useAuth(){
    const value = useContext(Auth);
    return value;
}
