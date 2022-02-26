import { Component, OnInit,EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  BtnLogin = "Login"
  @Output() public sidenavToggle = new EventEmitter();

  constructor() { }

  public onToggleSidenav = () => { 
  }

  ngOnInit(): void {
  }

}
