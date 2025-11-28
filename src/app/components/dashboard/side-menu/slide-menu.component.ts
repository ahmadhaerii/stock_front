import { Component, Input, Type } from '@angular/core';
import { LabelManagerService } from 'src/app/services/label-manager.service';
import { Links, routeLinks } from 'src/app/utils/links';
import { ISlideMenuLabel, SlideMenuLabels } from './slide-menu.label';
import { PaymentsIconComponent } from '../../svg-icons/payments-icon/payments-icon.component';
import { AirlineSeatReclineNormalIconComponent } from '../../svg-icons/airline-seat-recline-normal-icon/airline-seat-recline-normal-icon.component';
import { MonetizationOnIconComponent } from '../../svg-icons/monetization-on-icon/monetization-on-icon.component';
import { SelectAllIconComponent } from '../../svg-icons/select-all-icon/select-all-icon.component';
export interface Item {
  id: number;
  title: string;
  icon: Type<any> | null;
  link: routeLinks | null;
  type: string;
  child: any;
}

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.scss'],
})
export class SlideMenuComponent {
  labels: ISlideMenuLabel =
    this.labelManagerService.getLabels<ISlideMenuLabel>(SlideMenuLabels);
  menuItemClicked!: Item;
  childItemClicked!: any;
  menuList: Item[] = [
    {
      id: 1,
      title: this.labels.financialReports,
      icon: PaymentsIconComponent,
      link: null,
      type: 'menu',
      child: [
        {
          id: 1,
          title: this.labels.trainRevenue,
          link: this.links.report.route + '/6',
          key: 'trainRevenue',
        },
        {
          id: 2,
          title: this.labels.earningsReportForEachTrain,
          link: this.links.report.route + '/7',
          key: 'earningsReportForEachTrain',
        },
        {
          id: 3,
          title: this.labels.financialReportingOfAgenciesInATimeRange,
          link: this.links.report.route + '/8',
          key: 'financialReportingOfAgenciesInATimeRange',
        },

        {
          id: 4,
          title: this.labels.reportOfRefunds,
          link: this.links.report.route + '/9',
          key: 'reportOfRefunds',
        },
        {
          id: 5,
          title: this.labels.agenciesFinancialReports,
          link: this.links.report.route + '/13',
          key: 'agenciesFinancialReports',
        },
        {
          id: 6,
          title: this.labels.financialPerformanceReportByAgency,
          link: this.links.report.route + '/14',
          key: 'financialPerformanceReportByAgency',
        },
        {
          id: 7,
          title: this.labels.trainRevenueReportOverPeriodOfTime,
          link: this.links.report.route + '/15',
          key: 'trainRevenueReportOverPeriodOfTime',
        },
        {
          id: 8,
          title: this.labels.trainRevenuePerTime,
          link: null,
          key: 'trainRevenuePerTime',
        },
        {
          id: 9,
          title: this.labels.trainRevenueReportBasedOnDuplicateTickets,
          link: null,
          key: 'trainRevenueReportBasedOnDuplicateTickets',
        },

        {
          id: 10,
          title: this.labels.totalDisplacementInATimeRange,
          link: null,
          key: 'totalDisplacementInATimeRange',
        },
        {
          id: 11,
          title: this.labels.trainDisplacementInKilometers,
          link: null,
          key: 'trainDisplacementInKilometers',
        },
        {
          id: 12,
          title: this.labels.trainDisplacementInKilometersInATimeRange,
          link: null,
          key: 'trainDisplacementInKilometersInATimeRange',
        },
        {
          id: 13,
          title: this.labels.reportOfOptionalMealsTaken,
          link: null,
          key: 'reportOfOptionalMealsTaken',
        },
      ],
    },
    {
      id: 2,
      title: this.labels.seatReportsAndOccupancyRate,
      icon: AirlineSeatReclineNormalIconComponent,
      link: null,
      type: 'menu',
      child: [
        {
          id: 1,
          title: this.labels.occupancyRateReport,
          link: null,
          key: 'occupancyRate',
        },
        {
          id: 2,
          title: this.labels.SearchReportForAPassengerOnAnUnknownTrain,
          link: null,
          key: 'InterRouteQuotaReportOfTrainsAndTheirUsageRate',
        },
        {
          id: 3,
          title: this.labels.combinedReportOfPassengersByDateOfDeparture,
          link: null,
          key: 'combinedReportOfPassengersByDateOfDeparture',
        },

        {
          id: 4,
          title: this.labels.reportOfPassengersByQuota,
          link: null,
          key: 'reportOfPassengersByQuota',
        },
        {
          id: 5,
          title: this.labels.reportOfUnsoldSeatsByQuota,
          link: null,
          key: 'reportOfUnsoldSeatsByQuota',
        },

        {
          id: 6,
          title: this.labels.trainPassengerList,
          link: null,
          key: 'trainPassengerList',
        },
        {
          id: 7,
          title: this.labels.searchReportBasedOnTicketSeriesAndPassengeName,
          link: null,
          key: 'searchReportBasedOnTicketSeriesAndPassengeName',
        },
      ],
    },
    {
      id: 3,
      title: this.labels.marketReports,
      icon: MonetizationOnIconComponent,
      link: null,
      type: 'menu',
      child: [
        {
          id: 1,
          title: this.labels.SalesReportOfEachSalesRepresentative,
          link: null,
          key: 'SalesReportOfEachSalesRepresentative',
        },
        {
          id: 2,
          title: this.labels.agencyPerformanceReport,
          link: null,
          key: 'agencyPerformanceReport',
        },
        {
          id: 3,
          title: this.labels.bankDiscrepanciesReport,
          link: null,
          key: 'bankDiscrepanciesReport',
        },
        {
          id: 4,
          title: this.labels.canceledTickets,
          link: null,
          key: 'canceledTickets',
        },
        {
          id: 5,
          title: this.labels.commissionReportOfEachSalesRepresentative,
          link: null,
          key: 'commissionReportOfEachSalesRepresentative',
        },
        {
          id: 6,
          title: this.labels.dayByDayReportOfTheSaleOfTrainByDateOfDeparture,
          link: null,
          key: 'dayByDayReportOfTheSaleOfTrainByDateOfDeparture',
        },
        {
          id: 7,
          title: this.labels.detailedReportOfRefundSalesByAgencies,
          link: null,
          key: 'detailedReportOfRefundSalesByAgencies',
        },
        {
          id: 8,
          title: this.labels.detailedReportOfTicketSalesByAgencies,
          link: null,
          key: 'detailedReportOfTicketSalesByAgencies',
        },
        {
          id: 9,
          title: this.labels.duplicateAndAdministrativeTicketReport,
          link: null,
          key: 'duplicateAndAdministrativeTicketReport',
        },
        {
          id: 10,
          title: this.labels.duplicateTicketsControlReport,
          link: null,
          key: 'duplicateTicketsControlReport',
        },
        {
          id: 11,
          title: this.labels.hourlySalesReportInSalesCenters,
          link: null,
          key: 'hourlySalesReportInSalesCenters',
        },

        {
          id: 12,
          title: this.labels.onLineSalesReport,
          link: null,
          key: 'onLineSalesReport',
        },
        {
          id: 13,
          title: this.labels.reportOfAmountsToBeDepositedInToTheOwnersAccount,
          link: null,
          key: 'reportOfAmountsToBeDepositedInToTheOwnersAccount',
        },
        {
          id: 14,
          title: this.labels.reportOfIssuedTicketsBySalesType,
          link: null,
          key: 'reportOfIssuedTicketsBySalesType',
        },
        {
          id: 15,
          title: this.labels.reportOfOnlineRegistrationsBasedOnDate,
          link: null,
          key: 'reportOfOnlineRegistrationsBasedOnDate',
        },
        {
          id: 16,
          title: this.labels.reportOfRecalculationOfTheShareOfAgencies,
          link: null,
          key: 'reportOfRecalculationOfTheShareOfAgencies',
        },
        {
          id: 17,
          title: this.labels.reportOfRefunds,
          link: null,
          key: 'reportOfRefunds',
        },
        {
          id: 18,
          title:
            this.labels.reportOnDeterminingTheAmountOfOnlineShoppingByBanks,
          link: null,
          key: 'reportOnDeterminingTheAmountOfOnlineShoppingByBanks',
        },
        {
          id: 19,
          title: this.labels.retailSalesReportWithinAaDateRange,
          link: null,
          key: 'retailSalesReportWithinAaDateRange',
        },
        {
          id: 20,
          title: this.labels.returnTicketsReport,
          link: null,
          key: 'returnTicketsReport',
        },
        {
          id: 21,
          title: this.labels.salesReportWithFinancialAnalysis,
          link: null,
          key: 'salesReportWithFinancialAnalysis',
        },
        {
          id: 22,
          title: this.labels.soldTicketsReport,
          link: null,
          key: 'soldTicketsReport',
        },
        {
          id: 23,
          title: this.labels.theMostSaleReport,
          link: null,
          key: 'theMostSaleReport',
        },
      ],
    },
    {
      id: 4,
      title: this.labels.fareStructure,
      icon: SelectAllIconComponent,
      link: null,
      type: 'menu',
      child: [
        {
          id: 1,
          title: this.labels.ticketPriceAnalysisReportByHallType,
          link: this.links.fareStructure.route,
          key: 'ticketPriceAnalysisReportByHallType',
        },
      ],
    },
  ];

  @Input() isMenuSelect = false;
  get links() {
    return Links;
  }
  constructor(private labelManagerService: LabelManagerService) {}

  onMenuItemClick(menuItem: Item) {
    if (this.menuItemClicked == menuItem) {
      this.menuItemClicked = {} as Item;
    } else {
      this.menuItemClicked = menuItem;
    }
  }

  onItemChildClick(child: any) {
    this.childItemClicked = child;
  }
}
