import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  temperature: number = 0;
  tempTypes = ['Celsius', 'Fairenheit'];
  tempConversionType = '';
  converted: string = '';
  isInputted = false;

  constructor() {}

  ngOnInit(): void {}

  setTemperature(newTemp: string) {
    this.temperature = +newTemp;
    this.isInputted = true;
  }

  onConversionChoice(type: string){
    this.tempConversionType = type;
  }

  onClear() {
    this.tempConversionType = '';
    this.converted = '';
    this.temperature = 0;
    this.isInputted = false;
  }

  onSubmit(type: string) {
    if (type === 'Celsius') {
      this.converted = ((this.temperature - 32) * (5 / 9)).toString();
    } else if (type === 'Fairenheit') {
      this.converted = (this.temperature * 1.8 + 32).toString();
    } else this.converted = 'Sorry, something went wrong';
  }
}
