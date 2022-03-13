import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-table-generator',
  templateUrl: './table-generator.component.html',
  styleUrls: ['./table-generator.component.sass']
})
export class TableGeneratorComponent implements OnInit {
  _displayedColumns = ['name', 'type', 'size', 'lastModified'];

  @Input()
  files: File[] = []; 
  constructor() { }

  ngOnInit(): void {
  }

}
