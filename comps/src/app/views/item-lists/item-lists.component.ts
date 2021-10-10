import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-lists',
  templateUrl: './item-lists.component.html',
  styleUrls: ['./item-lists.component.css']
})
export class ItemListsComponent implements OnInit {
  @Input() items: any = []

  constructor() { }

  ngOnInit(): void {
  }

}
