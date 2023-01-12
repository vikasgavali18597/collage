import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  data = Sidebar;
}

const Sidebar = [
  { name: 'Staff', icon: 'user', link: '' },
  { name: 'Teacher', icon: 'user', link: '' },
  { name: 'Student', icon: 'user', link: '' },
];
export interface sidebar {
  name:string;
  icon:string;
  link:string;
}