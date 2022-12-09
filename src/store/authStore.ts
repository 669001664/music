import { action, observable, runInAction } from "mobx";
import { ILoginResult } from "apis/types/auth";
import AuthApis from 'apis/auth';

class AuthStore {

  userInfo: ILoginResult | null;

  constructor() {
    this.userInfo = JSON.parse(localStorage.getItem('userInfo') || "{}")
  }

  @observable
  count = 1

  @action.bound
  login(phone: string, password: string) {
    return new Promise((resolve, rejects) => {
      AuthApis.login({ phone, password }).then((res: ILoginResult) => {
        runInAction(() => {
          console.log(res)
          if (res.code === 400) {
            // message.warning('账号或者密码不正确',3);
          } else {
            this.userInfo = res
            localStorage.setItem('userInfo', JSON.stringify(res))
            resolve('success')
          }
        })
      }).catch(err => rejects(err));
    })
  }

  @action.bound
  logout() {
    return new Promise((resolve, reject) => {
      console.log(resolve, reject);
      this.userInfo = null
      localStorage.removeItem('userInfo')
    })
  }

}

export default new AuthStore();