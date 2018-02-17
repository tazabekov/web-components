import { html, render } from '../../../node_modules/lit-html/lit-html.js';

export default class B4Table extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.counterValue = 3;
        this.users = [
            {id: 1, email: "gizzat.tazabekov@c3iot.com", fname: "Gizzat", lname: "Tazabekov"},
            {id: 2, email: "juan.castaneda@c3iot.com", fname: "Juan", lname: "Castañeda"}
        ];
    }

    connectedCallback() {
        // fetch(`app/components/${B4Table.is}/${B4Table.is}.html`)
        // .then(fetchResponse => fetchResponse.text())
        // .then(templateText => {
        //     const templateEl = new DOMParser().parseFromString(templateText, 'text/html')
        // });
        this.render();

        setInterval(_=>{
            this.counterValue++;
            this.render();
        }, 1000);
    }


    template(){
        return html`
            <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="app/components/${B4Table.is}/${B4Table.is}.css">
            <table class="table table-hover">
                <thead class="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Email</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                </tr>
                </thead>
                <tbody>
                ${this.users.map((u, i) => html`
                    <tr>
                        <th scope="row">${u.id}</th>
                        <td>${u.email}</td>
                        <td>${u.fname}</td>
                        <td>${u.lname}</td>
                    </tr>
                `)}
                <tr>
                    <th scope="row">hello(${this.counterValue})</th>
                    <td>gizzat.tazabekov@c3iot.com</td>
                    <td>Gizzat</td>
                    <td>Tazabekov</td>
                </tr>
                </tbody>
            </table>
        `;
    }

    render(){
        render(this.template(), this.shadowRoot);
    }

    static get is(){ return "b4-table"; }
}

customElements.define(B4Table.is, B4Table);