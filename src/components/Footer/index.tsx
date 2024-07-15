import Logo from "../Logo";
import SocialMedia from "./private/SocialMedia";
import TopOfPage from "./private/TopOfPage";

const Footer = () => {
  return (
    <footer className="bg-black lg:flex-row flex-col flex gap-8 p-5 items-center lg:justify-between">
      <Logo color="white" />
      <section className="flex lg:gap-16 gap-8 lg:flex-row flex-col items-center">
        <SocialMedia />
        <TopOfPage />
      </section>
    </footer>
  );
};
export default Footer;
