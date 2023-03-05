import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ''
  // },
  {
  path: 'qr-code',
  loadChildren: () => import('./qr-code/qr-code.module').then(m => m.QrCodeModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
