import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  colorBox1:string='#3D0434';
  colorBox2:string="#061532";
  colorBox3:string="#523500";

  colortxtStyles1: { [key: string]: string } = {
    width: '140px',
    height: '40px',
    borderRadius: '20px',
    border: 'none',
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '400',
    color: 'white',
    fontSize: '16px',
    letterSpacing: '1px',
    backgroundColor: this.colorBox1,
    boxShadow: '6px 6px 4px rgba(0, 0, 0, 0.3)'
  };

  colortxtStyles2: { [key: string]: string } = {
    width: '140px',
    height: '40px',
    borderRadius: '20px',
    border: 'none',
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '400',
    color: 'white',
    fontSize: '16px',
    letterSpacing: '1px',
    backgroundColor: this.colorBox2,
    boxShadow: '6px 6px 4px rgba(0, 0, 0, 0.3)'
  };

  colortxtStyles3: { [key: string]: string } = {
    width: '140px',
    height: '40px',
    borderRadius: '20px',
    border: 'none',
    textAlign: 'center',
    fontFamily: 'Lato, sans-serif',
    fontWeight: '400',
    color: 'white',
    fontSize: '16px',
    letterSpacing: '1px',
    backgroundColor: this.colorBox3,
    boxShadow: '6px 6px 4px rgba(0, 0, 0, 0.3)'
  };

  bodyBgStyles: { [key: string]: string } = {
    'background-size': 'contain',
    'background-repeat': 'no-repeat',
    'height': '100vh',
    'background-image': 'linear-gradient(to right top, #3d0434, #330b37, #290f38, #1f1238, #141436, #1f1436, #281335, #301334, #46112c, #53171f, #572410, #523500)'
  };

  changeColor(inp:number, event:any){
    if(inp===1){
      this.colorBox1=event.target.value;
    }
    else if(inp===2){
      this.colorBox2=event.target.value;
    }
    else if(inp===3){
      this.colorBox3=event.target.value;
    }
    // console.log("hiii")
  }

  Background:string ='linear-gradient(to right top,#3D0434,#061532,#523500 )'
  generateBackground() {
    const gradientValue = `linear-gradient(to right top, ${this.colorBox1}, ${this.colorBox2}, ${this.colorBox3})`;
    this.bodyBgStyles['background-image'] = gradientValue;
    this.Background=gradientValue;
  }

  copyText() {
    const tempElement = document.createElement('textarea');
    tempElement.value = this.Background;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
  }
}
