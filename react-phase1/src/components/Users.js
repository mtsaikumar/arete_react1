

import { useState, useEffect} from "react";
import axios from 'axios';


export default function Users() {

    const [gitUsers, setGitUsers] = useState([]);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://api.github.com/users')
            .then(response => {
            console.log(response);
            setGitUsers(response.data);
            })

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        
        <div >
           
          <h3> Git hub users:</h3>
          <div style={{"display": "flex", "flexWrap":"wrap"}}>
            {
              gitUsers.length > 0 && gitUsers.map( (user, index, arr) => {
                  return <div style={{"margin": "16px"}} >
                    <h4 key={index}>{user.login}</h4>
                    <img src={user.avatar_url} width={200} />
                  </div>
              })
            }
          </div>
    
        </div>
      );

}