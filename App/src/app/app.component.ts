import { Component, ViewChild, Renderer2 } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private renderer: Renderer2) {}

  title = 'A11y Drag and Drop';
  @ViewChild('dragObj') elementToDrag;
  top = 0;
  left = 0; 

  allowDrop(event) {
    event.preventDefault();
  }

  drag(event) {}

  drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

  getKeyAndMove($event) {
  
    $event.preventDefault(); 
    var dragObjRect = this.elementToDrag.nativeElement.getBoundingClientRect();

    console.log(dragObjRect);

    var keyCode = $event.keyCode;
    switch (keyCode) {
      case 37: //left arrow key
        this.moveLeft();
        break;
      case 38: //Up arrow key
        this.moveUp();
        break;
      case 39: //right arrow key
        this.moveRight();
        break;
      case 40: //down arrow key
        $event.preventDefault
        this.moveDown();
        break;
    }

    this.renderer.setStyle(this.elementToDrag.nativeElement, "left", this.left + 'px');
    this.renderer.setStyle(this.elementToDrag.nativeElement, "top", this.top + 'px');
    
  }

  moveLeft() {
    this.left = this.left - 5;
  }

  moveUp() {
    this.top = this.top - 5;
  }

  moveRight() {
    this.left = this.left + 5;
  }

  moveDown() {
    this.top = this.top + 5;
  }

  
}

