import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Picture } from '../../../models/picture';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit, OnDestroy {
  private sub: any;
  private id: number | undefined;
  @Input() picture: Picture | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params : any) => {
      this.id = +params.id;
    });
  }

  getPicture(id: number) {
    //TODO Add service getPicture by id
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}