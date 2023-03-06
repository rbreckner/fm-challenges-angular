import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-qr-code-v1',
  templateUrl: './qr-code-v1.component.html',
  styleUrls: ['./qr-code-v1.component.scss']
})
export class QrCodeV1Component {

  constructor(private title: Title) {
    title.setTitle('qr-code-v1');
  }
}
