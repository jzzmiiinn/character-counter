import { useCounterStore } from "../store/counterStore";

export const Header = () => {
  const theme = useCounterStore((state) => state.theme);
  const toggleTheme = useCounterStore((state) => state.toggleTheme);

  return (
    <header className="flex flex-row items-center justify-between gap-4  py-8">
      <img
        src={
          theme === "dark"
            ? "/assets/images/logo-dark-theme.svg"
            : "/assets/images/logo-light-theme.svg"
        }
        alt="Character Counter Logo"
        className="h-10 w-auto"
      />
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={
          theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
        }
        className="rounded-lg p-3 transition-colors hover:bg-gray-100 dark:hover:bg-[#292832]"
      >
        <img
          src={
            theme === "dark"
              ? "/assets/images/icon-sun.svg"
              : "/assets/images/icon-moon.svg"
          }
          alt=""
          className="h-6 w-6"
        />
      </button>
    </header>
  );
};
