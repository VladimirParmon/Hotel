import { IApartment, LoginResponse, UserData } from "../constants/models";
import mock from "../../mockData.json";

const mockData = mock as IApartment[];
const mockUser: UserData = {
  userId: "djijawndkjn2qud0sjdi",
  userFirstName: "Vladimir",
  userLastName: "Parmon",
  userEmail: "parmon_vladimir@bk.ru",
  userDateOfBirth: "2022-08-04T11:07:20.443Z",
  userGender: "male",
  userAdminStatus: true,
};

const userLoginResponse: LoginResponse = {
  accessToken: "dkijdn23ijiejdi",
  userId: "djijawndkjn2qud0sjdi",
};

export async function getApartmentsDataFromServer() {
  //const response = await fetch('addres');
  //return response
  return new Promise<IApartment[]>((resolve) => setTimeout(() => resolve(mockData), 1500));
}

export async function getUserDataFromServer(id: string, token: string) {
  return new Promise<UserData>((resolve) => setTimeout(() => resolve(mockUser), 1500));
}

export async function loginIn(login: string, password: string) {
  return new Promise<LoginResponse>((resolve) =>
    setTimeout(() => resolve(userLoginResponse), 1500)
  );
}
