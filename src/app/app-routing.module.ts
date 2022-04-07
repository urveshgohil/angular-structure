import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Company'
        },
        children: [
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
            },
            // {
            //     path: '404',
            //     loadChildren: () => import('./pages/no-page/no-page.module').then(m => m.NoPageModule)
            // },
            // {
            //     path: '**',
            //     loadChildren: () => import('./pages/no-page/no-page.module').then(m => m.NoPageModule)
            // }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true,
            scrollPositionRestoration: 'enabled',
            initialNavigation: 'enabled'
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
