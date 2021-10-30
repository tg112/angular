import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface PhotoResponse {
  urls: {
    regular: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) {
    
  }

  getPhoto() {
    return this.http.get<PhotoResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: `Client-ID ${environment.AccessKey}`
      }
    })
  }
}
