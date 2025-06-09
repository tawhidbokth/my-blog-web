import Link from 'next/link';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`md:hidden fixed inset-0 bg-white z-40 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
      style={{ paddingTop: '5rem' }}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          href="/"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
          onClick={onClose}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
          onClick={onClose}
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
          onClick={onClose}
        >
          Contact
        </Link>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
          <Link
            href="/register"
            className=" hover:text-indigo-600 px-3 py-2 text-sm font-medium"
          >
            Register
          </Link>
        </button>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
          <Link
            href="/login"
            className=" hover:text-indigo-600 px-3 py-2 text-sm font-medium"
          >
            LogIn
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
