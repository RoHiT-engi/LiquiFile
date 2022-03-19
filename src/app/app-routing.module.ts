import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateComponent } from './Pages/generate/generate.component';
import {HomeComponent} from './Pages/home/home.component';
import {ScanComponent} from './Pages/scan/scan.component';
import {OutputScreenComponent} from './Pages/output-screen/output-screen.component';  
import { ScanoutputscreenComponent } from './Pages/scanoutputscreen/scanoutputscreen.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
    { path: 'scan', component: ScanComponent },
    { path: 'generate', component: GenerateComponent },
    { path: 'outputScreen', component: OutputScreenComponent },
    { path: 'scanoutputScreen', component: ScanoutputscreenComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
