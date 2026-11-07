export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between gap-4  py-8">
      <img
        src="/assets/images/logo-light-theme.svg"
        alt="Logo"
        className="h-8 w-auto"
      />
      <button
        type="button"
        aria-label="Switch to light theme"
        className="rounded-lg p-3 transition-colors hover:bg-[#1A1A1D]"
      >
        <img
          src="/assets/images/icon-moon.svg"
          alt="Moon Icon"
          className="h-6 w-6"
        />
      </button>
    </header>
  );
};
