import { Wrapper } from '@components/common/commonUI/';
import Header from '@components/common/header';
import Footer from '@components/common/footer';
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