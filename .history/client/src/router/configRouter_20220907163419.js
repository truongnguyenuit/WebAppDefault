import AuthLoginPage from "../pages/AuthLoginPage";
import AuthRegisterPage from "../pages/AuthRegisterPage";
import AuthLogoutPage from "../pages/AuthLogoutPage";

import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import infomationPage from "../pages/infomationPage";
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
  }
  
]