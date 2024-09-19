# Angular Challenge

### Developed by: Fernando Daniel Quispe Condori 
#### Github: [fdaniel13s](https://github.com/fdaniel13s)

## Objective
Create an Angular app that fetches data from an API and visualizes it using Chart.js. The app should display a line chart representing the data.

## Requirements
- **Home Screen**: Create a home screen that has the following list of weather forecasting options:
  - District of Columbia Forecast (LWX)
  - Kansas Forecast (TOP)
- **Routing**: Each option should redirect to `/weather` with their corresponding identifier. (Example: `/weather/LWX`, `/weather/TOP`)
- **API Fetching**: Fetch data from an API endpoint using an HTTP request in an Angular service and retrieve the temperatures forecasted from the response.
  - KANSAS: `https://api.weather.gov/gridpoints/TOP/31,80/forecast`
  - COLUMBIA: `https://api.weather.gov/gridpoints/LWX/31,80/forecast`
- **Data Parsing**: Parse the JSON response and extract the necessary data for the chart.
- **Chart Component**: Implement a component that renders a line chart using the Chart.js library.
- **Chart Display**: Display the chart on a view in the Angular app, showing the data in a visually appealing manner.
- **Customization**: Customize the appearance of the chart, including labels, colors, and tooltips.
