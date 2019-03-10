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

  getKeyAndMove($event){
    console.log('in getKeyAndMove'); 
    console.log(event); 

  }

}
