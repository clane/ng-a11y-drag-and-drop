import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { element } from '@angular/core/src/render3';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private renderer: Renderer2) { }

  title = 'A11y Drag and Drop';
  @ViewChild('dragObj') elementToDrag:ElementRef;
  @ViewChild('dropzone') placeToDrop:ElementRef;
  @ViewChild('liveRegion') liveRegionToUpdate:ElementRef;
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

    let keyCode = $event.keyCode;

    if (keyCode !== 9) {
      $event.preventDefault();
    }

    let dragObjRect = this.elementToDrag.nativeElement.getBoundingClientRect();
    let dropzoneRect = this.placeToDrop.nativeElement.getBoundingClientRect();

    if (dragObjRect.top > dropzoneRect.top &&
      dragObjRect.left > dropzoneRect.left &&
      dragObjRect.bottom < dropzoneRect.bottom &&
      dragObjRect.right < dropzoneRect.right
    ) {
      alert('over drop zone, press the OK Button or the Enter key');
      this.renderer.appendChild(this.placeToDrop.nativeElement, this.elementToDrag.nativeElement);
      this.renderer.setStyle(this.elementToDrag.nativeElement, "position", 'static');
    }

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
    let dragObjRect = this.elementToDrag.nativeElement.getBoundingClientRect();
    let dropzoneRect = this.placeToDrop.nativeElement.getBoundingClientRect();
    this.left = this.left - 5;
    this.renderer.setStyle(this.elementToDrag.nativeElement, "left", this.left + 'px');
    let message = "moving left" + " Top:" + dragObjRect.top + " Left:" + dragObjRect.left;
    this.updateLiveRegion(message);
  }

  moveUp() {
    let dragObjRect = this.elementToDrag.nativeElement.getBoundingClientRect();
    let dropzoneRect = this.placeToDrop.nativeElement.getBoundingClientRect();
    this.top = this.top - 5;
    this.renderer.setStyle(this.elementToDrag.nativeElement, "top", this.top + 'px');
    let message = "moving up" + " Top:" + dragObjRect.top + " Left:" + dragObjRect.left;
    this.updateLiveRegion(message);
    
  }

  moveRight() {
    let dragObjRect = this.elementToDrag.nativeElement.getBoundingClientRect();
    let dropzoneRect = this.placeToDrop.nativeElement.getBoundingClientRect();
    this.left = this.left + 5;
    this.renderer.setStyle(this.elementToDrag.nativeElement, "left", this.left + 'px');
    let message = "moving right" + " Top:" + dragObjRect.top + " Left:" + dragObjRect.left;
    this.updateLiveRegion(message);
  }

  moveDown() {
    let dragObjRect = this.elementToDrag.nativeElement.getBoundingClientRect();
    let dropzoneRect = this.placeToDrop.nativeElement.getBoundingClientRect();
    this.top = this.top + 5;
    this.renderer.setStyle(this.elementToDrag.nativeElement, "top", this.top + 'px');
    let message = "moving down" + " Top:" + dragObjRect.top + " Left:" + dragObjRect.left;
    this.updateLiveRegion(message);
  }

  showKeyboardDragInstructions() {
    let message = 'Use the arrow keys to drag this item to the dropzone';
    this.updateLiveRegion(message);
  }

  moveObject() {
    this.renderer.appendChild(this.placeToDrop.nativeElement, this.elementToDrag.nativeElement);
    this.renderer.setStyle(this.elementToDrag.nativeElement, "position", 'static');
    this.updateLiveRegion("The draggable object has been moved to the drop zone");
  }

  updateLiveRegion(message) {
    var text = this.renderer.createText(message);
    this.renderer.appendChild(this.liveRegionToUpdate.nativeElement, text);
  }



}

