import { useLocation } from "react-router-dom";
import { SPACEX_ENDPOINT } from "../constants"

export const urlGenerator = ({ isSuccessfulLaunch, isSuccessfulLanding, year }) => {
  const createURL = () => {
    let url = SPACEX_ENDPOINT;
    url += isSuccessfulLaunch ? `&launch_success=${isSuccessfulLaunch}` : "";
    url += isSuccessfulLanding ? `&land_success=${isSuccessfulLanding}` : "";
    url += year ? `&launch_year=${year}` : "";
    return url
  }

  return createURL();
}

export const fetchData = (data) => {
  if (typeof window !== "undefined" && urlGenerator(data)) {
    data.setItems([])
    fetch(urlGenerator(data))
      .then(response => response.json())
      .then(response => data.setItems(response))
      .catch(() => data.setError(true))
  }
}

export const useSearchParams = () => {
  const searchParams = useLocation().search;
  const location = new URLSearchParams(searchParams);
  return location;
}