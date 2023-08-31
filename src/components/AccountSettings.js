import Nav from "./Nav";
import FooterTwo from "./FooterTwo";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteAccount from './DeleteAccount'

const AccountSettings = () => {
  const username = localStorage.getItem("username");
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [user, setuser] = useState("");

  useEffect(() => {
    const opts = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(`http://localhost:4000/users/${userId}`, opts)
      .then((res) => res.json())
      .then((data) => {
        setuser(data.data.user);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [userId, token]);

  return (
    <div>
      <Nav />
      <div className="settings-grid">
        <section className="left-options-settings">
          <button className="course-type settings">My Profile</button>
          <button className="course-type settings">Preferences</button>
          <button className="course-type settings">Notifications</button>
          <div className="empty"></div>

          <DeleteAccount/>
        </section>
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
              <Tooltip title="Avatar">
                <IconButton size="small" sx={{ ml: 2 }} aria-haspopup="true">
                  <Avatar
                    sx={{
                      width: 82,
                      height: 82,
                      backgroundColor: "#eeeeee",
                      color: "#161a21",
                    }}
                  >
                    {username[0]}
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <div className="fullname">
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
      </div>

      <FooterTwo />
    </div>
  );
};

export default AccountSettings;
