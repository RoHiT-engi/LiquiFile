import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FileValidators } from "ngx-file-drag-drop";
import { Auth, signInWithPopup,signInAnonymously } from '@angular/fire/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { Auth } from "@angular/fire/auth";
import { environment } from 'src/environments/environment';
// import * as firebase from 'firebase/app';
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  multiple = true;
  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
   }
  
  _displayedColumns = ['name', 'type', 'size', 'lastModified'];
  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );

  firebaseSignIn(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      alert(errorMessage);
    })
  }

  firebaseSignout(){
    firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log(" user got signed out");
    }).catch(function(error) {
    console.log('sign out error ',error);
    // An error happened.
    });
    }
  onValueChange(file: File[]) {
    for (let index in file) {
      console.log(index);
      // if(file[index].size > 100000000) {
      //   alert("File size is too big");
      //   // delete file[index];
      //   file.splice(file.length, 1);
      //   this.fileControl.setValue(file);
      // }
      // if(file[index].type == "video/*" || file[index].type == "audio/*") {
      //   alert("File type is not supported");
      //   // delete file[index];
      //   file.splice(file.length, 1);
      //   this.fileControl.setValue(file);
      // }
    }
  }
  onSubmit() {

  }



  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: File[]) =>
      console.log("hello there",this.fileControl.value, this.fileControl.valid)
    );
  }

}
