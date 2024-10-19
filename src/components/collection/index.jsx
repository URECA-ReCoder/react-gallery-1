import { Wrapper } from './index.styles';
import Mission from '@components/collection/mission';
import defaultProfile from '@assets/images/defaultProfile.svg';
import { useRef, useEffect } from 'react';
import reactImg from '@assets/images/react.png';
import vanillaImg from '@assets/images/vanilla.jpg';

const Collection = ({missions}) => {
  const missionRef = useRef(null);
  const reactString = "REACT";
  const vanillaString = "VANILLA";

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
          screenshot={mission.type.includes(reactString) ? reactImg : vanillaImg }
          profile={defaultProfile}
          id={mission.id}
        />
      ))}
    </Wrapper>
  )
}

export default Collection;