import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Picture } from '../models/picture';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PicturesService {
  badeURI = environment.apiUrl;
  constructor(private http: HttpClient) {
  }

  public getAllPictures(): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.badeURI + `/pictures`);
  }

  public addPicture(picture: Picture) {
    return this.http.post(this.badeURI + `/pictures`, picture);
  }

  public deletePicture(id: number) {
    return this.http.delete(this.badeURI + `/pictures/` + id);
  }

  public getPictureById(id: number | undefined): Observable<Picture> {
    return this.http.get<Picture>(this.badeURI + `/pictures/` + id);
  } 

  public updatePicture(picture: Picture, id: number): Observable<Picture> {
    return this.http.put<Picture>(this.badeURI + `/pictures/` + id, picture);
  }
}
