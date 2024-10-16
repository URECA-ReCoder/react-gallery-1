import {
  Wrapper,
  TitleWrapper,
  TitleCreator,
  Screenshot,
  IconWrapper,
  Button,
  DescriptionWrapper,
  DescriptionCreator,
  Description,
} from './index.styles';
import Profile from '@components/common/profile';
import like from '@assets/icons/like.svg';
import send from '@assets/icons/send.svg';


const Mission = (props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Profile img={props.profile} size={28}/>
        <TitleCreator>{props.creator}</TitleCreator>
      </TitleWrapper>
      <Screenshot src={props.screenshot} />
      <IconWrapper>
        <Button>
          <img src={like} alt="like" />
        </Button>
        <Button>
          <img src={send} alt="send" />
        </Button>
      </IconWrapper>
      <DescriptionWrapper>
        <DescriptionCreator>{props.creator}</DescriptionCreator>
        <Description>{props.type}</Description>
      </DescriptionWrapper>
    </Wrapper>
  );
};

export default Mission;
