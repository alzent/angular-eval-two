import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'app';

  //
  // Two way data binding demonstration
  //

  fg = "#00ffff";
  bg = "#0000ff";

  //
  // Event-Demonstration
  //

  upperCase: string = '';
  lowerCase: string = '';

  // Referenz auf ein View-Baustein
  @ViewChild('inputFieldMyRef') inputBox;
  
  // wird bei einem input-Event aufgerufen
  textInputEventProcessing(event){
    this.upperCase = event.target.value.toUpperCase();
    this.lowerCase = event.target.value.toLowerCase();
  }

  // lifecycle method
  ngAfterViewInit() {
    this.inputBox.nativeElement.focus();
  }

}
