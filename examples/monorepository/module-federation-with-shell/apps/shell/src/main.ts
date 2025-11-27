import "./style.css";

import("web-vitals-reporter").catch((error) => {
  console.error("Unable to load web-vitals-reporter module: ", error);
});

const html = String.raw;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = html`
  <header>
    <div>App Shell</div>
    <nav>
      <a href="/home">Home</a>
      <a href="/blog">Blog</a>
    </nav>
  </header>
`;

// simulate client-side routing
const { pathname } = window.location;
if (pathname === "/blog") {
  try {
    const { default: Blog } = await import("blog");
    const main = document.createElement("main");
    main.innerHTML = Blog();
    document.querySelector<HTMLDivElement>("#app")!.appendChild(main);
  } catch (error) {
    console.error("Unable to load blog module: ", error);
  }
} else {
  try {
    const { default: Homepage } = await import("homepage");
    const main = document.createElement("main");
    main.innerHTML = Homepage();
    document.querySelector<HTMLDivElement>("#app")!.appendChild(main);
  } catch (error) {
    console.error("Unable to load homepage module: ", error);
  }
}

try {
  const { Banner } = await import("banner");
  document.body.prepend(
    Banner({
      text: "Runtime shared banner module",
      backgroundColor: "crimson",
    })
  );
} catch (error) {
  console.error("Unable to load banner module: ", error);
}
