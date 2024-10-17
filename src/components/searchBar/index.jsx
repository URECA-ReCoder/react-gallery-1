import { useSearchStore } from '@src/store/mission';
import {
  Wrapper,
  InputWrapper,
  SearchImg,
  Input,
  ExitButton,
  EraseButton,
} from './index.styles';
import searchImg from '@assets/icons/inputSearch.svg';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <InputWrapper>
        <SearchImg src={searchImg} alt="search" />
        <Input
          type="text"
          placeholder="검색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <EraseButton onClick={() => setSearchQuery('')}>X</EraseButton>
      </InputWrapper>
      <ExitButton onClick={() => navigate(-1)}>취소</ExitButton>
    </Wrapper>
  );
};

export default SearchBar;
