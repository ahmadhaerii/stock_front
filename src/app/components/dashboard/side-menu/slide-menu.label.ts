import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ISlideMenuLabel {
  financialReports: string;
  seatReportsAndOccupancyRate: string;
  fareStructure: string;
  marketReports: string;
  trainRevenue: string;
  trainRevenuePerTime: string;
  occupancyRateReport: string;
  canceledTickets: string;
  SalesReportOfEachSalesRepresentative: string;
  commissionReportOfEachSalesRepresentative: string;
  returnTicketsReport: string;
  trainPassengerList: string;
  trainDisplacementInKilometers: string;
  trainDisplacementInKilometersInATimeRange: string;
  totalDisplacementInATimeRange: string;
  revenuePerPersonPerKilometer: string;
  agencyPerformanceReport: string;
  soldTicketsReport: string;
  hourlySalesReportInSalesCenters: string;
  theMostSaleReport: string;
  salesReportWithFinancialAnalysis: string;
  reportOfRecalculationOfTheShareOfAgencies: string;
  duplicateAndAdministrativeTicketReport: string;
  reportOfOnlineRegistrationsBasedOnDate: string;
  onLineSalesReport: string;
  bankDiscrepanciesReport: string;
  InterRouteQuotaReportOfTrainsAndTheirUsageRate: string;
  passengerReportsByDateAndTrain: string;
  reportOfIssuedTicketsBySalesType: string;
  reportOfPassengersByQuota: string;
  trainRevenueReportByQuota: string;
  trainRevenueReportBasedOnDuplicateTickets: string;
  ticketPriceAnalysisReportByHallType: string;
  dayByDayReportOfTheSaleOfTrainByDateOfDeparture: string;
  combinedReportOfPassengersByDateOfDeparture: string;
  reportOfOptionalMealsTaken: string;
  reportOfUnsoldSeatsByQuota: string;
  detailedReportOfTicketSalesByAgencies: string;
  detailedReportOfRefundSalesByAgencies: string;
  financialReportingOfAgenciesInATimeRange: string;
  earningsReportForEachTrain: string;
  theReportOfDeterminingTheEmptySeats: string;
  trainOccupancyRateReport: string;
  revenueManagementReportsAndComparisonsOverTime: string;
  agenciesFinancialReports: string;
  financialPerformanceReportByAgency: string;
  trainRevenueReportOverPeriodOfTime: string;
  duplicateTicketsControlReport: string;
  searchReportBasedOnTicketSeriesAndPassengeName: string;
  reportOnDeterminingTheAmountOfOnlineShoppingByBanks: string;
  revenueReportWithDateLimitByOwners: string;
  financialReportsAndInformationByAgencies: string;
  reportOfAmountsToBeDepositedInToTheOwnersAccount: string;
  retailSalesReportWithinAaDateRange: string;
  dailyFinancialOperationsReport: string;
  reportOfRefunds: string;
  SearchReportForAPassengerOnAnUnknownTrain: string;
}

export const SlideMenuLabels: Record<UserLanguage, ISlideMenuLabel> = {
  fa: {
    financialReports: '  گزارشات مالی',
    seatReportsAndOccupancyRate: '   صندلی و ضریب اشغال',
    agenciesFinancialReports: 'گزارش مالي يک آژانس در يک بازه زماني',
    financialPerformanceReportByAgency:
      'گزارش مالي به تفکيک آژانس در يک بازه زماني',
    trainRevenueReportOverPeriodOfTime: 'گزارش درآمد قطارها در یک بازه زمانی',
    fareStructure: 'تجزیه نرخ',
    marketReports: 'گزارشات بازار',
    trainRevenue: ' درآمد هر قطار در هر مسیر',
    occupancyRateReport: 'درصد ظرفیت پر شده هر قطار',
    canceledTickets: ' بلیط های ابطالی',
    trainRevenuePerTime: '  درآمد هر قطار در دوره زمانی ',
    SalesReportOfEachSalesRepresentative: ' فروش هر نماینده فروش',
    commissionReportOfEachSalesRepresentative: ' میزان کارمزد هر نماینده فروش',
    returnTicketsReport: ' بلیتهای استردادی',
    trainPassengerList: ' لیست مسافرین یک قطار',
    trainDisplacementInKilometers: 'نفر کیلومتر جابجا شده هر قطار',
    trainDisplacementInKilometersInATimeRange:
      'نفر کیلومتر جابجا شده هر قطار در یک محدوده زمانی',
    totalDisplacementInATimeRange: 'نفر کیلومتر جابجا شده کلی در دوره زمانی',
    revenuePerPersonPerKilometer: 'میزان درآمد هر نفر کیلومتر ',
    agencyPerformanceReport: ' ریز عملکرد آژانس',
    soldTicketsReport: '  بلیتهای فروش رفته ',
    hourlySalesReportInSalesCenters: ' فروش ساعت به ساعت در مراکز فروش',
    theMostSaleReport: ' بیشترین فروش ',
    salesReportWithFinancialAnalysis: ' ریز فروش همراه با آنالیز مالی هر بلیت',
    reportOfRecalculationOfTheShareOfAgencies: ' محاسبه مجدد سهم آژانسها ',
    duplicateAndAdministrativeTicketReport: ' بلیتهای المثنی و اداری',
    reportOfOnlineRegistrationsBasedOnDate:
      ' ثبت نامهای اینترنتی بر اساس تاریخ',
    onLineSalesReport: ' ریز فروش اینترنتی  ',
    bankDiscrepanciesReport: ' مغایرتهای بانکی  ضریب اشغال ',
    InterRouteQuotaReportOfTrainsAndTheirUsageRate:
      ' سهمیه بین راهی قطارها و میزان استفاده از آنها ',
    passengerReportsByDateAndTrain: ' مسافران به تفکیک تاریخ و قطار',
    reportOfIssuedTicketsBySalesType: '  بلیتهای صادره ',
    reportOfPassengersByQuota: ' گزارش مسافران',
    trainRevenueReportByQuota: ' درآمد قطار به تفکیک موارد',
    trainRevenueReportBasedOnDuplicateTickets:
      ' درآمد قطار بر اساس بلیتهای المثنی، استردادی و بلیتهای اداری',
    ticketPriceAnalysisReportByHallType: ' آنالیز قیمت بلیتها',
    dayByDayReportOfTheSaleOfTrainByDateOfDeparture:
      ' روز به روز فروش یک قطار ',
    combinedReportOfPassengersByDateOfDeparture: ' گزارش ترکیبی مسافران',
    reportOfOptionalMealsTaken: ' غذاهای اختیاری گرفته شده ',
    reportOfUnsoldSeatsByQuota: ' صندلیهای فروش نرفته   ',
    detailedReportOfTicketSalesByAgencies:
      ' ریز فروش بلیت به تفکیک آژانسها و فروشندگان',
    detailedReportOfRefundSalesByAgencies:
      ' ریز فروش استرداد به تفکیک آژانسها و فروشندگان',
    financialReportingOfAgenciesInATimeRange: 'گزارش ريز فروش آژانس',
    earningsReportForEachTrain: ' درآمد هر قطار',
    theReportOfDeterminingTheEmptySeats: ' تعیین صندلیهای خالی هر قطار',
    trainOccupancyRateReport: ' ضریب اشغال قطار',
    revenueManagementReportsAndComparisonsOverTime: ' گزارش مدیریتی درآمد ',
    duplicateTicketsControlReport: ' کنترلی بلیتهای تکراری',
    searchReportBasedOnTicketSeriesAndPassengeName:
      ' جستجو بر اساس سریال بلیت و نام مسافر',
    reportOnDeterminingTheAmountOfOnlineShoppingByBanks:
      ' تعیین میزان خرید اینترنتی به تفکیک بانکها',
    revenueReportWithDateLimitByOwners:
      ' درآمد با محدودیت تاریخی به تفکیک مالکین',
    financialReportsAndInformationByAgencies:
      '  اطلاعات مالی به تفکیک آژانسها و نمایندگیها',
    reportOfAmountsToBeDepositedInToTheOwnersAccount:
      ' مبالغ قابل واریز به حساب مالکان',
    retailSalesReportWithinAaDateRange: ' ریز فروش در یک محدوده تاریخی مشخص',
    dailyFinancialOperationsReport: ' عملیات مالی روزانه',
    reportOfRefunds: 'گزارش ريز استرداد آژانس',
    SearchReportForAPassengerOnAnUnknownTrain:
      ' جستجوی یک مسافر در یک قطار نامشخص',
  },
  en: {
    financialReports: 'Financial reports',
    seatReportsAndOccupancyRate: 'Seat reports and occupancy rate',
    agenciesFinancialReports: 'AgenciesFinancialReports',
    financialPerformanceReportByAgency: 'financialPerformanceReportByAgency',
    trainRevenueReportOverPeriodOfTime: 'trainRevenueReportOverPeriodOfTime',
    fareStructure: 'Rate breakdown',
    marketReports: 'Market reports',
    trainRevenue: 'Revenue report of each train in each journey',
    occupancyRateReport: 'Occupancy rate report',
    canceledTickets: 'Report of canceled tickets',
    trainRevenuePerTime:
      'Revenue report for each train in a specified period of time',
    SalesReportOfEachSalesRepresentative:
      'Sales report of each sale representative',
    commissionReportOfEachSalesRepresentative:
      'Commission report of each sale representative',
    returnTicketsReport: 'Return tickets report',
    trainPassengerList: 'train passenger list report',
    trainDisplacementInKilometers: 'Train displacement in Kilometers',
    trainDisplacementInKilometersInATimeRange:
      'train displacement in Kilometers in a time range',
    totalDisplacementInATimeRange: 'Total displacement in a time range',
    revenuePerPersonPerKilometer: 'Revenue per person per Kilometer',
    agencyPerformanceReport: 'Agency performance report',
    soldTicketsReport: 'Sold tickets report',
    hourlySalesReportInSalesCenters: 'hourly sales report in sales centers',
    theMostSaleReport:
      'The most sold report by agency, date of sale or departure, axis, train and hall type',
    salesReportWithFinancialAnalysis:
      'Sales report with financial analysis of each ticket',
    reportOfRecalculationOfTheShareOfAgencies:
      'Report of recalculation of the share of agencies',
    duplicateAndAdministrativeTicketReport:
      'Duplicate and administrative ticket report',
    reportOfOnlineRegistrationsBasedOnDate:
      'Report of online registrations based on date',
    onLineSalesReport: 'OnLine sales report',
    bankDiscrepanciesReport: 'Occupancy factor bank discrepancies report',
    InterRouteQuotaReportOfTrainsAndTheirUsageRate:
      'Inter-route quota report of trains and their usage rate',
    passengerReportsByDateAndTrain: 'Passenger reports by date and train',
    reportOfIssuedTicketsBySalesType: 'Report of issued tickets by sales type',
    reportOfPassengersByQuota: 'Report of passengers by quota of sale',
    trainRevenueReportByQuota:
      'Train revenue report by quota tariff and ticket type, departure date and date',
    trainRevenueReportBasedOnDuplicateTickets:
      'Train revenue report based on duplicate tickets, refunds and administrative tickets',
    ticketPriceAnalysisReportByHallType:
      'Ticket price analysis report by hall type, quota, ticket type, departure date, sale date, axis, planning',
    dayByDayReportOfTheSaleOfTrainByDateOfDeparture:
      'Day-by-day report of the sale of a train by date of departure, date of sale and axis',
    combinedReportOfPassengersByDateOfDeparture:
      'Combined report of passengers by date of departure, date of sale, route, train, route, quota and tariff',
    reportOfOptionalMealsTaken:
      'Report of optional meals taken separately by train number and departure date',
    reportOfUnsoldSeatsByQuota:
      'Report of unsold seats by quota, hall type, date of departure and so on',
    detailedReportOfTicketSalesByAgencies:
      'Detailed report of ticket sales by agencies and sellers',
    detailedReportOfRefundSalesByAgencies:
      'Detailed report of refund sales by agencies and sellers',
    financialReportingOfAgenciesInATimeRange:
      'Financial reporting of agencies in a time range',
    earningsReportForEachTrain: 'Earnings report for each train',
    theReportOfDeterminingTheEmptySeats:
      'The report of determining the empty seats of each train',
    trainOccupancyRateReport: 'Train occupancy rate report',
    revenueManagementReportsAndComparisonsOverTime:
      'Income management reports and comparisons over time',
    duplicateTicketsControlReport: 'Duplicate tickets control report',
    searchReportBasedOnTicketSeriesAndPassengeName:
      'Search report based on ticket series and passenger name',
    reportOnDeterminingTheAmountOfOnlineShoppingByBanks:
      'Report on determining the amount of online shopping by banks',
    revenueReportWithDateLimitByOwners:
      'Income report with historical limit by owners',
    financialReportsAndInformationByAgencies:
      'Financial reports and information by agencies and agencies',
    reportOfAmountsToBeDepositedInToTheOwnersAccount:
      'Report of amounts to be deposited into the owners account',
    retailSalesReportWithinAaDateRange:
      'Retail sales report within a specific date range',
    dailyFinancialOperationsReport: 'Daily financial operations report',
    reportOfRefunds: 'Report of refunds',
    SearchReportForAPassengerOnAnUnknownTrain:
      'search report for a passenger on an unknown train',
  },
};
