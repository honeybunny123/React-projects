import React,{Suspense } from "react";
import Loader from './Loader';

const UserList = React.lazy(()=> import("./Userlist"));

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <UserList />      
    </Suspense>
  )
  
}


