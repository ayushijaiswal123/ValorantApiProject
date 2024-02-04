import React,{ useContext } from 'react'
import { Link } from 'react-router-dom';
import APIContext from '../../context/APIContext'
import RoleItem from './RoleItem'
import styles from './RoleItem.module.css'

const RoleList = () => {
  const { roles } = useContext(APIContext);
  
  return (
         <div>
      {Object.keys(roles).map((role, idx) => (
        <div className={styles.roleItemheading} key={idx}>
          <Link to={`/roles/${role}`}>
            {role}
          </Link>
        </div>
      ))}
    </div>
  );

};

export default RoleList;