export function formatUrl(pathname) {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    return `http://localhost:3000/${pathname}/`.slice(0, -1);
  } else {
    return `https://baileyssmokehouseny-demo.netlify.app/${pathname}`.slice(
      0,
      -1
    );
  }
}
