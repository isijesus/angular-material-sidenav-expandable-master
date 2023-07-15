import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-wrapper',
  templateUrl: './sidenav-wrapper.component.html',
  styleUrls: ['./sidenav-wrapper.component.css']
})
export class SidenavWrapperComponent {

  isExpanded: boolean = false;
  title:string = '';

  handleSidebarToggle(isExpanded:boolean){
    this.isExpanded = isExpanded;
  }

  constructor() {}

}
