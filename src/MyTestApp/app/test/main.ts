/// <reference path="../../typings/globals/es6-shim/index.d.ts" />

import { Component } from "@angular/core";

@Component({
    selector: "app-shell",
    template: `
<div>
    <br/>
    Hello, {{title}}
</div>
    `
})

export class Main {
    title: string;
    constructor() {
        this.title = "World!";
    }
}