import { Component, Input } from '@angular/core';
import { Code } from '../../domain/code';

@Component({
    selector: 'basic-doc',
    template: ` <div>
        <app-docsectiontext [title]="title" [id]="id">
            <p>Two-way value binding is defined using the standard ngModel directive referencing to a Date property.</p>
        </app-docsectiontext>
        <div class="card flex justify-content-center">
            <p-calendar [(ngModel)]="date"></p-calendar>
        </div>
        <app-code [code]="code"></app-code>
    </div>`
})
export class BasicDocComponent {
    @Input() id: string;

    @Input() title: string;

    date: Date;

    code: Code = {
        html: `
<p-calendar [(ngModel)]="date"></p-calendar>`,

        typescript: `
date: Date;`
    };
}
