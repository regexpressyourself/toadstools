import { useEffect, useState } from "react";
import useQueryParams from "./useQueryParams";
function useFont() {
  const query = useQueryParams();
  const font = query.get("font");
  const [displayFont] = useState(font === "gh" ? "Gloria Hallelujah" : font);
  useEffect(() => {
    if (displayFont) {
      const link = document.createElement("link");
      link.setAttribute(
        "href",
        `https://fonts.googleapis.com/css2?family=${displayFont}&display=swap`
      );
      link.setAttribute("rel", "stylesheet");

      document.head.appendChild(link);
    }
  }, [displayFont]);
  return displayFont;
}
export default useFont;
