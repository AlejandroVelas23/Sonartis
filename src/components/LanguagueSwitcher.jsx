import { useTranslation } from "react-i18next";
import { TbWorld } from "react-icons/tb";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <>
    <div>
    <div className="flex flex-row items-center px-2 py-2 rounded bg-white bg-opacity-10 text-gray-700 w-1/8 absolute z-20 right-0 mr-8">
    <TbWorld className="text-white" />

    <select
      onChange={(e) => changeLanguage(e.target.value)}
      className="mx-2 bg-white bg-opacity-0 text-white"
    >
      <option value="en" className="text-black">EN</option>
      <option value="es" className="text-black">ES</option>
    </select>
    </div></div>
    </>
  );
};

export default LanguageSwitcher;
