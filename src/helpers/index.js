import { SPACEX_ENDPOINT, IS_SUCCESSFUL_LANDING, IS_SUCCESSFUL_LAUNCH, YEAR } from "../constants"

const getCookie = cookieName => {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

const setCookie = ({ cookieName, cookieValue }) => {
  if (cookieValue !== null) {
    document.cookie = `${cookieName}=${cookieValue};`;
  }
}

export const urlGenerator = ({ isSuccessfulLaunch, isSuccessfulLanding, year, isServer }) => {
  const createURL = () => {
    let url = SPACEX_ENDPOINT;
    url += isSuccessfulLaunch ? `&launch_success=${isSuccessfulLaunch}` : "";
    url += isSuccessfulLanding ? `&land_success=${isSuccessfulLanding}` : "";
    url += year ? `&launch_year=${year}` : "";
    return url
  }

  if (
    !isServer &&
    (isSuccessfulLaunch !== getCookie(IS_SUCCESSFUL_LAUNCH) ||
      isSuccessfulLanding !== getCookie(IS_SUCCESSFUL_LANDING) ||
      year !== getCookie(YEAR))
  ) {
    setCookie({ cookieName: IS_SUCCESSFUL_LAUNCH, cookieValue: isSuccessfulLaunch })
    setCookie({ cookieName: IS_SUCCESSFUL_LANDING, cookieValue: isSuccessfulLanding })
    setCookie({ cookieName: YEAR, cookieValue: year })
    const url = createURL()
    return url;
  } else if (isServer) {
    const url = createURL()
    return url;
  }
  return null;
}

export const fetchData = (data) => {
  if (typeof window !== "undefined" && urlGenerator(data)) {
    fetch(urlGenerator(data))
      .then(response => response.json())
      .then(response => data.setItems(response))
      .catch(() => data.setError(true))
  }
}