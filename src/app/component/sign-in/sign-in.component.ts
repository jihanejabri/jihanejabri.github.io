import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authService: AuthenticationService,
    ) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        if (this.authService.isLoggedIn()) {
          this.router.navigate(['/pictures']);
        }
        // get return url from route parameters or default to '/'
      //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
      this.submitted = true;
      if (this.loginForm.valid) {
        this.authService.signIn(this.loginForm.value).subscribe(
          (result: any) => {
            window.location.reload();
            this.router.navigate(['/pictures']);
          },
          (err: Error) => {
            this.submitted = false;
            alert(err.message);
          }
        );
  }
}
}
