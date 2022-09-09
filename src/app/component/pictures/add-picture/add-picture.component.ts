import { Component, OnInit } from '@angular/core';
import { Picture } from '../../../models/picture';
import { PicturesService } from '../../../services/pictures.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.css']
})
export class AddPictureComponent implements OnInit {
  picture: Picture | undefined;
  form: FormGroup;
  loading = false;
  submitted = false;
  constructor(private picturesService: PicturesService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      url: ['', Validators.required],//TODO replace with upload file
      description: ['', Validators.required]
    });
  }

  get f() { 
    return this.form.controls; 
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
        return;
    }
    this.loading = true;
    return this.picturesService.addPicture(this.form.value).subscribe((res: any) => {
      this.picture = res;
      this.router.navigate(['/pictures']);
    });
  }
}
