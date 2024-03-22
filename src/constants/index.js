import { PiWind } from "react-icons/pi";
import {
  KitchenIcon,
  ShowerIcon,
  TVIcon,
  TransmissionIcon,
  Van1Icon,
  Van2Icon,
  Van3Icon,
} from "components/icons";

export const FORM_INIT_VALUES = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

export const LIMIT = 4;

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const DAYS_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const TOASTER_CONFIG = { className: "themed_toaster", duration: 1500 };

export const FILTERS_EQUIPMENT = [
  {
    value: "ac",
    icon: PiWind,
    text: "AC",
  },
  {
    value: "automatic",
    icon: TransmissionIcon,
    text: "Automatic",
  },
  {
    value: "kitchen",
    icon: KitchenIcon,
    text: "Kitchen",
  },
  {
    value: "tv",
    icon: TVIcon,
    text: "TV",
  },
  {
    value: "shower/wc",
    icon: ShowerIcon,
    text: "Shower/WC",
  },
];

export const FILTERS_TYPE = [
  {
    value: "van",
    icon: Van1Icon,
    text: "Van",
  },
  {
    value: "fully integrated",
    icon: Van2Icon,
    text: "Fully Integrated",
  },
  {
    value: "alcove",
    icon: Van3Icon,
    text: "Alcove",
  },
];
