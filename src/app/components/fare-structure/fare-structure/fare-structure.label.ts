import { UserLanguage } from 'src/app/services/label-manager.service';

export interface IFareStructureLabel {
  titleHeader: string;
  fareComponents: string;
  newStructure: string;
  fareStructure: string;
  fareStructureType: string;
  numberOfItems: string;
  totalPrice: string;
  edit: string;
  delete: string;
  noContentDescription: string;
  currency: string;
  structure: string;
  fareStructureItemName: string;
  fareStructureItemPrice: string;
  close:string,
  add:string;
  confirmDeleteText:string;
  confirmDeleteTitle:string;
  addService:string;
  editService:string;
  fareStructureItems:string
  
}

export const Labels: Record<UserLanguage, IFareStructureLabel> = {
  fa: {
    titleHeader: 'تجزیه نرخ',
    fareComponents: 'اجزا نرخی',
    newStructure: 'ساختار جدید',
    fareStructure: 'ساختار نرخی',
    fareStructureType: 'نوع ساختار نرخی',
    numberOfItems: 'تعداد موارد',
    totalPrice: 'مبلغ کل',
    edit: 'ویرایش',
    delete: 'حذف',
    noContentDescription: 'لطفا یک ساختار انتخاب کنید',
    currency: 'ریال',
    structure: 'ساختار',
    fareStructureItemName: 'عنوان ',
    fareStructureItemPrice: 'بها',
    close:'بستن',
    add:'افزودن',
    confirmDeleteText:'آیا از حذف اطمینان دارید؟',
    confirmDeleteTitle:'حذف سرویس',
    addService:'افزودن سرویس',
    editService:'ویرایش سرویس',
    fareStructureItems:'اجزا نرخی'
  },


  en: {
    titleHeader: 'Fare Structure',
    fareComponents: 'Fare components',
    newStructure: 'New structure',
    fareStructure: 'Fare structure',
    fareStructureType: 'Fare Structure type',
    numberOfItems: 'Number of items',
    totalPrice: 'Total price',
    edit: 'Edit',
    delete: 'Delete',
    noContentDescription: 'Please select a structure',
    currency: 'IR',
    structure: 'structure',
    fareStructureItemName: 'Title ',
    fareStructureItemPrice: 'Price',
    close:'Cancel',
    add:'Add',
    confirmDeleteTitle:'Delete service',
    confirmDeleteText:'Are you sure to delete the Service?',
    addService:'Add service',
    editService:'Edit service',
    fareStructureItems:'FareStructure items'
  },
};
