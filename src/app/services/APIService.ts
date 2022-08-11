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
      from: 1660335460000, //12.08 - 13.08
      to: 1660421860000,
    },
    apartmentId: "1234",
    guests: {
      adults: 1,
      infants: 0,
      children: 0,
    },
    totalPrice: 13000,
  },
  {
    bookingId: "dsa2qdsai3e2u923u4",
    customerId: "djijawndkjn2qud0sjdi",
    bookingDate: 1658318260000,
    occupationDate: {
      from: 1661285860000, //23.08 - 24.08
      to: 1661372260000,
    },
    apartmentId: "48611",
    guests: {
      adults: 1,
      infants: 0,
      children: 0,
    },
    totalPrice: 1452,
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
  return new Promise<Booking[]>((resolve) => setTimeout(() => resolve(mockBookings), 15));
}
