import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonComponentModule } from 'src/app/shared/common.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        HomeRoutingModule,
        CommonComponentModule,
    ]
})
export class HomeModule { }