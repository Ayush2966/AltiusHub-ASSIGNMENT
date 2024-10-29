import { User } from '../../types';


 export type AuthFormProps ={
    setIsLoggedIn :(value: boolean)=> void;
    setCurrentuser :(user: User | null) => void;
    isRegister:boolean;
    setActiveView :(view:'login' | 'register')=> void;
 };