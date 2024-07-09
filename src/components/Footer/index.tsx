import Logo from "../Logo";
import SocialMedia from "./SocialMedia";
import TopOfPage from "./TopOfPage";

const Footer = () => {
  return (
    <footer className="bg-black lg:h-[88px] w-full flex items-center mt-32">
      <div className="pl-8 pr-8 flex justify-between w-full">
        <Logo color="white" />
        <section className="flex gap-16">
          <SocialMedia />
          <TopOfPage/>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
