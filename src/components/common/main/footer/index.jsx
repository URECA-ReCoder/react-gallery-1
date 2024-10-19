import { Wrapper, Icon } from './index.styles';
import home from '@assets/icons/home.svg';
import activeHome from '@assets/icons/activeHome.svg';
import search from '@assets/icons/search.svg';
import activeSearch from '@assets/icons/activeSearch.svg';
import plus from '@assets/icons/plus.svg';
import unlike from '@assets/icons/unlike.svg';
import ProfileImg from '@assets/images/defaultProfile.svg';
import Profile from '@components/common/profile';
import { useNavigate } from 'react-router-dom';
import { usePageStore } from '@src/store/page';
import useAuth from '@src/hooks/useAuth';

const Footer = () => {
  const navigate = useNavigate();
  const { currentPage, setCurrentPage } = usePageStore();
  const { user, token, isAuthenticated } = useAuth();

  const handleButtonClick = (page) => {
    setCurrentPage(page);
    navigate(page);
  }



  return (
    <Wrapper>
      <button onClick={() => handleButtonClick('/main')}>
        <Icon src={currentPage === '/main' ? activeHome : home} />
      </button>
      <button onClick={() => handleButtonClick('/search')}>
        <Icon src={currentPage === '/search' ? activeSearch : search} />
      </button>
      <button>
        <Icon src={plus} />
      </button>
      <button>
        <Icon src={unlike} />
      </button>
      <button>
        <Profile img={ProfileImg} size={28} />
      </button>
    </Wrapper>
  );
};

export default Footer;
