import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  photo: any;

  constructor(private photoService: PhotosService) {
    this.getPhoto()
  }

  getPhoto() {
    this.photo = this.photoService.getPhoto().subscribe(response => this.photo = response.urls.regular);
  }

  ngOnInit(): void {
  }

}
