import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  colortxtStyles: { [key: string]: string } = {
    width: '140px',
    height: '40px',
    borderRadius: '20px',
    border: '0px solid transparent',
    /* paddingLeft: '50px', */
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '400',
    color: 'rgb(0, 0, 0)',
    fontSize: '16px',
    letterSpacing: '1px'
  };
}
