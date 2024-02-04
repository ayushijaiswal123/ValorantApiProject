import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import APIContext from '../../context/APIContext';
import axios from 'axios';
import rolestyles from './Role.module.css'

const styles = {
  greyedImage: {
    filter: 'grayscale(100%)', // Applies a grey color filter to the image
  },
};

const RoleItem = ({ obj,idx })=> {
    const [count, setCount] = useState();
    const [showNewButton, setShowNewButton] = useState(false);
    const imageStyle = count >= 3 ? styles.greyedImage : {};

    useEffect(()=>{
       getHist({ agentName: obj.displayName });

    }, [])

      const getHist = async ({ agentName }) => {
        try {
          const res = await axios.get(`http://localhost:3000/agenthist?agent=${agentName}`);
          console.log(`Response for agent ${agentName}:`, res.data);
          const count = parseInt(res.data, 10);
          setCount(count)
        } catch (error) {
          console.error(`Error for agent ${agentName}:`, error);
          return 0;
        }
       };

       const onClickBtn = async ({ agentName }) => {
           if( count >= 3) return;
            try {
              const response = await fetch(`http://localhost:3000/agent/${agentName}`, {
                method: 'POST',
              });

              if (!response.ok) {
                throw new Error(`Failed to update agent: ${response.statusText}`);
              }
              else{
                  if (count <= 3) {
                  setShowNewButton(true);
    }
              }
            } catch (error) {
              console.error('Error updating agent:', error.message);
              // Handle error if needed
            }
        };

        const onClickHandler = () => {
          onClickBtn({ agentName: obj.displayName });
        };



           return (
               <div>
                  <button className={rolestyles.rolesbutton} onClick={onClickHandler} key={obj.displayName}>
                    <div>{obj.displayName}</div>
                    <img style={imageStyle} src={obj.displayIcon} alt={obj.displayName} />
                  </button>

                  {showNewButton && (
                    <button className={rolestyles.newButton}>
                      GAME STARTED
                    </button>
                  )}
                </div>
        );

}

export const Role = () => {
  const { roles, fetchRoles } = React.useContext(APIContext);
  const { role } = useParams();

  useEffect(() => {
    fetchRoles();
  }, []);

  


  return <div>{ roles[`${role}`]?.map((obj,idx) => {
        
      
        return <RoleItem obj={obj} key={idx} />

     
      })}</div>;
};
