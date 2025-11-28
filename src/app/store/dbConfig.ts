import { DBConfig } from 'ngx-indexed-db';

export function migrationFactory() {
  return {};
}

export const DbConfig: DBConfig = {
  name: 'MyDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'TrainDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
    {
      store: 'WagonDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
    {
      store: 'WagonTypeDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'wagonNumber',
          keypath: 'wagonNumber',
          options: { unique: false },
        },
        { name: 'wagonType', keypath: 'wagonType', options: { unique: false } },
      ],
    },
    {
      store: 'AxisDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'code', keypath: 'code', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
    {
      store: 'RouteGraphDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'axis', keypath: 'axis', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
    {
      store: 'TrainTypeDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
    {
      store: 'OwnerDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
    {
      store: 'StationDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'codeStation',
          keypath: 'codeStation',
          options: { unique: false },
        },
      ],
    },
    {
      store: 'BackshnameDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'code', keypath: 'code', options: { unique: false } },
      ],
    },
    {
      store: 'FareRulesDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'code', keypath: 'code', options: { unique: false } },
      ],
    },
    {
      store: 'RouteDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'codeRoute', keypath: 'codeRoute', options: { unique: false } },
      ],
    },
    {
      store: 'TrainNumberDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'code', keypath: 'code', options: { unique: false } },
      ],
    },
    {
      store: 'PointOfSalesDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
    {
      store: 'DistanceDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'distance', keypath: 'distance', options: { unique: false } },
      ],
    },
    {
      store: 'CRCNRulesDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'crcnRule', keypath: 'crcnRule', options: { unique: false } },
      ],
    },
    {
      store: 'ComplicationDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'code', keypath: 'code', options: { unique: false } },
      ],
    },
    {
      store: 'QuotaDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'code', keypath: 'code', options: { unique: false } },
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
    {
      store: 'MiddleStationDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'code', keypath: 'code', options: { unique: false } },
      ],
    },
    {
      store: 'FareConditionDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'code', keypath: 'code', options: { unique: false } },
      ],
    },
    {
      store: 'CreateTrainCS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'circularNumber',
          keypath: 'circularNumber',
          options: { unique: false },
        },
      ],
    },
    {
      store: 'FareClassDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'code', keypath: 'code', options: { unique: false } },
      ],
    },
    {
      store: 'BuildTrainLicenseDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'circularNumber',
          keypath: 'circularNumber',
          options: { unique: false },
        },
      ],
    },
    {
      store: 'SalesOfficeDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
    {
      store: 'SpecialServiceTypeDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'fromDate', keypath: 'fromDate', options: { unique: false } },
      ],
    },
    {
      store: 'SpecialServiceDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'code', keypath: 'code', options: { unique: false } },
      ],
    },
    {
      store: 'SalesOfficesMembersDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'name', keypath: 'name', options: { unique: false } },
      ],
    },
    {
      store: 'TrainTemplateDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [],
    },
    {
      store: 'FareConditionDetailDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [],
    },
    {
      store: 'UserDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [],
    },
    {
      store: 'CompanyDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [],
    },
    {
      store: 'CreditDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [],
    },
    {
      store: 'FareStructureDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
      ],
    },
    {
      store: 'FareStructureItemDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'title', keypath: 'title', options: { unique: false } },
      ],
    },
    {
      store: 'FareStructureItemPriceDS',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'fare', keypath: 'fare', options: { unique: false } },
      ],
    },
  ],
  migrationFactory,
};
