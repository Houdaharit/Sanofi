//import Layout from "../components/Layout";
import Layout from "../components/Layout";
import Main from "../components/Main";
import { BoxProvider } from "../providers/BoxProvider";

const HomePage = () => {
  return (
    <>
      <Layout>
        <BoxProvider>
          <Main />
        </BoxProvider>
      </Layout>
    </>
  );
};
export default HomePage;
