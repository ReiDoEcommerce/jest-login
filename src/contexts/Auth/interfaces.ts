 interface SignInData  {
    email: string;
    password: string;
  };
  
 interface User {
    birthday: string;
    email: string;
    gender: string;
    name: string;
    surname: string;
    phone: string;
  }
  
  interface LoginResponse extends User {
    token: string;
  }
  
  interface AuthContextType {
    user: User | null;
    signIn(data: SignInData): Promise<void>;
    signOut(location: string): void;
  };


  export type { AuthContextType, LoginResponse, User, SignInData }