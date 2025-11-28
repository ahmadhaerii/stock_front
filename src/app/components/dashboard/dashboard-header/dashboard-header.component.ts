import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardHeaderLabels, IDashboardHeaderLabel } from './dashboard-header.label';
import { LabelManagerService } from 'src/app/services/label-manager.service';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent implements OnInit{
  dashboardHeaderLabels: IDashboardHeaderLabel = {} as IDashboardHeaderLabel;
  @Output() menuSelectEmit = new EventEmitter<string>();
  isMenuOpen = true;
  constructor(private labelManagerService: LabelManagerService) {}
  ngOnInit(): void {
    this.dashboardHeaderLabels =
      this.labelManagerService.getLabels<IDashboardHeaderLabel>(
        DashboardHeaderLabels
      );
  }

  onMenuSelect() {
    this.menuSelectEmit.emit();
    this.isMenuOpen = !this.isMenuOpen;
  }
}
