type LogoProps = {
  isSticky: boolean;
};

const Logo = ({ isSticky }: LogoProps) => {
  return (
    <div className="flex items-center">
      <a href="/" className="group flex items-center">
        <div
          className={`overflow-hidden transition-all duration-300 flex items-center justify-center
          ${
            isSticky
              ? "h-14 w-14 md:h-14 md:w-14"
              : "h-16 w-16 md:h-20 md:w-20"
          }`}
        >
          <img
            src="/logo.png"
            alt="Logo Mr. Clear"
            className="object-contain h-full w-full"
          />
        </div>
      </a>
    </div>
  );
};

export default Logo;