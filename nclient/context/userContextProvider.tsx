"use client"
import { User } from '@ash/shared';
import React, { useEffect, useState } from 'react';
import { IUserContext,defaultState } from './userContext';

interface IProps {
  children: React.ReactNode;
}

const UserContextProvider = ({ children }: IProps) => {
  const [user, setUser] = useState(defaultState.user);
  const [jwt, setJwt] = useState(defaultState.jwt);
  const [isAuth, setIsAuth] = useState(defaultState.isAuth);
  useEffect(() => {
    setUser(window.localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") as string) : null as User | null);
    setJwt(window.localStorage.getItem("jwt") ? localStorage.getItem("jwt") as string : "" as string | "");
    setIsAuth(window.localStorage.getItem("user") ? true : false as boolean);
  }, [])
 
  const deleteUserData = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("jwt");
      window.localStorage.removeItem("isAuth");
     }
  }
   return (
    <IUserContext.Provider
      value={{ user, setUser ,setIsAuth , isAuth, setJwt, jwt,  deleteUserData}}>
      {children}
    </IUserContext.Provider>
  );
};

export default UserContextProvider;