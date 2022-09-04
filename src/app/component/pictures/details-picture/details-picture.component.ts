import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Picture } from '../../../models/picture';

@Component({
  selector: 'app-details-picture',
  templateUrl: './details-picture.component.html',
  styleUrls: ['./details-picture.component.css']
})
export class DetailsPictureComponent implements OnInit, OnDestroy {
  private sub: any;
  private id: number | undefined;
  @Input() picture: Picture | undefined;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params : any) => {
      this.id = +params.id;
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
