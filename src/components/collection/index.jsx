import { Wrapper } from './index.styles';
import Mission from '@components/collection/mission';
import testImg from '@assets/images/test.png'
import defaultProfile from '@assets/images/defaultProfile.svg';
import { useRef, useEffect } from 'react';

const Collection = ({missions}) => {
  const missionRef = useRef(null);

  useEffect(() => {
    if (missions && missions.length > 0 && missionRef.current) {
      missionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [missions]);

  return (
    <Wrapper>
      {missions.map((mission, index) => (
        <Mission
          key={mission.id}
          ref={index === 0 ? missionRef : null}
          type={mission.type}
          creator={mission.creator}
          url={mission.url}
          likes={mission.likes}
          likesCount={mission.likes.length}
          screenshot={testImg}
          profile={defaultProfile}
          id={mission.id}
        />
      ))}
    </Wrapper>
  )
}

export default Collection;