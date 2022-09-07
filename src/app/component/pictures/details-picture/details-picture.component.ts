import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Picture } from '../../../models/picture';
import { PicturesService } from '../../../services/pictures.service';

@Component({
  selector: 'div[app-details-picture]',
  templateUrl: './details-picture.component.html',
  styleUrls: ['./details-picture.component.css']
})
export class DetailsPictureComponent implements OnInit {
  @Input() picture: Picture;
  @Output() delete = new EventEmitter<Picture>();
  @Output() favorite = new EventEmitter<Picture>();
  constructor(private picturesService: PicturesService) { }

  ngOnInit(): void {
  }

  onDeletePicture() {
    this.picturesService.deletePicture(this.picture.id).subscribe((res: any) => {
      this.picture = res;
    });
    this.delete.emit(this.picture);
  }

  onFavoritePicture(){
    this.favorite.emit(this.picture);
  }
}
