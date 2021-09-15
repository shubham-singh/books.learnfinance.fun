import { useLocalisation } from "../Localisation/LocalisationContext";

import { ReactComponent as TwitterIcon } from "../assets/icons/TwitterIcon.svg";
import { ReactComponent as GithubIcon } from "../assets/icons/GithubIcon.svg";
import { ReactComponent as LinkedInIcon } from "../assets/icons/LinkedInIcon.svg";
import { scrollToTop } from "../utils/function";

const Footer = () => {
  const { setLanguage } = useLocalisation();

  return (
    <footer className="footer pt-xl pb-xl">
      <div>
        <span
          className="small m-m hide-d"
          onClick={() => {
            setLanguage("hi");
            scrollToTop();
          }}
        >
          हिन्दी
        </span>
        <span
          className="small m-m hide-d"
          onClick={() => {
            setLanguage("en");
            scrollToTop();
          }}
        >
          English
        </span>
      </div>
      <p>&#169; Learn Finance, 2021</p>
      <p>
        Made with{" "}
        <span role="img" aria-labelledby="love">
          ❤️
        </span>
        in React
      </p>
      <div className="flex-row-center">
        <a
          href="https://twitter.com/i_shubhamsingh"
          target="blank"
          className="p-m"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/shubham-singh"
          target="blank"
          className="p-m"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/shubham-singh"
          target="blank"
          className="p-m"
        >
          <GithubIcon />
        </a>
      </div>

      <div className="empty-space hide-d"></div>
    </footer>
  );
};

export default Footer;
