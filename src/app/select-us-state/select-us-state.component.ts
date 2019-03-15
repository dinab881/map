import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {AgmMap, AgmPolygon, GoogleMapsAPIWrapper, LatLngLiteral, PolygonManager} from '@agm/core';
@Component({
  selector: 'app-select-us-state',
  templateUrl: './select-us-state.component.html',
  styleUrls: ['./select-us-state.component.scss'],
  providers: [PolygonManager, GoogleMapsAPIWrapper]
})
export class SelectUsStateComponent implements OnInit {

  lat = 39.8097343;
  lng = -98.5556199;
  usStates = [];
  paths: Array<LatLngLiteral> = [];
  constructor(
    private http: HttpClient
    ) {
  }

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
