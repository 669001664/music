import request, { requestWithoutErrorToast } from "utils/axios";
import { ILoginResult, ILoginRequest } from "apis/types/auth";

type LoginFn = (params: ILoginRequest) => Promise<ILoginResult>;

const login: LoginFn = ({ phone, password }) => {
  return requestWithoutErrorToast({
    url: '/login/cellphone',
    params: {
      phone,
      password,
    },
  })
}

const logout: unknown = () => {
  return request({
    method: 'post',
    url: '/logout',
  })
}

export default { login, logout }