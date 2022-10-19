import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mom';
  x="mahmoud elsayed";
  hstyle="blue";
  
  Lol(){
    this.hstyle="yellow";
      
  }
  moo="";



  hiii =  true ;


  
  changeb()
  {
    this.hiii=false
  }

}
