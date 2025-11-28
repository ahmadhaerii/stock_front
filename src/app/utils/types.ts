export type ColorState =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type ConfirmDialog = {
  title: string;
  text: string;
  confirmBtn: string;
  cancelBtn: string;
};

export type MenuItem<T> = {
  title: T;
  value: T;
};

export type ButtonType = 'button';

export type ThemePalette = 'square' | 'round';

export type InputType = 'number' | 'password' | 'text';
