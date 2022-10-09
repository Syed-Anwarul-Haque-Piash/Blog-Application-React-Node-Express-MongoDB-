import axios from "axios";
import React, { useContext,useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Context } from "../../context/Context";
import "./settings.css";

const Settings = () => {
  const {user}=useContext(Context);
  const[file,setFile]=useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userid: user._id,
      username,
      email,
      password
    };
    if(file){
        const data=new FormData();
        const filename=Date.now()+file.name;
        data.append("name",filename);
        data.append("file",file);
        updatedUser.profilePic=filename;
        try{
            await axios.post("http://localhost:5000/api/upload",data)
        }
        catch(err){}
    }
    try{
        await axios.put("http://localhost:5000/api/users/"+user._id,updatedUser);
       
    }
    catch(err){}
  };
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="">Profile Picture</label>
          <div className="settingPP">
            <img
              src={user.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} onChange={(e)=>setFile(e.target.files[0])} />
          </div>
          <label >Username</label>
          <input type="text" placeholder={user.username}onChange={e=>setUsername(e.target.value)} />
          <label >Email</label>
          <input type="email" placeholder={user.email}onChange={e=>setEmail(e.target.value)} />
          <label >Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)}/>
          <button className="settingsSubmit" type="submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
