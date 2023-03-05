import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeV1Component } from './qr-code-v1/qr-code-v1.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    QrCodeV1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'v1',
        component: QrCodeV1Component
      }
    ])
  ]
})
export class QrCodeModule { }
