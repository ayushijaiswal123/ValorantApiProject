import React, { useState } from 'react';
import axios from 'axios';

const APIContext = React.createContext();

export const APIProvider = ({ children }) => {

    const [roles,setRoles]= useState([]);
    const [agentCount, setAgentCount] = useState(0);

    const fetchRoles = async () =>{
        const response = await axios.get('http://localhost:3000/roles');
        setRoles(response.data);
    }
    const getHist = async(agentname) =>{
        const response = await axios.get(`http://localhost:3000/agenthist?agent=${agentname}`);
        setAgentCount(response.data.count)
    }
    const contextValue = {
    roles,
    fetchRoles,
    agentCount,
    getHist
  };

    return(
        <APIContext.Provider value={contextValue}>
            {children}
        </APIContext.Provider>
    );

}

export default APIContext;

