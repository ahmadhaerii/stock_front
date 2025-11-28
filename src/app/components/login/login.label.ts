import { UserLanguage } from 'src/app/services/label-manager.service';

export interface ILoginLabel {
  titleHeader: string;
  user: string;
  pass: string;
  submit: string;
  requiredError: string;
}

export const Labels: Record<UserLanguage, ILoginLabel> = {
  fa: {
    titleHeader: 'ورود به حساب کاربری',
    user: 'نام کاربری ',
    pass: 'کلمه عبور',
    submit: 'ورود',
    requiredError: 'این فیلد اجباری است',
  },

  en: {
    titleHeader: 'Login to account',
    user: 'User',
    pass: 'Password',
    submit: 'Login',
    requiredError: 'This field is mandatory',
  },
};
