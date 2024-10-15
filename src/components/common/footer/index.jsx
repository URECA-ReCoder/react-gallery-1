import { Wrapper, IconWrapper, Icon } from './index.styles';
import home from '@assets/icons/home.png';
import search from '@assets/icons/search.png';
import plus from '@assets/icons/plus.png';
import heart from '@assets/icons/like.png';

const footer = () => {
  return (
    <Wrapper>
        <Icon src={home} />
        <Icon src={search} />
        <Icon src={plus} />
        <Icon src={heart} />
    </Wrapper>
  );
};

export default footer;
