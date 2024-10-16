import { Wrapper } from './index.styles';
import Mission from '@components/collection/mission';
import testImg from '@assets/images/test.png'
import defaultProfile from '@assets/images/defaultProfile.svg';

const testMission = [
  {
    "id": "bd493ddf-6f83-4568-9bcb-a90a404d290a",
    "type": "VANILLA_TODO",
    "creator": "고주희",
    "url": "https://zuitopia-todo.vercel.app/",
    "likes": []
  },
  {
    "id": "140a8736-faf1-43c9-b5b2-44ddcdc45d21",
    "type": "VANILLA_TODO",
    "creator": "이지수",
    "url": "https://vanilla-todo-git-jissssu-jissssus-projects.vercel.app/",
    "likes": []
  },
  {
    "id": "8a8e4839-9a7b-45f6-93bc-e47ceb09dad9",
    "type": "VANILLA_TODO",
    "creator": "김윤일",
    "url": "https://vanilla-todo-kja1wl5px-kyoul10121s-projects.vercel.app",
    "likes": []
  },
];


const Collection = () => {
  return (
    <Wrapper>
      {testMission.map((mission) => (
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