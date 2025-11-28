import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IReportLabel {
  titleHeader: string;
  code: string;
  tableHeaderCode: string;
  name: string;
  tableHeaderName: string;
  classColor: string;
  close: string;
  delete: string;
  confirmDeleteText: string;
  fareStructure: string;
  fareGroupDiscount: string;
  confirmDeleteTitle: string;
  addHeader: string;
  editHeader: string;
  addButton: string;
  editButton: string;
  tableHeaderAction: string;
  btnConfirmation: string;
}

export const Labels: Record<UserLanguage, IReportLabel> = {
  fa: {
    titleHeader: 'گزارش گیری',
    code: 'کد لاتین',
    tableHeaderCode: 'کد کلاس',
    fareStructure: 'ساختار قیمتی',
    fareGroupDiscount: 'ضریب تعرفه نرخی',
    name: 'نام فارسی',
    tableHeaderName: 'نام کلاس',
    classColor: 'رنگ کلاس',
    confirmDeleteText: 'از حذف کلاس اطمینان دارید؟',
    confirmDeleteTitle: 'حذف کلاس',
    delete: 'حذف',

    close: 'بستن',
    addHeader: 'افزودن کلاس نرخی',
    editHeader: 'ویرایش کلاس نرخی',
    addButton: 'افزودن',
    editButton: 'ویرایش',
    tableHeaderAction: 'عملیات',
    btnConfirmation: 'تایید',
  },
  en: {
    titleHeader: 'Fate Classes',
    code: 'Code',
    tableHeaderCode: 'Code',
    name: 'Name',
    tableHeaderName: 'Name',
    classColor: 'Class Color',
    close: 'close',
    delete: 'delete',
    fareStructure: 'fareStructure',
    fareGroupDiscount: 'fareGroupDiscount',
    confirmDeleteText: 'Are you sure to delete the fate class?',
    confirmDeleteTitle: 'Delete the fate class',
    addHeader: 'Add fate class',
    editHeader: 'Edit fate class',
    addButton: 'Add',
    editButton: 'Edit',
    tableHeaderAction: 'Action',
    btnConfirmation: 'Confirm',
  },
};
