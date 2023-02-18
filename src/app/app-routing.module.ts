import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainChatComponent } from './pages/main-chat/main-chat.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: "main", component: MainChatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
