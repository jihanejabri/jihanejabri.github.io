import { Component, OnInit } from '@angular/core';
import { PicturesService } from '../../services/pictures.service';
import { Picture } from '../../models/picture';
@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  pictures: Picture[];
  userName: string| null;
  constructor(private picturesService: PicturesService) { }

  ngOnInit() {
    this.updateUserName();
/*     this.pictures =   [
      {name : 'NATURE TEST',
        id : 0,
        url  : '../../../assets/img/nature.jpg',
        description: 'Description',
        favourite: false
      },
      {
        id : 1,
        name : 'NATURE TEST 1',
        url  : '../../../assets/img/nature1.jpg',
        description: 'Description 1',
        favourite: false
      },
      {
        id : 2,
        name : 'NATURE TEST 2',
        url  : '../../../assets/img/nature2.jpg',
        description: 'Description 2',
        favourite: true
      },
      {
        id : 3,
        name : 'NATURE TEST 3',
        url  : '../../../assets/img/nature8.jpg',
        description: 'Description 3',
        favourite: false
      },
      {
        id : 4,
        name : 'NATURE TEST 4',
        url  : '../../../assets/img/nature5.jpg',
        description: 'Description 4',
        favourite: false
      },
      {
        id : 5,
        name : 'NATURE TEST 5',
        url  : '../../../assets/img/nature6.jpg',
        description: 'Description 5',
        favourite: false
      },
      {
        id : 6,
        name : 'NATURE TEST 6',
        url  : '../../../assets/img/nature7.jpg',
        description: 'Description 6',
        favourite: false
      }
    ]; */
    this.getPictures();
  }

  updateUserName(){
    this.userName = sessionStorage.getItem('userName') as string;
  }

  public getPictures() {
    return this.picturesService.getAllPictures().subscribe((res: any) => {
      this.pictures = res;
    });
  }

  public favorite_picture(picture: Picture) {
    const index = this.pictures.indexOf(picture);
    if (index > -1) {
      if (this.pictures[index].favourite === false) {
        this.pictures[index].favourite = true;
      } else {
        this.pictures[index].favourite = false;
      }
    }
  }
  
  public delete_picture(picture: Picture) {
    const index = this.pictures.indexOf(picture);
    if (index > - 1) {
      this.pictures.splice(index, 1);
    } 
  }
}
