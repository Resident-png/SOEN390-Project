import React, { useState } from "react";
import "../css/EditUserProfile.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from '@mui/material/Button' 

const EditUserProfile = () => {
  const [languages, setLanguages] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [workExp, setWorkExp] = useState([]);
  const [volunteering, setVolunteering] = useState([]);
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);

  const [userData, setUserData] = useState({
    email: "",
    bio: "",
    headLine: "",
    languages: "",
    education: [],
    skills: [],
    workExp: [],
    volunteering: []
  });

  const navigate = useNavigate();

  const submitEditProfile = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("coverLetter", coverLetter);
    axios
      .patch("http://localhost:9000/users/profile/63ec368ad3117dd2175dbd62", {
        bio: userData.bio,
        headLine: userData.headLine,
        languages: userData.languages,
        email: userData.email,
        education: userData.education,
        skills: userData.skills,
        workExp: userData.workExp,
        volunteering: userData.volunteering
      })
      .then(response => {
        console.log(response.data);
        axios.post(`http://localhost:9000/resume/uploadResume/63ec368ad3117dd2175dbd62`, formData).then(res => console.log(res)).catch(error => console.log(error));
        axios.post(`http://localhost:9000/resume/uploadCoverLetter/63ec368ad3117dd2175dbd62`, formData).then(res => console.log(res)).catch(error => console.log(error));
        navigate("/UserProfile");
      })
      .catch(error => {
        console.log(error);
        alert("Error editing user profile");
      });
  };

  const languagesChange = () => {
    setUserData({ ...userData, languages: [...userData.languages, languages] });
    setLanguages("");
  };

  const educationChange = () => {
    setUserData({ ...userData, education: [...userData.education, education] });
    setEducation("");
  };

  const skillsChange = () => {
    setUserData({ ...userData, skills: [...userData.skills, skills] });
    setSkills("");
  };

  const workExpChange = () => {
    setUserData({ ...userData, workExp: [...userData.workExp, workExp] });
    setWorkExp("");
  };

  const volunteeringChange = () => {
    setUserData({ ...userData, volunteering: [...userData.volunteering, volunteering] });
    setVolunteering("");
  };
  const handleResumeChange = e => {
    setResume(e.target.files[0]);
  };

  const handleCoverLetterChange = e => {
    setCoverLetter(e.target.files[0]);
  };

  return (
    <div className="EditUserProfileContainer">
      
      <form className="userProfileForm" onSubmit={submitEditProfile}>
      <h1 className="edit-profile-title">Edit your profile</h1>
        <div className="EditUserForm-Container">
          <div className="edit-left-side">
          {/* <label>
            Email
            <input type="email" value={userData.email} onChange={e => setUserData({ ...userData, email: e.target.value })} />
          </label> */}
          <TextField id="editField" label="Email" variant="outlined" onChange={e => setUserData({ ...userData, email: e.target.value })} />
          <br />
          {/* <label>
            Bio
            <textarea rows="3" value={userData.bio} onChange={e => setUserData({ ...userData, bio: e.target.value })} />
          </label> */}
          <TextField id="editField" label="Bio" variant="outlined" onChange={e => setUserData({ ...userData, bio: e.target.value })}/>
          <br />
          <div className="button-field">

          {/* <label>
            Work Experience
            <input type="text" value={workExp} onChange={e => setWorkExp(e.target.value)} />
          </label> */}
          <TextField id="editField" value = {workExp} label="Work Experience" variant="outlined" onChange={e => setWorkExp(e.target.value)}/>
          <div className="list-button">
            <button type="button" onClick={educationChange}>
              Add
            </button>
          </div>
          </div>
          <br />
          <div className="button-field">
          {/* <label>
            Education
            <input type="text" value={education} onChange={e => setEducation(e.target.value)} />
          </label> */}
            <TextField id="editField" value={education} label="Education" variant="outlined" onChange={e => setEducation(e.target.value)}/>
            <div className="list-button">
              <button type="button" onClick={educationChange}>
                Add
              </button>
            </div>
          </div>
          <br />
          </div>
          <div className="edit-right-side">
            <div className="button-field">

            {/* <label>
              Skills
              <input type="text" value={skills} onChange={e => setSkills(e.target.value)} />
            </label> */}
              <TextField id="editField" value={skills} label="Skills" variant="outlined" onChange={e => setSkills(e.target.value)} />
              <div className="list-button">
                <button type="button" onClick={skillsChange}>
                  Add
                </button>
              </div>
            </div>
            <br />
            <div className="button-field">

            {/* <label>
              Languages
              <input type="text" value={languages} onChange={e => setLanguages(e.target.value)} />
            </label> */}
            <TextField id="editField" value={languages} label="Languages" variant="outlined" onChange={e => setLanguages(e.target.value)}/>
            <div className="list-button">
              <button type="button" onClick={languagesChange}>
                Add
              </button>
            </div>
            </div>
            <br />
            <div className="button-field">

            {/* <label>
              Volunteering
              <textarea rows="3" value={volunteering} onChange={e => setVolunteering(e.target.value)} />
            </label> */}
            <TextField id="editField" value={volunteering} label="Volunteering" variant="outlined" onChange={e => setVolunteering(e.target.value)}/>
            <div className="list-button">
              <button type="button" onClick={volunteeringChange}>
                Add
              </button>
            </div>
            </div>
            <br />
            {/* <label>
              Resume
              <input type="file" accept=".pdf" onChange={handleResumeChange} />
            </label> */}
            <div className="editFile">
              <Button variant="contained" component="label" style={{width: "45%"}}> Upload Resume<input hidden accept="image/*" multiple type="file" onChange={handleResumeChange}/></Button>
              <br />
              {/* <label>
                Cover Letter
                <input type="file" accept=".pdf" onChange={handleCoverLetterChange} />
              </label> */}
              {/* <TextField id="editField" type ="file" variant="outlined" /> */}
              <Button variant="contained" component="label" style={{width: "45%"}}> Upload Cover Letter<input hidden accept="image/*" multiple type="file" onChange={handleCoverLetterChange}/></Button>
            </div>

            </div>      
          </div>
          <div className="submit-button">
            <button type="submit">Save changes</button>
          </div>
      </form>
    </div>
  );
};

export default EditUserProfile;