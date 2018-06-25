import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, public afAuth: AngularFireAuth, private router: Router) {
    this.createForm();
    this.afAuth.auth.signOut();
    this.afAuth.authState.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  loginForm: FormGroup;
  
  get email() { return this.loginForm.get('email'); }
  get pwd() { return this.loginForm.get('pwd'); }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    });
  }

  emaillogin() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.pwd.value)
    .then(value => {
      //console.log('Success!', value);
      alert('登入成功');
      //this.router.navigate(['/']);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
  }
  googlelogin() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}