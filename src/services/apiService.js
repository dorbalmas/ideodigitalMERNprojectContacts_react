export const doApiGet = async (url) => {
  let resp = await fetch(url);
  let data = await resp.json();
  console.log(data);
  return data;
};
