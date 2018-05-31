import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class CalculatorComponent implements OnInit {
  calculation: any = {};
  listOperation = [
    { id: 0, name: "Add" },
    { id: 1, name: "Subtract" },
    { id: 2, name: "Multiply" },
    { id: 3, name: "Divide" },
  ];
  errorMessage: String;


  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  
  processOperation() {
    this.errorMessage = '';
    this.http.post('/api/calculator', this.calculation)
      .subscribe(data => {
        this.calculation = data;
      }, (err) => {
        console.log(err);
        this.errorMessage = err.error.Message;
      }
      );
  }
  
  SetOperation(selectedId: any) {
    this.calculation.OperatorId = parseInt(selectedId, 10);
  }





}
