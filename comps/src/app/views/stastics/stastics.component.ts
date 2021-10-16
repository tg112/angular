import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stastics',
  templateUrl: './stastics.component.html',
  styleUrls: ['./stastics.component.css']
})
export class StasticsComponent implements OnInit {
  @Input() data: any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
