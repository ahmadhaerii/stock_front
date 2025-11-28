import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Links } from './utils/links';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { FareStructureComponent } from './components/fare-structure/fare-structure/fare-structure.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ReportComponent } from './components/report/report.component';

const routes: Routes = [
  {
    path: Links.login.name,
    component: LoginComponent,
  },
  {
    path: Links.dashboard.name,
    component: DashboardComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: Links.fareStructure.name,
        component: FareStructureComponent,
      },
      {
        path: Links.report.name + '/:id',
        component: ReportComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: Links.login.name,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
