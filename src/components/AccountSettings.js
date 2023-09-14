import Nav from "./Nav";
import FooterTwo from "./FooterTwo";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteAccount from "./DeleteAccount";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const AccountSettings = ({ search, setSearch }) => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const [user, setUser] = useState('');

  const [image, setImage] = useState("");

  const navigate = useNavigate();


  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const opts = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`http://localhost:4000/users/avatar/${userId}`, opts)
      .then((res) => res.json())
      .then((data) => {
        setImage(data.data.avatar);
        setUser(data.data);
        console.log(data.data.avatar);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [token, userId]);

  const handleImageUpload = async (files) => {
    const image = files[0];

    if (image) {
      const formData = new FormData();
      formData.append("image", image);

      if (image) {
        const formData = new FormData();
        formData.append("upload", image);

        try {
          const response = await fetch(
            `http://localhost:4000/users/${user.id}/upload`,
            {
              method: "POST",
              body: formData,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            console.log("Image uploaded successfully");
            navigate(0);

            console.log("Image URL:", image);
          } else {
            console.error("Image upload failed");
          }
        } catch (error) {
          console.error("Error uploading image:", error.message);
        }
      }
    }
  };

  return (
    <div>
      <Nav search={search} setSearch={setSearch} />
      <div className="settings-grid">
        <section className="left-options-settings">
          <button className="course-type settings">My Profile</button>
          <button className="course-type settings">Preferences</button>
          <button className="course-type settings">Notifications</button>
          <div className="empty"></div>

          <DeleteAccount />
        </section>
        {user.length !== 0 && (
          <section className="right-settings">
            <h2 className="option-setting-header">My Profile</h2>
            <div className="pic-and-name">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <label htmlFor="image-upload">
                  <Avatar
                    sx={{
                      width: 82,
                      height: 82,
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundColor: "#eeeeee",
                      color: "#161a21",
                    }}
                  >
                    <CloudUploadIcon
                      sx={{
                        width: 25,
                        height: 25,
                        backgroundColor: "transparent",
                        color: "#161a21",
                        marginTop: "40px",
                        marginLeft: "40px",
                      }}
                    />
                  </Avatar>
                </label>
                <input
                  type="file"
                  id="image-upload"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageUpload(e.target.files)}
                />
              </Box>
              <div className="fullname">
                <h2>
                  {user.profile.firstName} {user.profile.lastName}
                </h2>
                <button className="course-type settings edit">
                  Edit{" "}
                  <EditIcon
                    sx={{
                      width: 25,
                      height: 15,
                      alignSelf: "center",
                    }}
                  />
                </button>
              </div>
            </div>
            <div className="personal-info">
              <div className="personal-edit">
                <h3>Personal Information</h3>
                <button className="course-type settings edit">
                  Edit{" "}
                  <EditIcon
                    sx={{
                      width: 25,
                      height: 15,
                      alignSelf: "center",
                    }}
                  />
                </button>
              </div>

              <div className="personal-details">
                <div className="pd-card">
                  <h4 className="detail-topic">First Name</h4>
                  <h4 className="detail-user">{user.profile.firstName}</h4>
                </div>
                <div className="pd-card">
                  <h4 className="detail-topic">Last Name</h4>
                  <h4 className="detail-user">{user.profile.lastName}</h4>
                </div>
                <div className="pd-card">
                  <h4 className="detail-topic">Email Address</h4>
                  <h4 className="detail-user">{user.email}</h4>
                </div>
                <div className="pd-card">
                  <h4 className="detail-topic">Phone</h4>
                  <h4 className="detail-user">{user.profile.phone}</h4>
                </div>
                <div className="pd-card">
                  <h4 className="detail-topic">Bio</h4>
                  <h4 className="detail-user">{user.profile.bio}</h4>
                </div>
                <div className="pd-card">
                  <h4 className="detail-topic">Role</h4>
                  <h4 className="detail-user">{user.role}</h4>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <FooterTwo />
    </div>
  );
};

export default AccountSettings;
