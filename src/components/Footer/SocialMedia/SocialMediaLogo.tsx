import { SVGProps } from "react";

type ImageProps = SVGProps<SVGImageElement>;

interface Props extends ImageProps {
  href: string;
}

const SocialMediaLogo = ({ href }: Props) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="20" strokeWidth="1" stroke="white" />
      <image height="20" width="20" x="10" y="10" href={href} />
    </svg>
  );
};
export default SocialMediaLogo;
