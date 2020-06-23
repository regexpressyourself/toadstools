const defaultParams = {
  seconds: 300,
  user: "zookeeprr",
  font: "sans-serif",
  color: "black"
};
const openTab = (
  url,
  params = {
    seconds: 300,
    user: "zookeeprr",
    font: "sans-serif",
    color: "black"
  }
) => {
  console.log("url");
  console.log(url);
  console.log("params");
  console.log(params);
  if (!params) {
    window.open(url, "_blank");
    return;
  }
  let paramString = "?";
  for (let param in params) {
    paramString += `${param}=${
      params[param] ? params[param] : defaultParams[param]
    }&`;
  }
  if (paramString.length > 1) {
    url += paramString;
  }
  window.open(url, "_blank");
};
export default openTab;
