import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-output-screen',
  templateUrl: './output-screen.component.html',
  styleUrls: ['./output-screen.component.sass']
})
export class OutputScreenComponent implements OnInit {

  constructor(private router:Router) { 
    console.log("Checking Things");
  }
  
  getSamples(){
    return window.history.state.files.toString();
  }
  getQrCodeLabel(){
    return "QR Code";
  }

  
  ngOnInit(): void {
  }

}
