import logo from '../../public/assets/images/logo.png';

export const images = { logo };

export enum routes {
  ROOT = '/',
  LOGIN = '/login',
  REGISTER = '/register',
  FORGOT_PASSWORD = '/forgot-password',
  RESET_PASSWORD = '/reset-password',
  DASHBOARD = '/dashboard',
  SERVICES = '/services',
  DOCTORS = '/doctors',
  ABOUT = '/about',
  CONTACT = '/contact',
}

export const navigation: INavLinkItem[] = [
  {
    href: routes.ROOT,
    label: 'Home',
  },
  {
    href: routes.SERVICES,
    label: 'Services',
  },
  {
    href: routes.DOCTORS,
    label: 'Doctors',
  },
  {
    href: routes.ABOUT,
    label: 'About',
  },
  {
    href: routes.CONTACT,
    label: 'Contact',
  },
];
