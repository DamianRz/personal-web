import React, { FC } from 'react';
import { ButtonProvider } from '../contexts/ButtonsContext';
import { LANG_DATA_STORAGE, THEME_DATA_STORAGE } from '../types/StorageData.type';
import { USER_DATA_STORAGE } from '../types/StorageData.type';
import { UserProvider } from '../contexts/UserContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { THEME_DARK, THEME_LIGHT } from '../types/Themes.type';
import './app.scss';
import { LangProvider } from '../contexts/LangContext';
const App: FC<{ Component: any; pageProps: any }> = ({
  Component,
  pageProps,
}) => {
  const store = require('store'); // store :3

  return (
    <div>
      <ThemeProvider value={store.get(THEME_DATA_STORAGE) || THEME_DARK}>
        <ButtonProvider disabled={false}>
          <UserProvider value={store.get(USER_DATA_STORAGE) || null}>
            <LangProvider value={store.get(LANG_DATA_STORAGE)}>
              <Component {...pageProps} />
            </LangProvider>
          </UserProvider>
        </ButtonProvider>
      </ThemeProvider>
    </div>
  )
}
export default App;
