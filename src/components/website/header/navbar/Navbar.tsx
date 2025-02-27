import { images, navigation } from '@/constants';
import NavItem from './nav-item/NavItem';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
      <div>
        <Image
          src={images.logo}
          alt='Medica Pluse HMS'
          width={64}
          height={100}
        />
      </div>
      <div className='flex items-center gap-14'>
        {navigation.map((item) => (
          <NavItem
            key={item.href}
            {...item}
          />
        ))}
        {/* Lang Switch BTN */}
        {/* Book Appointment BTN */}
        {/* Login BTN */}
      </div>
    </nav>
  );
};

export default Navbar;
