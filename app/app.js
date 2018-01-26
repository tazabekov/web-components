import { html, render } from '../node_modules/lit-html/lit-html.js';

const greeting = (prefix, name) => {
    return html`
    <h3>test ${prefix} ${name}</h3>
  `;
};

const el = document.querySelector('#container');

render(greeting('1', '2'), el);
