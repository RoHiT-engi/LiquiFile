import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FileValidators } from "ngx-file-drag-drop";
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {
  multiple = true;
  constructor() { }
  
  _displayedColumns = ['name', 'type', 'size', 'lastModified'];
  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );


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



  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: File[]) =>
      console.log("hello there",this.fileControl.value, this.fileControl.valid)
    );
  }

}
