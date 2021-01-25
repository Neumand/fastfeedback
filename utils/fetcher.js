export default async (url, token) => {
  const res = await fetch(url, {
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  });
  
  return res.json();
};
