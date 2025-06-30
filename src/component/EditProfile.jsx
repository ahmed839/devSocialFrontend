import { useState } from "react";
import UserCard from "./userCard";
import UserCardShimmer from "./UserCardShimmer";
import { saveProfileThunk } from "../thunks/saveProfile";
import { useDispatch } from "react-redux";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [skills, setSkills] = useState(user.skills);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  const saveProfile = () => {
    const updtaData = {
      firstName,
      lastName,
      age,
      gender,
      about,
      skills,
      photoUrl,
    };
    dispatch(saveProfileThunk(updtaData));
    setToast(true);
    setTimeout(() => setToast(false), 1000);
  };
  if (!user || user.length == 0) return <UserCardShimmer />;
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="card w-96 bg-primary text-primary-content my-14 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-center w-full">Edit Profile</h2>

            {/* First Name */}
            <label className="form-control w-full max-w-xs mx-auto my-2">
              <div className="label">
                <span className="label-text text-primary-content">
                  First Name
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs text-black"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>

            {/* Last Name */}
            <label className="form-control w-full max-w-xs mx-auto my-2">
              <div className="label">
                <span className="label-text text-primary-content">
                  Last Name
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs text-black"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>

            {/* Age */}
            <label className="form-control w-full max-w-xs mx-auto my-2">
              <div className="label">
                <span className="label-text text-primary-content">Age</span>
              </div>
              <input
                type="number"
                className="input input-bordered w-full max-w-xs text-black"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>

            {/* Gender */}
            <label className="form-control w-full max-w-xs mx-auto my-2">
              <div className="label">
                <span className="label-text text-primary-content">Gender</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs text-black"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>

            {/* About */}
            <label className="form-control w-full max-w-xs mx-auto my-2">
              <div className="label">
                <span className="label-text text-primary-content">About</span>
              </div>
              <textarea
                className="textarea textarea-bordered w-full max-w-xs text-black"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </label>

            {/* Skills */}
            <label className="form-control w-full max-w-xs mx-auto my-2">
              <div className="label">
                <span className="label-text text-primary-content">Skills</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs text-black"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </label>

            {/* Photo URL */}
            <label className="form-control w-full max-w-xs mx-auto my-2">
              <div className="label">
                <span className="label-text text-primary-content">
                  Photo URL
                </span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs text-black"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>

            <div className="card-actions justify-center mt-4">
              <button className="btn btn-white" onClick={saveProfile}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        <UserCard
          user={{
            photoUrl,
            firstName,
            lastName,
            about,
            skills,
            age,
            gender,
          }}
        />
      </div>
      {toast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>profile change successfully.</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
