import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PicturesService {

  private ADD_PICTURE:  Subject<any>;
  private REMOVE_Picture:  Subject<any>;
  constructor() {
    this.ADD_PICTURE = new Subject();
    this.REMOVE_Picture = new Subject();
  }

  public getADD_Picture(): Subject<any> {
    return this.ADD_PICTURE;
  }

  public getREMOVE_Picture():  Subject<any>{
    return this.REMOVE_Picture;
  }
}
