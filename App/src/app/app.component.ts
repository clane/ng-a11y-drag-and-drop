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
  @ViewChild('dropzone') placeToDrop;
  @ViewChild('liveRegion') liveRegionToUpdate;
  top = 0;
  left = 0; 

  allowDrop($event) {
    $event.preventDefault();
  }

  drag($event) {
    $event.dataTransfer.setData("text", $event.target.id);
  }

  drop($event) {
    $event.preventDefault();
    var data = $event.dataTransfer.getData("text");
    $event.target.appendChild(document.getElementById(data));
  }

  getKeyAndMove($event) {
  
    $event.preventDefault(); 
    var dragObjRect = this.elementToDrag.nativeElement.getBoundingClientRect();
    var dropzoneRect = this.placeToDrop.nativeElement.getBoundingClientRect();
   
    if(dragObjRect.top > dropzoneRect.top && 
        dragObjRect.left > dropzoneRect.left &&
        dragObjRect.bottom < dropzoneRect.bottom &&
        dragObjRect.right < dropzoneRect.right
      ){
      alert('over drop zone, press the OK Button or the Enter key');
      this.renderer.appendChild(this.placeToDrop.nativeElement, this.elementToDrag.nativeElement);
      this.renderer.setStyle(this.elementToDrag.nativeElement, "position", 'static');

    }
  
    var keyCode = $event.keyCode;
    var message;

    switch (keyCode) {
      case 37: //left arrow key
        message = "moving left" + " Top:" + dragObjRect.top + " Left:" + dragObjRect.left;
        this.announceDragDirection(message); 
        this.moveLeft();
        break;
      case 38: //Up arrow key
        message = "moving up" + " Top:" + dragObjRect.top + " Left:" + dragObjRect.left;
        this.announceDragDirection(message); 
        this.moveUp();
        break;
      case 39: //right arrow key
        message = "moving right" + " Top:" + dragObjRect.top + " Left:" + dragObjRect.left;
        this.announceDragDirection(message); 
        this.moveRight();
        break;
      case 40: //down arrow key
        message = "moving down" + " Top:" + dragObjRect.top + " Left:" + dragObjRect.left;
        this.announceDragDirection(message);  
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

  showKeyboardDragInstructions(){
    alert('Use the arrow keys to drag this item to the dropzone');
  }

  moveObject(){
    this.renderer.appendChild(this.placeToDrop.nativeElement, this.elementToDrag.nativeElement);
    this.renderer.setStyle(this.elementToDrag.nativeElement, "position", 'static');
    
  }

  announceDragDirection(message,dragObjRect){
    var text = this.renderer.createText(message);
    this.renderer.appendChild(this.liveRegionToUpdate.nativeElement, text);
  
  }

}

