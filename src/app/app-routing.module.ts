import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentariesComponent } from './documentaries/documentaries.component';
import { PearlComponent } from './pearl/pearl.component';
import { VideosComponent } from './videos/videos.component';

const routes: Routes = [
  { path: 'pearl', component: PearlComponent },
  { path: 'documentaries', component: DocumentariesComponent },
  { path: 'videos', component: VideosComponent },
  { path: '', redirectTo: '/pearl', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
