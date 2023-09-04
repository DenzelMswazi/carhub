import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    textStyles?: string;
    rightIcon?: string;
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}
export interface CarProps {
    city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive:string;
    cityMPG: number;
}
export interface FilerProps {
    manufacturer?:string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}
export interface HomeProps {
    searchParams: FilterProps;
}