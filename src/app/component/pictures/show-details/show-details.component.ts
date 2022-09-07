import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
              private picturesService: PicturesService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params : any) => {
      this.id = +params.id;
    });
    this.getPicture(this.id)
  }

  getPicture(id: number | undefined) {
    return this.picturesService.getPictureById(id).subscribe((res : Picture) => {
      this.picture = res;
    });
  }

  onUpdatePicture() {
    //TODO
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}