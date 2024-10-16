import { Wrapper, WaitWrapper } from '@components/common/commonUI';
import Header from '@components/common/main/header';
import Footer from '@components/common/main/footer';
import Collection from '@components/collection';
import { useMissions } from '@src/api/MissionAPI';

const Main = () => {
  const { data: missions, isLoading, error } = useMissions();
  return (
    <Wrapper>
      <Header />
      {
        isLoading ? (
          <WaitWrapper>미션 불러오는 중...</WaitWrapper>
        ) : error ? (
          <WaitWrapper>미션을 불러오지 못했어요!</WaitWrapper>
        ) : (
          <Collection missions={missions} />
        )
      }
      <Footer />
    </Wrapper>
  );
};

export default Main;