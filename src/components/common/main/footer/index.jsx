import { Wrapper, Icon } from './index.styles';
import home from '@assets/icons/home.png';
import search from '@assets/icons/search.png';
import plus from '@assets/icons/plus.png';
import unlike from '@assets/icons/unlike.svg';
import ProfileImg from '@assets/images/defaultProfile.svg';
import Profile from '@components/common/profile';

const Footer = () => {
  return (
    <Wrapper>
        <Icon src={home} />
        <Icon src={search} />
        <Icon src={plus} />
        <Icon src={unlike} />
        <Profile img={ProfileImg} size={28} />
    </Wrapper>
  );
};

export default Footer;
