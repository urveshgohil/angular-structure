import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
    selector: '#app-root',
    styleUrls: ['./app.component.scss'],
    template: '<router-outlet class="d-flex flex-wrap" (activate)="onActivate($event)"></router-outlet>'
})
export class AppComponent {
    title = 'angular-stracture';
    onActivate($event: any) {
        window.scroll(0, 0);
    }
    constructor(
        private meta: Meta,
    ) {
        meta.addTag({
            name: 'description', content: 'Welcome to BAPS Shayona The BAPS Swaminarayan Sanstha has created BAPS Shayona to promote a scripturally-based Hindu diet in accordance with the concepts of shuddhata (purity), ahimsa (nonviolence) and bhakti (devotion). Services Vegetarianism Locations Vegetarian'
        });
    }
}
