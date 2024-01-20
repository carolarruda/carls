import AvatarIcon from "../icons/AvatarIcon";
import classes from "./Avatar.module.css";

const Avatar = ({ photo, name }) => {
console.log('avatar', photo);
  return (
    <div className={classes.avatarContainer}>
      {photo ? (
        <img src={photo} alt="profile-pic" className={classes.avatar} />
      ) : (
        <AvatarIcon width={"30px"} height={"30px"} />
      )}
      {name && <h6 className={classes.name}>{name}</h6>}
    </div>
  );
};

export default Avatar;
