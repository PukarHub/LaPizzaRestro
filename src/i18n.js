// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          menu: "Menu",
          about: "About Us",
          reservation: "Reservation",
          team: "Meet the Team",
          cart: "Cart",
          translateToPT: "Portuges",
          translateToEN: "English",
        },
      },
      pt: {
        translation: {
          menu: "Cardápio",
          about: "Sobre Nós",
          reservation: "Reservas",
          team: "Conheça a Equipe",
          cart: "Carrinho",
          translateToPT: "Portuges",
          translateToEN: "English",
        },
      },
    },
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
