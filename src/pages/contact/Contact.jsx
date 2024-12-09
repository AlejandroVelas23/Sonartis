import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CW from "../../assets/images/ContactW.jpg";
import Btt from "../../components/Button";

const Contact = () => {
  const { t } = useTranslation(); // Hook de traducción

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t("form.successMessage")); // Mensaje traducido
    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 flex">
      {/* Formulario */}
      <div className="w-full md:w-1/3 bg-gray-700 flex flex-col justify-center px-16 p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-white mb-16">
          {t("form.title")}
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Nombre y Apellido */}
          <div className="flex space-x-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="name" className="text-gray-100 mb-1">
                {t("form.name")}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder={t("form.placeholderName")}
                value={formData.name}
                onChange={handleChange}
                required
                className="p-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-800 text-white placeholder-gray-500"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="lastName" className="text-gray-300 mb-1">
                {t("form.lastName")}
              </label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                placeholder={t("form.placeholderLastName")}
                value={formData.lastName}
                onChange={handleChange}
                required
                className="p-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-800 text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-300 mb-1">
              {t("form.email")}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={t("form.placeholderEmail")}
              value={formData.email}
              onChange={handleChange}
              required
              className="p-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-800 text-white placeholder-gray-500"
            />
          </div>

          {/* Teléfono */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-gray-300 mb-1">
              {t("form.phone")}
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder={t("form.placeholderPhone")}
              value={formData.phone}
              onChange={handleChange}
              required
              className="p-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-800 text-white placeholder-gray-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-300 mb-1">
              {t("form.message")}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t("form.placeholderMessage")}
              value={formData.message}
              onChange={handleChange}
              required
              className="p-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 bg-gray-800 text-white placeholder-gray-500 h-40"
            ></textarea>
          </div>

          <Btt type="submit" text={t("form.submit")} className="w-full" />
        </form>
      </div>

      <div className="hidden md:block w-2/3 bg-gray-700 p-8">
        <img
          src={CW}
          alt="Contact Us"
          className="h-screen w-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Contact;
