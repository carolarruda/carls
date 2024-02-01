import AvatarIcon from "../icons/AvatarIcon";
import classes from "./Avatar.module.css";

const Avatar = ({ photo, name, small }) => {
  return (
    <div className={classes.avatarContainer}>
      {photo ? (
        <img src={photo} alt="profile-pic" className={classes.avatar} />
      ) : (
        <AvatarIcon width={!small ? "30px" : "13px"} height={!small ? "30px" : "13px"} />
      )}
      {name && <h6 className={classes.name}>{name}</h6>}
    </div>
  );
};

export default Avatar;
