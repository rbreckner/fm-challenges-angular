import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-stats-preview-card-v1',
  templateUrl: './stats-preview-card-v1.component.html',
  styleUrls: ['./stats-preview-card-v1.component.scss']
})
export class StatsPreviewCardV1Component {
  constructor(private title: Title) {
    title.setTitle('stats-preview-card');
  }
}
