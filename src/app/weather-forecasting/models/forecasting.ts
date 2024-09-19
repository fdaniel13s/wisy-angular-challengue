/**
 * This is the model class for Forecasting
 * So far, only data that is being used is being declared
 */
export class Forecasting {
  number: Number;
  name: string;
  temperature: Number;

constructor(number: Number, name: string, temperature: Number) {
  this.number = number;
  this.name = name;
  this.temperature = temperature;
}

}
