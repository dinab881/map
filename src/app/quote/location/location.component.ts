import { Component, OnInit } from '@angular/core';
import {LatLngLiteral} from '@agm/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  lat = 39.8097343;
  lng = -98.5556199;
  usStates = [];
  paths: Array<LatLngLiteral> = [];
  selected: string = 'Michigan';

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/coords.json').subscribe(
      data => {
        this.usStates = data['states'];

      },
      (err: HttpErrorResponse) => {
        console.log (err);
      }
    );
  }

  selectStateOnMap(event){
    const state = this.usStates.find(( state ) => { return state.name === event});
    if(state){
      this.paths = (state.point).map((item) => {
        return {
          lat: parseFloat(item.lat),
          lng: parseFloat(item.lng)
        };
      });
    }
  }

}
