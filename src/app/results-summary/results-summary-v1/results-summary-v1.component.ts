import {Component, ElementRef} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-results-summary-v1',
  templateUrl: './results-summary-v1.component.html',
  styleUrls: ['./results-summary-v1.component.scss']
})
export class ResultsSummaryV1Component {
  data = [
    {
      category: 'Reaction',
      score: 80,
      icon: 'assets/results-summary/icon-reaction.svg',
      color: 'red'
    },
    {
      category: 'Memory',
      score: 92,
      icon: 'assets/results-summary/icon-memory.svg',
      color: 'yellow'
    },
    {
      category: 'Verbal',
      score: 61,
      icon: 'assets/results-summary/icon-verbal.svg',
      color: 'green'
    },
    {
      category: 'Visual',
      score: 72,
      icon: 'assets/results-summary/icon-visual.svg',
      color: 'blue'
    }
  ];

  constructor(private title: Title,
              private elementRef: ElementRef) {
    title.setTitle('results-summary');
    (window as any)['resultsSum'] = this;
  }

  toggleDebug() {
    const classList = this.elementRef.nativeElement.classList;
    if (classList.contains('debug')) {
      classList.remove('debug');
    } else {
      classList.add('debug');
    }
  }
}
