import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: '.app-default-layout.min-h100.d-flex.flex-column.w-100',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

    isStickyClsAdd: boolean = false;

    constructor(
        @Inject(DOCUMENT) private document: Document
    ) { }

    ngOnInit(): void {
    }

    @HostListener('window:scroll', [])

    onWindowScroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            this.isStickyClsAdd = true;
        } else {
            this.isStickyClsAdd = false;
        }
    }

}
