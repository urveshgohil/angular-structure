import { Component, OnInit, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: '.app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss', '../../../assets/scss/form.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private titleService: Title,
        private renderer: Renderer2,
    ) { }

    ngOnInit(): void {
        this.titleService.setTitle("Website :: Home");
        this.renderer.addClass(document.querySelector('#app-root'), 'home');
    }

    ngOnDestroy() {
        this.renderer.removeClass(document.querySelector('#app-root'), 'home');
    }
}