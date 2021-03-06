import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatList } from '@angular/material/list';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getWeathers();
  }

  getWeathers() {
    this.http.get('http://localhost:5000/weatherforecast').subscribe(response => {
      this.weathers = response;
    }, error => {
      console.log(error);
    });
  }

}
