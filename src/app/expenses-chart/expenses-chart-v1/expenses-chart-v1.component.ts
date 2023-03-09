import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-expenses-chart-v1',
  templateUrl: './expenses-chart-v1.component.html',
  styleUrls: ['./expenses-chart-v1.component.scss']
})
export class ExpensesChartV1Component {
  data = [
    {
      day: 'mon',
      amount: 17.45
    },
    {
      day: 'tue',
      amount: 34.91
    },
    {
      day: 'wed',
      amount: 52.36
    },
    {
      day: 'thu',
      amount: 31.07
    },
    {
      day: 'fri',
      amount: 23.39
    },
    {
      day: 'sat',
      amount: 43.28
    },
    {
      day: 'sun',
      amount: 25.48
    }
  ];

  maxAmount = 0;

  constructor(private title: Title) {
    title.setTitle('expenses-chart');
    this.data.forEach(item => {
      if (item.amount > this.maxAmount) {
        this.maxAmount = item.amount;
      }
    })
  }

  displayHeight(amount: number) {
    return amount / this.maxAmount;
  }
}
