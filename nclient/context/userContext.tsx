"use client"
import { User } from '@ash/shared';
import { createContext } from 'react';
import React from 'react';
export interface IUserContextType {
  user: User| null;
  jwt: string;
  isAuth: boolean;
  setIsAuth?: (isAuth: boolean) => void;
  setUser?: (user: User) => void;
  setJwt?: (jwt: string) => void;
  deleteUserData?: () => void;
}

export const defaultState: IUserContextType = {
  user:  null,
  jwt:  "",
  isAuth:  false,
};
export const IUserContext = createContext<Partial<IUserContextType>>(defaultState);

export const useUserContext = () => {
  return React.useContext(IUserContext);
};
