import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { declarationCores } from './core.module';
import { declarationIcons } from './icons.module';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DashboardHeaderComponent } from './components/dashboard/dashboard-header/dashboard-header.component';
import { SlideMenuComponent } from './components/dashboard/side-menu/slide-menu.component';
import { DashboardContentComponent } from './components/dashboard/dashboard-content/dashboard-content.component';
import { NiraModalModule, NiraModalService } from 'nira-modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FareStructureComponent } from './components/fare-structure/fare-structure/fare-structure.component';

import { LoginComponent } from './components/login/login.component';
import { FareStructureDetailsComponent } from './components/fare-structure/fare-structure-details/fare-structure-details.component';
import { FareStructureFormComponent } from './components/fare-structure/fare-structure-form/fare-structure-form.component';
import { FormControlPipe } from './utils/pipes/form-control.pipe';
import { FareStructureItemsComponent } from './components/fare-structure/fare-structure-items/fare-structure-items.component';
import { FareStructureItemComponent } from './components/fare-structure/fare-structure-item/fare-structure-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ReportComponent } from './components/report/report.component';
import { FalconLibModule } from 'nira-falcon';
import { NiraDatePickerModule } from 'nira-date-picker';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { DbConfig } from './store/dbConfig';
import { StockPageComponent } from './components/stock-page/stock-page.component';
export let AppInjector: Injector;

@NgModule({
  declarations: [
    AppComponent,

    DashboardComponent,
    StockPageComponent,





    DashboardContentComponent,
    DashboardHeaderComponent,
    FareStructureComponent,
    FareStructureDetailsComponent,
    FareStructureFormComponent,
    FareStructureItemComponent,
    FareStructureItemsComponent,
    ReportComponent,
    LoginComponent,
    SlideMenuComponent,
    FormControlPipe,
    declarationIcons,
    declarationCores,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NiraModalModule,
    HttpClientModule,
    FormsModule,
    NiraDatePickerModule,
    FalconLibModule,
    ReactiveFormsModule,
    NgxIndexedDBModule.forRoot(DbConfig),
  ],
  exports: [FormControlPipe],
  providers: [
    {
      provide: 'NiraModalService',
      useClass: NiraModalService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    AppInjector = this.injector;
  }
}
