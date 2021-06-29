import { useState } from "react";
import Filter from "./FilterMobile";
import Sort from "./SortMobile";
import { ReactComponent as FilterIcon } from "../assets/icons/FilterIcon.svg";
import { ReactComponent as SortIcon } from "../assets/icons/SortIcon.svg";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";

const SortFilterMobile = () => {
  const [open, setOpen] = useState(null);
  const { language } = useLocalisation();

  if (open === "sort") {
    return (
      <div>
        <Sort setOpen={setOpen} />
      </div>
    );
  } else if (open === "filter") {
    return (
      <div>
        <Filter setOpen={setOpen} />
      </div>
    );
  } else {
    return (
      <div className="alert mb-m p-s flex-r justify-e hide-d">
        <div className="flex-r justify-e" onClick={() => setOpen("filter")}>
          <FilterIcon />
          <span className="ml-s">{lang[language].filter}</span>
        </div>

        <div className="flex-r justify-e" onClick={() => setOpen("sort")}>
          <SortIcon />
          <span className="ml-s">{lang[language].sortBy}</span>
        </div>
      </div>
    );
  }
};

export default SortFilterMobile;
