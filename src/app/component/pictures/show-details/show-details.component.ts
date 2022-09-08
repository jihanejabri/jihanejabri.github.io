import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Picture } from '../../../models/picture';
import { PicturesService } from '../../../services/pictures.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
  private sub: any;
  private id: number | undefined;
  @Input() picture: Picture | undefined;

  constructor(private route: ActivatedRoute,
              private picturesService: PicturesService,
              private router: Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params : any) => {
      this.id = +params.id;
    });
    this.getPicture(this.id);
  }

  public getPicture(id: number | undefined) {
    return this.picturesService.getPictureById(id).subscribe((res : Picture) => {
      this.picture = res;
    });
  }

  public updatePicture(picture: Picture, id: number) {
    //TODO
    const description = "test update picture service";
    return this.picturesService.updatePicture(picture, id).subscribe((res : Picture) => {
      this.picture = res;
      this.picture.description = description;
    });
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}