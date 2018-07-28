import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  year:number;
  constructor() { }

  ngOnInit() {
    let d = new Date();
    this.year = d.getFullYear();
  }

}
