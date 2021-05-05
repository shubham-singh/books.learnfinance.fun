import Media from "react-media";
import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";
const NavLayout = () => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 768px)",
          large: "(min-width: 769px)"
        }}
      >
        {(matches) => (
          <>
            {matches.small && <NavbarMobile />}
            {matches.large && <NavbarDesktop />}
          </>
        )}
      </Media>
    </>
  );
};

export default NavLayout;
