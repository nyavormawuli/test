import React, { createContext, useContext, useState } from 'react';
import { getDocs, query, where } from 'firebase/firestore';
import { UserRef } from './firebase';

const UserContext = createContext(null);

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (email) => {
    setLoading(true);
    try {
      const q = query(UserRef, where('email', '==', email));
      const snapshot = await getDocs(q);
      if (!snapshot.empty) {
        const user = snapshot.docs[0].data();
        console.log(user);
        setCurrentUser(user);
      } else {
        console.log('No user found with the provided email.');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, fetchUserData, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
