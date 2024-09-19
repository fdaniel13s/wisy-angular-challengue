import { Injectable } from '@angular/core';
import {environment} from "../../../environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  baseUrl =environment.baseUrl;

  constructor(private http:HttpClient) { }

  /**
   * Function to get the weather forecasting for a city
   * @param cityCode
   */
  getWeatherForecasting(cityCode:String){
    return this.http.get<any>(this.baseUrl + cityCode + "/31,80/forecast");
  }
}
