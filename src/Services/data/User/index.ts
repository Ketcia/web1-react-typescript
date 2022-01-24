import { IResponseUser, IUser } from "interface/user.interface";
import api from "Services/api";

class UserData {
  register(data: IUser) {
    return api.post<IResponseUser>('/register', data)
  }
  login(data: IUser) {
    return api.post<IResponseUser>('/login', data)
  }
}

export default new UserData()