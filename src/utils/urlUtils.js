export function formatUrl(pathname) {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return `http://localhost:3000/${pathname}/`.slice(0, -1);
  } else {
    // replace this url with the depoloyed one
    return `https://baileyssmokehouseny-demo.netlify.app/${pathname}`;
  }
}
