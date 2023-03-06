import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {StatsPreviewCardV1Component} from "./stats-preview-card/stats-preview-card-v1/stats-preview-card-v1.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'qr-code',
    loadChildren: () => import('./qr-code/qr-code.module').then(m => m.QrCodeModule)
  },
  {
    path: 'stats-preview-card/v1',
    component: StatsPreviewCardV1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
