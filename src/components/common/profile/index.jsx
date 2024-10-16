import { Wrapper, ProfileImg } from './index.styles';

const Profile = (props) => {
  return (
    <Wrapper>
      <ProfileImg
        src={props.img}
        alt="profile"
        width={props.size}
        height={props.size}
      />
    </Wrapper>
  );
};

export default Profile;
