
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainChatComponent } from './main-chat/main-chat.component';


const routes: Routes = [
    { path: '', redirectTo: 'main/chat', pathMatch: 'full' },
    { path: "main", 
    component: PagesComponent,
    children:[{
        path:'chat',
        component:MainChatComponent,
        data:{
            parent:'main',
            title:'chat'
        }
    }]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }