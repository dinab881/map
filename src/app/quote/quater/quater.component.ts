import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material';

export interface Quater {
  quater: string;
  class3: number;
  class4: number;
  butterfat: number;
  otherSolids: number;
  protein: number;
  yield: number;
}

const quoterData: Quater [] = [
  { quater: '2019 Q2', class3: 15.08, class4: 16.11, butterfat: 2.7587, protein: 1.6198, otherSolids: 0.207, yield: 6.924},
  { quater: '2019 Q2', class3: 15.08, class4: 16.11, butterfat: 2.7587, protein: 1.6198, otherSolids: 0.207, yield: 6.924},
  { quater: '2019 Q2', class3: 15.08, class4: 16.11, butterfat: 2.7587, protein: 1.6198, otherSolids: 0.207, yield: 6.924},
  { quater: '2019 Q2', class3: 15.08, class4: 16.11, butterfat: 2.7587, protein: 1.6198, otherSolids: 0.207, yield: 6.924},
  { quater: '2019 Q2', class3: 15.08, class4: 16.11, butterfat: 2.7587, protein: 1.6198, otherSolids: 0.207, yield: 6.924},
];
@Component({
  selector: 'app-quater',
  templateUrl: './quater.component.html',
  styleUrls: ['./quater.component.scss']
})
export class QuaterComponent implements OnInit {


  displayedColumns: string[] = ['select', 'quater', 'class3', 'class4', 'butterfat', 'protein', 'otherSolids', 'yield'];
  dataSource = new MatTableDataSource<Quater>(quoterData);
  selection = new SelectionModel<Quater>(false, []);

  constructor() { }

  ngOnInit() {
  }


}
