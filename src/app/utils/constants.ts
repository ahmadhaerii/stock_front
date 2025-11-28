export enum TOAST_MESSAGES {
  SUCCESSFUL_ADDED = 'با موفقیت اضافه شد',
  SUCCESSFUL_UPDATED = 'با موفقیت ویرایش شد',
  SUCCESSFUL_DELETED = 'با موفقیت حذف شد ',
}
export enum COLUMNS_TYPES {
  TEXT = 'text',
  SELECTOR = 'selector',
  STATUS = 'status',
  ACTION = 'action',
  NUMBER = 'number',
}
export const STATUS_OPTIONS = [
  {
    text: 'فعال',
    value: true,
  },
  {
    text: 'غیرفعال',
    value: false,
  },
];
export const FareStructureItemList = [
  {
    Id: 1,
    FareStructureItemId: 1,
    Title: 'پک خواب',
  },
  {
    Id: 2,
    FareStructureItemId: 2,
    Title: 'صوتی و تصویری ',
  },

  {
    Id: 3,
    FareStructureItemId: 3,
    Title: 'غذا ',
  },
];
