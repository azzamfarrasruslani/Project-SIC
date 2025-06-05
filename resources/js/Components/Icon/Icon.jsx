import {
  Home,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  LogIn,
  Receipt,
  Languages,
  Search,
  Filter,
  List,
  LayoutGrid,
  MapPin,
  XCircle,
  Gauge,
  Book,
  ShoppingBag,
  Puzzle,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";

/**
 * Komponen Ikon Universal menggunakan lucide-react
 * @param {Object} props
 * @param {string} props.name - Nama ikon (contoh: "home", "arrowUp", "facebook", dll)
 * @param {string} [props.className] - Tambahan class untuk styling
 */
const Icon = ({ name, className = "" }) => {
  const icons = {
    home: Home,
    arrowUp: ArrowUp,
    arrowDown: ArrowDown,
    facebook: Facebook,
    instagram: Instagram,
    youtube: Youtube,
    login: LogIn,
    language: Languages,
    promo: Receipt,
    list: List,
    close: XCircle,
    card: LayoutGrid,
    location: MapPin,
    search: Search,
    filter: Filter,
    arrowLeft: ChevronLeft,
    arrowRight: ChevronRight,
    dashboard: Gauge,
    komik: Book,
    produk: ShoppingBag,
    kuis: Puzzle
  };

  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`Ikon "${name}" tidak ditemukan.`);
    return null;
  }

  return <LucideIcon className={className} />;
};

export default Icon;
