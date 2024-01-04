/* eslint-disable no-unused-vars */
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import EditIcon from "@mui/icons-material/Edit";
import DeleteAccount from "../DeleteAccount";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import classes from "./Settings.module.css";
import { LoggedInUser, User } from "../../App";
import { useContext } from "react";

const AccountSettings = ({ search, setSearch }) => {
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");


  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const [user, setUser]= useContext(User)
  const [loggedIn, setLoggedIn]= useContext(LoggedInUser)

  useEffect(() => {
    
        setImage(user.avatar);


  }, []);

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
            `https://node-mysql-api-0zxf.onrender.com/users/${user.id}/upload`,
            {
              method: "POST",
              body: formData,
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.ok) {
            navigate(0);
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
      <div className={`${classes.settingsGrid} section-wrapper-settings`}>
        <section className={classes.leftOptionsSettings}>
          <button className={`${classes.settingsButtons} ${classes.settings}`}>
            My Profile
          </button>
          <button className={`${classes.settingsButtons} ${classes.settings}`}>
            Preferences
          </button>

          <DeleteAccount
            className={`${classes.settingsButtons} ${classes.settings}`}
          />
        </section>
        {user.length !== 0 && (
          <section className={classes.rightSettings}>
            <h2 className={classes.optionHeader}>My Profile</h2>
            <div className={classes.PicName}>
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
              <div className={classes.fullname}>
                <h2>
                  {user.firstName} {user.lastName}
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
            <div className={classes.fullname} style={{marginLeft: '0px'}}>
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
                  <h4 className="detail-user">{user.firstName}</h4>
                </div>
                <div className="pd-card">
                  <h4 className="detail-topic">Last Name</h4>
                  <h4 className="detail-user">{user.lastName}</h4>
                </div>
                <div className="pd-card">
                  <h4 className="detail-topic">Email Address</h4>
                  <h4 className="detail-user">{user.email}</h4>
                </div>
                <div className="pd-card">
                  <h4 className="detail-topic">Phone</h4>
                  <h4 className="detail-user">{user.phone}</h4>
                </div>
                <div className="pd-card">
                  <h4 className="detail-topic">Bio</h4>
                  <h4 className="detail-user">{user.bio}</h4>
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
    </div>
  );
};

export default AccountSettings;
