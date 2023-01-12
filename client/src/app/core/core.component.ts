import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css', './core.sass']
})
export class CoreComponent {
  status: boolean = false;

  number = 7;
  clickEvent(){
      this.status = !this.status;       
  }
}
