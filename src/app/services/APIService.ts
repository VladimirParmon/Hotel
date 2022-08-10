import { Booking, IApartment, LoginResponse, UserData } from "../constants/models";
import mock from "../../mockData.json";

const mockData = mock as IApartment[];
const mockUser: UserData = {
  userId: "djijawndkjn2qud0sjdi",
  userFirstName: "Vladimir",
  userLastName: "Parmon",
  userEmail: "parmon_vladimir@bk.ru",
  userDateOfBirth: 899324260000,
  userGender: "male",
  userAdminStatus: true,
};

const userLoginResponse: LoginResponse = {
  accessToken: "dkijdn23ijiejdi",
  userId: "djijawndkjn2qud0sjdi",
};

const mockBookings: Booking[] = [
  {
    bookingId: "djaisdjn2i3e2u923u4",
    customerId: "djijawndkjn2qud0sjdi",
    bookingDate: 1658348260000,
    occupationDate: {
      from: 1658434660000,
      to: 1658521060000,
    },
    apartment: 3,
    guests: {
      adults: 1,
      infants: 0,
      children: 0,
    },
    totalPrice: 13000,
  },
];

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

export async function getBookings() {
  return new Promise<Booking[]>((resolve) => setTimeout(() => resolve(mockBookings), 1500));
}
