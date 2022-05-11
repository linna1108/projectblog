import "./settings.css";
import Footer from "../../components/footer/Footer";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import Topbar from "../../components/topbar/Topbar";
import { fontSize } from "@mui/system";

export default function Settings() {
  const [file, setFile] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleUpdate = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      password,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    const config = {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    };

    try {
      const res = await axios.put("/users/" + user._id, updatedUser, config);
      window.location.replace("/");
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <>
      <Topbar />
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsbox">
            <div className="settingsTitle">
              <span className="settingsUpdateTitle">UPDATE PROFILE</span>
            </div>
            <form className="settingsForm">
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img
                  src={file ? URL.createObjectURL(file) : PF + user.profilePic}
                  alt=""
                />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div>
                <label className="lblUser">Username</label>
                <input
                  className="inputUser"
                  type="text"
                  placeholder={user.username}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <label>Change Password </label>
              <div className="changePW">
                <label className="currentPW">Current Password:</label>
                <input
                  className="inputCurrentPW"
                  type="password"
                  value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="changeNewPW">
                <label className="currentPW">New Password:</label>
                <input
                  className="inputNewPW"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className="notePW">(*Please enter password of 6 or more characters*)</p>
              <div className="changePW">
                <label className="currentPW">Confirm Password:</label>
                <input
                  className="confirmPW"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="settingsSubmit" onClick={handleUpdate}>
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
