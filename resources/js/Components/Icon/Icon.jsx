import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowUp,
  faArrowDown,
  faChevronLeft,
  faChevronRight,
  faRightToBracket,
  faReceipt,
  faLanguage,
  faMagnifyingGlass,
  faFilter,
  faList,
  faTableCellsLarge,
  faLocationDot,
  faCircleXmark,
  faGauge,
  faBook,
  faBagShopping,
  faPuzzlePiece
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Dashboard from "@/Pages/Admin/Dashboard";
/**
 * Komponen Ikon Universal
 * @param {string} name - Nama ikon (contoh: "home", "user", "coffee")
 * @param {string} className - Tambahan class untuk styling
 */
const Icon = ({ name, className }) => {
  // Daftar ikon yang didukung
  const icons = {

    home: faHome,
    arrowUp: faArrowUp,
    arrowDown: faArrowDown,
    facebook: faFacebookF,
    instagram: faInstagram,
    youtube: faYoutube,
    login: faRightToBracket,
    language: faLanguage,
    promo: faReceipt,
    list: faList,
    close: faCircleXmark,
    card: faTableCellsLarge,
    location: faLocationDot,
    search: faMagnifyingGlass,
    filter: faFilter,
    arrowLeft: faChevronLeft,
    arrowRight: faChevronRight,
    dashboard : faGauge,
    komik: faBook,
    produk: faBagShopping,
    kuis: faPuzzlePiece

  };

  return <FontAwesomeIcon icon={icons[name]} className={className} />;
};

export default Icon;
