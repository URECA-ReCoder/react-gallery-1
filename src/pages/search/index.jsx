import { Wrapper } from '@components/common/commonUI';
import Header from '@components/common/main/header';
import Footer from '@components/common/main/footer';
import Collection from '@components/collection';
import SearchBar from '@components/searchBar';
import { useMissions } from '@src/api/MissionAPI';
import { useSearchStore } from '@src/store/mission';
import { WaitWrapper } from '@components/common/commonUI';

const Search = () => {
  const { data: missions, isLoading, error } = useMissions();
  const { searchQuery, setSearchQuery } = useSearchStore();

  // 작성자 혹은 주제로 미션을 필터링함
  const filteredMissions = searchQuery
    ? missions.filter(
        (mission) =>
          mission.creator.includes(searchQuery) ||
          mission.type.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : [];

  return (
    <Wrapper>
      <Header />
      <SearchBar />
      {
        isLoading ? (
          <WaitWrapper>로딩 중...</WaitWrapper>
        ) : error ? (
          <WaitWrapper>원하는 미션을 찾지 못했어요!</WaitWrapper>
        ) : (
          <Collection missions={filteredMissions} />
        )
      }
      <Footer></Footer>
    </Wrapper>
  );
};

export default Search;
