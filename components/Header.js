import Image from 'next/image';
import Link from 'next/link';
import Sociale from '../components/Socials';

const Header = () => {
  return (
    <header className="flex justify-between items-center  px-6 bg-transparent">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.png" width={150} height={50} alt="Logo" className="cursor-pointer" />
      </Link>

      {/* Réseaux Sociaux */}
      <Sociale />
    </header>
  );
};

export default Header;
