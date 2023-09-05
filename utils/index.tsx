import { CarProps, FilterProps } from "@types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; //Base rental price per day in dollars
  const mileageFactor = 0.1; //Additional rate per mile driven
  const ageFactor = 0.05; //Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const agrRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per year
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the currebt URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specific search parameter to the given value
  searchParams.set(type, value);

  //set the specific search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
