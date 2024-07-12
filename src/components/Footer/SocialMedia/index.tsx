import SocialMediaLogo from "./SocialMediaLogo";

const logos: string[] = [
  "/linkedin.svg",
  "/twitter.svg",
  "/instagram.svg",
  "/facebook.svg",
  "/tiktok.svg",
  "/youtube.svg",
];

const SocialMedia = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-4">
      <h4 className="leading-6 text-lg text-white font-bold">Suivez-nous</h4>
      <div className="flex gap-4 flex-wrap justify-center">
        {logos.map((logo, index) => (
          <SocialMediaLogo key={index} href={logo} />
        ))}
      </div>
    </div>
  );
};
export default SocialMedia;
