import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-scanoutputscreen',
  templateUrl: './scanoutputscreen.component.html',
  styleUrls: ['./scanoutputscreen.component.sass']
})
export class ScanoutputscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getValue(){
    console.log(window.history.state);
    return window.history.state.data.toString();
  }

  getUrls(){
    const myArray = window.history.state.data.toString().split(",");
    console.log(myArray);
    return myArray;
  }
  downloadall(){
    const myArray = window.history.state.data.toString().split(",");
    console.log(myArray);
    for(let i=0;i<myArray.length;i++){
        const xhr = new XMLHttpRequest();
        xhr.setRequestHeader('Access-Control-Allow-Origin', 'https://firebasestorage.googleapis.com/');
        xhr.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        xhr.responseType = 'blob';
        xhr.onload = (event) => {
          const blob = xhr.response;
        };
        xhr.open('GET', myArray[i]);
        xhr.send();
    }
  }


}
