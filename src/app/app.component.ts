import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import {WeatherData} from "./models/weather.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private weatherService:WeatherService){
  }

  weatherData?:WeatherData;
  cityName:string='Bentota';


  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';

  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
  }

  private  getWeatherData(cityName:string){
    this.weatherService.getWeatherData(cityName)
      .subscribe({
        next:(response) => {
          this.weatherData=response;
          console.log(response);
        }
      });
  }
}
