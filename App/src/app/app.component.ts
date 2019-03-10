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

  drag(event) {
    //event.dataTransfer.setData("text", event.target.id);
    console.log('in drag');
    console.log(event);
  }

  drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

  getKeyAndMove($event) {
    //console.log('in getKeyAndMove');
    //console.log(event);
    //console.log(event.keyCode);
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

    console.log(this.left); 
    console.log(this.top); 

    this.renderer.setStyle(this.elementToDrag.nativeElement, "left", this.left + 'px');
    this.renderer.setStyle(this.elementToDrag.nativeElement, "top", this.top + 'px');
    
  }

  moveLeft() {
    console.log('move left');
    //console.log(this.elementToDrag.nativeElement);
    //console.log(this.elementToDrag.nativeElement.getBoundingClientRect());
    //console.log(this.elementToDrag.nativeElement.style);
    //console.log(this.elementToDrag.nativeElement.style.left);
    
    this.left = this.left - 5;
  }

  moveUp() {
    console.log('move up');
    this.top = this.top - 5;
  }

  moveRight() {
    console.log('move right');
    this.left = this.left + 5;
  }

  moveDown() {
    console.log('move down');
    this.top = this.top + 5;
  }

  
}

