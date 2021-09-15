import Media from "react-media";

import SortFilterMobile from "./SortFilterMobile";
import SortFilterDesktop from "./SortFilterDesktop";

const SortFilterLayout = () => {
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
            {matches.small && <SortFilterMobile />}
            {matches.large && <SortFilterDesktop />}
          </>
        )}
      </Media>
    </>
  );
};

export default SortFilterLayout;
