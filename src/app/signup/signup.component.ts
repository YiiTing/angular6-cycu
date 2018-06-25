import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, public afAuth: AngularFireAuth, private router: Router) {
    this.createForm();
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

  signupForm: FormGroup;
  
  get email() { return this.signupForm.get('email'); }
  get name() { return this.signupForm.get('name'); }
  get pwd() { return this.signupForm.get('pwd'); }

  createForm() {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
    });
  }

  signup() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email.value, this.pwd.value)
    .then((user) => {
      //console.log('Success!', value);
      alert('註冊成功');
      this.afAuth.auth.currentUser.updateProfile({
        displayName: this.name.value,
        photoURL: ''
      }).then(function(response) {
        console.log(response);
      }, function(error) {
        console.log(error);
      });
      this.router.navigate(['/']);
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {
        swal({
          title: '信箱重複',
          type: 'error',
          confirmButtonText: '確定'
        })
      } else if (errorCode == 'auth/invalid-email'){
        swal({
          title: '請勿空白',
          type: 'error',
          confirmButtonText: '確定'
        })
      } else {
        console.log(errorMessage);
      }
      console.log(error);
    });
  }

}
