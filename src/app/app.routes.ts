import { Routes } from '@angular/router';
import {HomeScreenComponent} from "./weather-forecasting/pages/home/home-screen/home-screen.component";
import {ForecastComponent} from "./weather-forecasting/components/forecast/forecast.component";

export const routes: Routes = [
  {
    path: '', component: HomeScreenComponent
  },
  {
    path: 'forecast/:city', component: ForecastComponent
  }

];
