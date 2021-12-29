import React,{Suspense, lazy } from "react";
import Loader from './Loader';

const UserList = lazy(()=> import("./Userlist"));

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <UserList />      
    </Suspense>
  )
  
}


