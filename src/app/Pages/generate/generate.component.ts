import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FileValidators } from "ngx-file-drag-drop";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'; 
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
  firstNameAutofilled!: boolean;
  lastNameAutofilled!: boolean;
  textLabel : String= "";
  // uris = JSON;
  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
   }
  
  _displayedColumns = ['name', 'type', 'size', 'lastModified'];
  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );
  // onChangeLabel(event: any) {
  //   this.textLabel = event.target.value;
  // }

  firebaseSignIn(){
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential;
      // The signed-in user info.
      var user = result.user;
      console.log("user signed in",user);
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
      alert("Plz Login with Google To Proceed Further")
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
    console.log("hello there",this.fileControl.value)
  }
  onSubmit() {
    if(firebase.auth().currentUser==null){
      console.log("user signed in "+firebase.auth().currentUser);
      this.firebaseSignIn();
    }else{
      console.log("user signed in"+firebase.auth().currentUser);
      this.uploadpreparation();
    }
  }

  uploadpreparation() {
    let UploadArray: Array<string> =[];
      for (let index in this.fileControl.value) {
        if(this.fileControl.value[index].size < 100000000) {
          if(this.fileControl.value[index].type != "video/*" || this.fileControl.value[index].type != "audio/*") {
            UploadArray = this.UploadFile(this.fileControl.value[index],UploadArray);
          }else{
            alert("File Format not supported");
          }
      }else{
        alert("File size is greater than 10MB");
      }
  }
  console.log("UploadArray :- ",UploadArray);
  localStorage.setItem("UploadArray", JSON.stringify(UploadArray));
}

  UploadFile(file: File,uris :Array<string>) {
    if(firebase.auth().currentUser==null){
      console.log("user signed in "+firebase.auth().currentUser);
      alert("Plz Login with Google To Proceed Further");
      this.firebaseSignIn();
    }else{
    const UploadTask = firebase.storage().ref().child(firebase.auth().currentUser?.email+"/"+this.textLabel+"/"+file.name).put(file);
    UploadTask.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log(error);
        alert(error);
      },
      () => {
        UploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(downloadURL);
          uris.push(downloadURL);
        });
      }
    );}
    return uris;
  }

  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: File[]) =>
      console.log("hello there",this.fileControl.value, this.fileControl.valid)
    );
  }

}  

