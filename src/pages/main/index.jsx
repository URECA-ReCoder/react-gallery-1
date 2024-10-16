import { Wrapper } from '@components/common/commonUI/';
import Header from '@components/common/main/header';
import Footer from '@components/common/main/footer';
import Collection from '@components/collection';

const Main = () => {
  return (
    <Wrapper>
      <Header></Header>
      <Collection></Collection>
      <Footer></Footer>
    </Wrapper>
  );
};

export default Main;