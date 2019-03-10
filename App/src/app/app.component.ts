import { Component, ViewChild } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A11y Drag and Drop';
  @ViewChild('dragObj') elementToDrag;

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

    var dragObjRect = this.elementToDrag.nativeElement.getBoundingClientRect();

    console.log(dragObjRect);

    var keyCode = event.keyCode;
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
        this.moveDown();
        break;
    }

    
  }

  moveLeft() {
    console.log('move left');
    //console.log(this.elementToDrag.nativeElement);
    //console.log(this.elementToDrag.nativeElement.getBoundingClientRect());

    //console.log(this.elementToDrag.nativeElement.style);
    //console.log(this.elementToDrag.nativeElement.style.left);
     
    var leftValue = parseInt(this.elementToDrag.nativeElement.style.left);

    leftValue - 5;



    console.log(leftValue); 



  }

  moveUp() {
    console.log('move up');
    //console.log(this.elementToDrag.nativeElement.getBoundingClientRect());
  }

  moveRight() {
    console.log('move right');
    //console.log(this.elementToDrag.nativeElement.getBoundingClientRect());
  }

  moveDown() {
    console.log('move down');
    //console.log(this.elementToDrag.nativeElement.getBoundingClientRect());
  }

  
}

