import {React, useState, useEffect} from 'react';
import axios from 'axios';


const AuthenticationForm = () => {
    const [isAdded, setIsAdded] = useState(false);
    const [token, setToken] = useState("");
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        age: ""
      });
    useEffect(() => {
        console.log(isAdded)
    },[isAdded]);  
    const saveNewUser = async(event) => {
        event.preventDefault();
            const token = await (await axios.post("http://localhost:8080/users", user)).config
            .then(({ data, token }) => {
                if(token) {
                    setToken(token);
                    setIsAdded(true);
                    console.log("registerd");
                    return token;
                }
                
           
                //window.localStorage.setItem("token", data.token);
               
              })
              .catch((error) => {
                  printError();
                console.log(error.response.data);
                console.log("Error");
              });
            }

    const printError = () => {
            return (<div>Invalid data</div>)
    }
    const printSuccesse = () => {
        setUser({
            name: "",
            email: "",
            password: "",
            age: ""
          })
        return (<div>Added successfuly</div>)
    }
    return (
        <div>
            <h1>Hello from route</h1>
            <form action="" onSubmit={saveNewUser}>

                <label htmlFor="">Name</label>
                <input type="text" id="" onChange={(e)=>setUser({...user, name: e.target.value})}/>

                <label htmlFor="">Email</label>
                <input type="text" id="" onChange={(e)=>setUser({...user, email: e.target.value})}/>

                <label htmlFor="">Age</label>
                <input type="text" id="" onChange={(e)=>setUser({...user, age: e.target.value})}/>

                <label htmlFor="">Password</label>
                <input type="text" id="" onChange={(e)=>setUser({...user, password: e.target.value})}/>

                <input type="submit" value="Create new user" />
            </form>
            
            {isAdded && printSuccesse()}
        </div>
    )
}
export default AuthenticationForm;