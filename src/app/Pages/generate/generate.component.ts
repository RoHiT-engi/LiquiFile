import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { FileValidators } from "ngx-file-drag-drop";
@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.css']
})
export class GenerateComponent implements OnInit {

  constructor() { }

  fileControl = new FormControl(
    [],
    [FileValidators.required,
    FileValidators.maxFileCount(2)]
  );

  onValueChange(file: File[]) {
    console.log("File changed!");
  }
  ngOnInit(): void {
    this.fileControl.valueChanges.subscribe((files: File[]) =>
      console.log(this.fileControl.value, this.fileControl.valid)
    );
  }

}
