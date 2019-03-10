import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'A11y Drag and Drop';

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
    console.log('in getKeyAndMove');
    console.log(event);
    console.log(event.keyCode);

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

  moveLeft(){
    console.log('move left');
    
  }

  moveUp(){
    console.log('move up');

  }

  moveRight(){
    console.log('move right');

  }

  moveDown() {
    console.log('move down');

  }

}
