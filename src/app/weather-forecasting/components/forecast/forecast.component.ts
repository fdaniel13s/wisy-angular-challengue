import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { Forecasting } from '../../models/forecasting';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [],
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecastCity: string = '';
  periods: Forecasting[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    this.registerChartComponents();
    this.route.paramMap.subscribe(params => {
      this.forecastCity = params.get('city')!;
      this.getForecastPeriods(this.forecastCity);
    });
  }

  private registerChartComponents(): void {
    Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
  }

  private getForecastPeriods(cityCode: string): void {
    this.weatherService.getWeatherForecasting(cityCode).subscribe({
      next: (data) => {
        this.periods = data.properties.periods.map((period: any) =>
          new Forecasting(period.number, period.name, period.temperature)
        );
        this.renderChart();
      },
      error: (err) => {
        console.error('Error fetching forecast periods:', err);
      }
    });
  }

  private renderChart(): void {
    const labels = this.periods.map((period: Forecasting) => period.name);
    const data = this.periods.map((period: Forecasting) => period.temperature);

    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Temperature Forecast',
        data: data,
        fill: true,
        borderColor: 'rgb(23,22,22)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.1
      }]
    };

    const chartOptions = {
      responsive: true,
      backgroundColor: 'rgb(255, 255, 255)',
      borderWidth: 4,
      cornerRadius: 20,
      hoverBorderColor: 'rgb(255,255,255)',
      borderColor: 'rgb(0, 0, 0)',
      label : 'Temperature Forecast',
      mode: 'point',
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'rgb(0, 0, 0)',
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            color: 'rgb(0, 0, 0)'
          }
        },
        y: {
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          ticks: {
            color: 'rgb(0, 0, 0)'
          }
        }
      }
    };

    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: chartData,
          options: chartOptions
        });
      } else {
        console.error('Failed to get 2D context');
      }
    } else {
      console.error('Canvas element not found');
    }
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
