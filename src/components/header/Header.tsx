import { Search, ShoppingBag, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-[#faf6f1]">
      <div className="mx-auto flex max-w-7xl items-center px-6 py-5 md:px-10">
        {/* Left: mobile menu / spacer */}
        <div className="flex flex-1 items-center">
          <button aria-label="Menu" className="text-neutral-700 md:hidden">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* Center: brand */}
        <div className="flex flex-1 flex-col items-center">
          <span
            className="text-lg tracking-[0.4em] text-neutral-800 md:text-xl"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            SEASHELL
          </span>
          <span className="mt-1 text-[9px] tracking-[0.5em] text-neutral-500">
            AZERBAIJAN
          </span>
        </div>

        {/* Right: actions */}
        <div className="flex flex-1 items-center justify-end gap-6 text-neutral-700">
          <button aria-label="Search" className="transition hover:text-neutral-900">
            <Search className="h-[18px] w-[18px]" />
          </button>
          <button aria-label="Cart" className="transition hover:text-neutral-900">
            <ShoppingBag className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
