import { html, render } from '../../../node_modules/lit-html/lit-html.js';

export default class B4Table extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.counterValue = 3;
        this.users = [
            {id: 1, email: "gizzat.tazabekov@c3iot.com", fname: "Gizzat", lname: "Tazabekov"},
            {id: 2, email: "juan.castaneda@c3iot.com", fname: "Juan", lname: "Castañeda"},
            {id: 3, email: "matt.alexander@c3iot.com", fname: "Matt", lname: "Alexander"}
        ];
    }

    connectedCallback() {
        fetch(`app/components/${B4Table.is}/${B4Table.is}.html`)
        .then(fetchResponse => fetchResponse.text())
        .then(html => {
            this.template = html;
            this.render();

            setInterval(_=>{
                this.counterValue++;
                this.render();
            }, 1000);
        });
    }



    render(){
        render(eval("html`"+this.template+"`"), this.shadowRoot);
    }

    static get is(){ return "b4-table"; }
}

customElements.define(B4Table.is, B4Table);