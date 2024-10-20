// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
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
        welcome_message: "Welcome to La Pizza Ristorante Italiano",
        experience_message: "Experience the best pizzas in Portugal!",
        view_menu: "View Menu",
        reserve_table: "Reserve a Table",
        order_online: "Order Online",
        restaurant_name: "La Pizza Ristorante",
        address: "RUA ALVES REDOL 1, 1000-029, Lisbon",
        email_label: "Email",
        email: "lapizzalisboa@gmail.com",
        phone_label: "Phone",
        phone: "+351 920 367 691",
        opening_hours: "Opening Hours",
        opening_hours_weekdays: "Monday - Friday: 11am - 10pm",
        opening_hours_weekends: "Saturday - Sunday: 12pm - 11pm",
        quick_links: "Quick Links",
        quick_links_menu: "Menu",
        quick_links_book_table: "Book a Table",
        quick_links_order_online: "Order Online",
        about_us: "About Us",
        contact: "Contact",
        subscribe_newsletter: "Subscribe to Our Newsletter",
        enter_email: "Enter your email",
        subscribe_button: "Subscribe",
        copyright: "© 2024 La Pizza Ristorante Italiano. All rights reserved.",
        book_table: "Book a Table",
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
        welcome_message: "Bem-vindo ao La Pizza Ristorante Italiano",
        experience_message: "Experimente as melhores pizzas em Portugal!",
        view_menu: "Ver Menu",
        reserve_table: "Reservar uma Mesa",
        order_online: "Fazer Pedido Online",
        restaurant_name: "La Pizza Ristorante",
        address: "RUA ALVES REDOL 1, 1000-029, Lisboa",
        email_label: "Email",
        email: "lapizzalisboa@gmail.com",
        phone_label: "Telefone",
        phone: "+351 920 367 691",
        opening_hours: "Horário de Funcionamento",
        opening_hours_weekdays: "Segunda - Sexta: 11h - 22h",
        opening_hours_weekends: "Sábado - Domingo: 12h - 23h",
        quick_links: "Links Rápidos",
        quick_links_menu: "Menu",
        quick_links_book_table: "Reservar uma Mesa",
        quick_links_order_online: "Fazer Pedido Online",
        about_us: "Sobre Nós",
        contact: "Contato",
        subscribe_newsletter: "Assine a Nossa Newsletter",
        enter_email: "Digite seu email",
        subscribe_button: "Inscrever-se",
        copyright:
          "© 2024 La Pizza Ristorante Italiano. Todos os direitos reservados.",
        book_table: "Reservar uma Mesa",
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
