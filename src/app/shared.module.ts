import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HighchartsChartModule } from 'highcharts-angular';
import {HeaderComponent} from './header/header.component';
import {NotificationCardComponent} from './notification-card/notification-card.component';
import {TranslateModule} from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchSchool} from './myschools/search.filter' ;
import {FilterPipe} from '../app/home/search.filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule, 
    IonicModule,
    TranslateModule.forChild()
  ],
  declarations: [
    HeaderComponent,NotificationCardComponent, SearchSchool,FilterPipe
  ],
  exports: [
    HighchartsChartModule,HeaderComponent,NotificationCardComponent, SearchSchool,FilterPipe
  ]
})
export class SharedModule {}