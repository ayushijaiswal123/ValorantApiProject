import React, { useContext,useEffect} from 'react';
import APIContext from '../context/APIContext'
import RolesList from '../components/Roles/RolesList';

const Roles = () => {
    const { fetchRoles }  = useContext(APIContext);
   useEffect(()=> {
    fetchRoles();
  },[])
   
  return (
    <div>
      <RolesList />
    </div>
  );
};

export default Roles;