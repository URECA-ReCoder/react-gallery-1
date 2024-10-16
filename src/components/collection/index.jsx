import { Wrapper } from './index.styles';
import Mission from '@components/collection/mission';
import testImg from '@assets/images/test.png'
import defaultProfile from '@assets/images/defaultProfile.svg';

const Collection = ({missions}) => {
  return (
    <Wrapper>
      {missions.map((mission) => (
        <Mission
          key={mission.id}
          type={mission.type}
          creator={mission.creator}
          url={mission.url}
          likes={mission.likes}
          screenshot={testImg}
          profile={defaultProfile}
        />
      ))}
    </Wrapper>
  )
}

export default Collection;