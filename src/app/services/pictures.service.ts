import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Picture } from '../models/picture';
@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  constructor(private http: HttpClient) {
  }

  public getAllPictures(): Observable<Picture[]> {
    return this.http.get<Picture[]>(`http://localhost:4200/pictures`);
  }

  public addPicture(picture: Picture) {
    return this.http.post(`http://localhost:4200/picture`, picture);
  }

  public deletePicture(id: number) {
    return this.http.delete(`http://localhost:4200/picture/` + id);
  }

  public getPictureById(id: number) {
    return this.http.get(`http://localhost:4200/picture/` + id);
  } 

  public updatePicture(picture: Picture) {
    return this.http.put(`http://localhost:4200/picture/` + picture.id, picture);
  }
}
