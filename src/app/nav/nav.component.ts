import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit() {
  }

  isActive(viewLocation: string): boolean {
    return this.location.path() === viewLocation;
  }

}
