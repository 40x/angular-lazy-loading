import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loadingedit: boolean;

  constructor (private router: Router) {}

  ngOnInit () {
    this.router.events.subscribe(event => {
        if (event instanceof RouteConfigLoadStart) {
            this.loadingedit = true;
        } else if (event instanceof RouteConfigLoadEnd) {
            this.loadingedit = false;
        }
    });
  }

}
