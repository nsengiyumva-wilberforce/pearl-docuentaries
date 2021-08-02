import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DocumentariesComponent } from './documentaries/documentaries.component';
import { FeaturesComponent } from './features/features.component';
import { VideosComponent } from './videos/videos.component';
import { BlogComponent } from './blog/blog.component';
import { PearlComponent } from './pearl/pearl.component';
import { BlogModule } from './blog/blog.module';
import { PearlModule } from './pearl/pearl.module';
import { VideosModule } from './videos/videos.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DocumentariesComponent,
    FeaturesComponent,
    VideosComponent,
    BlogComponent,
    PearlComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogModule,
    PearlModule,
    VideosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
