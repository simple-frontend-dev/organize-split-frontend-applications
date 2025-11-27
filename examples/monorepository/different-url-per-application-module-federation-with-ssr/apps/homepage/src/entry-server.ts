import css from "./style.css?raw";

const html = String.raw;

export function render(_url: string) {
  return {
    head: html`
      <style>
        ${css}
      </style>
    `,
    html: html`
      <nav>
        <a href="/home">Home</a>
        <a href="/blog">Blog</a>
      </nav>
      <main>
        <h1>Homepage</h1>
      </main>
    `,
  };
}
