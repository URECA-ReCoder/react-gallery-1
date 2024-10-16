import { useSearchStore } from '@src/store/mission';
import { Wrapper, Input } from './index.styles';
import search from '@assets/icons/search.svg';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  return (
    <Wrapper>
      <InputWrapper>
      <Img src={search} alt="search"/>
      <Input
        type="text"
        placeholder="검색"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button onClick={() => setSearchQuery('')}>
        <Img src={close} alt="close" />
      </Button>
      </InputWrapper>
      <Button onClick={() => useNavigate(-1)}>취소</Button>
    </Wrapper>
  );
};

export default SearchBar;
