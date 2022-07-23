import { IApartment } from "../constants/models";
import mock from "../../mockData.json";

const mockData = mock as IApartment[];

export async function getApartmentsDataFromServer() {
  //const response = await fetch('addres');
  //return response
  return new Promise<IApartment[]>((resolve) => setTimeout(() => resolve(mockData), 1500));
}
