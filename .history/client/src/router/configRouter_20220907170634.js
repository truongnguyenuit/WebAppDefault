import AuthLoginPage from "../pages/AuthLoginPage";
import AuthRegisterPage from "../pages/AuthRegisterPage";
import AuthLogoutPage from "../pages/AuthLogoutPage";

import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import settingPage from "../pages/settingPage";
import OderPage from "../pages/OderPage";
import SearchPage from "../pages/SearchPage";

import { pathName } from "./pathName";

export const configRouter=[
  {
    path: pathName.login,
    page: <AuthLoginPage/>,
    private: false,
  },
  {
    path: pathName.register,
    page: <AuthRegisterPage/>,
    private: false,
  },
  {
    path: pathName.logout,
    page: <AuthLogoutPage/>,
    private: true,
  },
  {
    path: pathName.cart,
    page: <CartPage/>,
    private: false,
  },
  {
    path: pathName.home,
    page: <HomePage/>,
    private: false,
  },
  {
    path: pathName.oder,
    page: <OderPage/>,
    private: false,
  },
  {
    path: pathName.search,
    page: <SearchPage/>,
    private: false,
  },
  {
    path: pathName.setting,
    page: <SearchPage/>,
    private: false,
  },
  
]