import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHovered: boolean = false;

toggleHover(hovered: boolean) {
  this.isHovered = hovered;
}
}
