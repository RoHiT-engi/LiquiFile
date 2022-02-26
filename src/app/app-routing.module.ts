import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateComponent } from './Pages/generate/generate.component';
import {HomeComponent} from './Pages/home/home.component';
import {ScanComponent} from './Pages/scan/scan.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
    { path: 'Scan', component: ScanComponent },
    { path: 'Generate', component: GenerateComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
