import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 2;
  images = [
    {
      title: "at the beach",
      url: 'https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80'
    },
    {
      title: 'beach2',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'beach3',
      url: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "at the beach",
      url: 'https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80'
    },
    {
      title: 'beach2',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'beach3',
      url: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "at the beach",
      url: 'https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80'
    },
    {
      title: 'beach2',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'beach3',
      url: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: "at the beach",
      url: 'https://images.unsplash.com/photo-1587502536900-baf0c55a3f74?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80'
    },
    {
      title: 'beach2',
      url: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'beach3',
      url: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
    }
  ]

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  // 下記のようなクラスの指定方法もある、[ngClass]="getClass()"
  // getClass() {
  //   const classes = [];

  //   if (something()) {
  //     classes.push("active")
  //   }

  //   if (somethingElse()) {
  //     classes.push("something")
  //   }

  //   if (yetAnotherCheck()) {
  //     classes.push("check")
  //   }

  //   return classes;
  // }
}
