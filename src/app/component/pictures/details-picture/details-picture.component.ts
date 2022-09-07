import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Picture } from '../../../models/picture';

@Component({
  selector: 'div[app-details-picture]',
  templateUrl: './details-picture.component.html',
  styleUrls: ['./details-picture.component.css']
})
export class DetailsPictureComponent implements OnInit {
  @Input() picture: Picture | undefined;
  @Output() delete = new EventEmitter<Picture>();
  @Output() favorite = new EventEmitter<Picture>();
  constructor() { }

  ngOnInit(): void {
  }

  onDeletePicture() {
    this.delete.emit(this.picture);
  }

  onFavoritePicture(){
    this.favorite.emit(this.picture);
  }
}
