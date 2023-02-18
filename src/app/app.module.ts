import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MainChatComponent } from './pages/main-chat/main-chat.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { AsideComponent } from './shared/aside/aside.component';
import { PagesComponent } from './pages/pages.component';


@NgModule({
  declarations: [
    AppComponent,
    MainChatComponent,
    ToolbarComponent,
    AsideComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule ,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
