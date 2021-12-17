import React, { useState } from "react";
import { IntlProvider } from "react-intl";

import Header from "./components/Header";
import Container from "./components/Container";
import { LOCALES } from "./intl/locales";
import { messages } from "./intl/messages";
import { Language } from "./interfaces";

import "./app.scss";

const App: React.FC = () => {
  const storedLanguage: Language = JSON.parse(localStorage.getItem('internationalization')!)
  const defaultLanguage: Language = {
    value: LOCALES.ENGLISH
  }
  const language: Language = storedLanguage || defaultLanguage;
  const [localeLanguage, setLocaleLanguage] = useState<Language>(language);

  return (
    <IntlProvider
      messages={messages[localeLanguage.value]}
      locale={localeLanguage.value}
    >
      <Header setLocale={setLocaleLanguage} localeLanguage={localeLanguage} />
      <Container />
    </IntlProvider>
  );
};

export default App;