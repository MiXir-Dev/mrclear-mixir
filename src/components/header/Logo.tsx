const Logo = () => {
  return (
    <div className="flex items-center space-x-3">
      <a href="/" className="group flex items-center space-x-3">
        <div
          className="overflow-hidden transition-all duration-300 flex items-center justify-center rounded-full md:rounded-none h-12 w-12 md:h-auto md:w-auto"
        >
          <img
            src="/logo.png"
            alt="Logo Mr. Clear"
            className="rounded-full object-contain h-10 w-10 md:h-12 md:w-12"
          />
        </div>
        <span className="hidden md:inline-block font-semibold text-xl text-brand-blue tracking-wide group-hover:text-brand-blue/80 transition-colors duration-300">
          Mr. Clear
        </span>
      </a>
    </div>
  );
};

export default Logo;
