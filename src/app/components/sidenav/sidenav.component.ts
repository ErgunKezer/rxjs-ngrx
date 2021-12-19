import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    @ViewChild('drawer', { static: true }) drawer!: MatDrawer;

    constructor() {
        // this.drawer = MatDrawer;
    }

    ngOnInit(): void {
        console.log(this.drawer);

        this.drawer.open();
    }
}
