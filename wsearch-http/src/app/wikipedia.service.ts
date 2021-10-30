import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    search: {
      title: string
      snippet: string,
      pageid: number,
    }[]
  }
}

// const observable = new Observable<Car>((observer) => {
//   observer.next({
//     year: 1990,
//     color: 'red',
//     running: true,
//     make: {
//       name: 'toyota',
//       dateCreated: 1990
//     }
//   })
// }).pipe(
//   pluck('make', 'name')
// );

// observable.subscribe(value => {
//   console.log(value)
// })

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {

  constructor(private http: HttpClient) { }

  search(term: string) {
    return this.http.get<WikipediaResponse>(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*'
      }
    }).pipe(
      // pipeはデータの加工
      pluck('query', 'search')
    );
  } 
}
