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
    <div className="flex gap-4">
        <div className="leading-6 text-lg text-white font-bold flex items-center">Suivez-nous</div>
      {logos.map((logo, index) => (
        <SocialMediaLogo key={index} href={logo} />
      ))}
    </div>
  );
};
export default SocialMedia;
