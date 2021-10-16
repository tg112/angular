import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: "users" },
    { value: 39, label: "page views" },
    { value: 19, label: "favorites" },
  ];

  items = [
    { image: "/assets/images/couch.jpeg", title: "couch", description: "this is a great couch"},
    { image: "/assets/images/dresser.jpeg", title: "dresser", description: "this is a dresser"}, 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
