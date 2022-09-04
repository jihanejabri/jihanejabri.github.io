import { Component, OnInit } from '@angular/core';
import { PicturesService } from '../../services/pictures.service';
import { Picture } from '../../models/picture';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  private pictures: Picture[];
  constructor(private picturesService: PicturesService) { }

  ngOnInit() {

    this.pictures =   [
      {name : 'NATURE TEST',
        id : 1,
        url  : '../../../assets/img/nature.jpg',
        favourite: false
      },
      {
        id : 2,
        name : 'NATURE TEST 1',
        url  : '../../../assets/img/nature1.jpg',
        favourite: false
      },
      {
        id : 3,
        name : 'NATURE TEST 2',
        url  : '../../../assets/img/nature2.jpg',
        favourite: false
      }
    ];
    this.Add_Picture();
    this.Remove_Picture();
  }

  public getPictures() {
    return this.pictures;
  }

  public favorite_icon(i: any) {
    if (this.pictures[i].favourite === false) {
      this.pictures[i].favourite = true;
    } else {
      this.pictures[i].favourite = false;
    }
  }
  public delete_icon(i: any) {
    this.pictures.splice(i, 1);
  }

  public Add_Picture() {
    //TODO
    const data = {
      id : 3,
      name : 'NATURE TEST ?',
      url  : '../../../assets/img/nature.jpg',
      favourite: false
    };
    this.pictures.push(data);
  }

  public Remove_Picture() {
    this.picturesService.getREMOVE_Picture().subscribe(() => {
      this.pictures.splice(0, this.pictures.length);
    });
  }
}
