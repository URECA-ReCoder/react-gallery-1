import {
  Wrapper,
  TitleWrapper,
  TitleCreator,
  Screenshot,
  IconWrapper,
  LikeWrapper,
  Button,
  CountText,
  DescriptionWrapper,
  DescriptionCreator,
  Description,
} from './index.styles';
import Profile from '@components/common/profile';
import like from '@assets/icons/like.svg';
import unlike from '@assets/icons/unlike.svg';
import send from '@assets/icons/send.svg';
import { forwardRef } from 'react';
import { useToggleLikePost } from '@src/api/LikeAPI';
import { useEffect, useState } from 'react';
import useAuth from '@src/hooks/useAuth';

const Mission = forwardRef((props, ref) => {
  const { user, token, isAuthenticated } = useAuth();

  //로컬 상태 관리
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(props.likesCount || 0);

   // 처음 렌더링 시 props에서 받은 값을 로컬 상태에 설정
   useEffect(() => {
    if (user) {
      const userHasLiked = props.likes.some((like) => like.userId === user?.id);
      setIsLiked(userHasLiked);
    }
    setLikesCount(props.likesCount);
  }, [props.likes, props.likesCount, user]);

  const toggleLikeMutation = useToggleLikePost();

  const handleLikeButtonClick = () => {
    if (!token) {
      alert('좋아요는 로그인 시 이용할 수 있습니다.');
      return;
    }
    
    // API 요청 실행
    toggleLikeMutation.mutate({
      missionId: props.id,
      token: token,
    }, {
      onSuccess: (data) => {
        if (isLiked) {
          setIsLiked(false);
          setLikesCount((prev) => prev - 1);
        } else {
          setIsLiked(true);
          setLikesCount((prev) => prev + 1);
        }
      },
      onError: (error) => {
        console.error(error);
        alert('좋아요에 실패했습니다.');
      },
    });
  };

  return (
    <Wrapper ref={ref}>
      <TitleWrapper>
        <Profile img={props.profile} size={28}/>
        <TitleCreator>{props.creator}</TitleCreator>
      </TitleWrapper>
      <Screenshot src={props.screenshot} />
      <IconWrapper>
        <LikeWrapper>
        <Button onClick={handleLikeButtonClick}>
          <img src={isLiked ? like : unlike} alt="like" />
        </Button>
        <CountText>{likesCount}</CountText>
        </LikeWrapper>
        <Button onClick={() => window.open(props.url, '_blank')}>
          <img src={send} alt="send" />
        </Button>
      </IconWrapper>
      <DescriptionWrapper>
        <DescriptionCreator>{props.creator}</DescriptionCreator>
        <Description>{props.type}</Description>
      </DescriptionWrapper>
    </Wrapper>
  );
});

export default Mission;
