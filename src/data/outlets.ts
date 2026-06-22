import { Outlet } from "@/types";

export const OUTLETS: Outlet[] = [
  {
    id: "deolali-gaon",
    name: "Buba Junction — Deolali Gaon",
    addressLines: [
      "Rajdhani Chowk, Muktidham Parking Rd,",
      "behind Muktidham Mandir, Gayakhe Colony,",
      "Deolali Gaon, Nashik, Maharashtra 422101",
    ],
    mapsQuery:
      "Rajdhani Chowk, Muktidham Parking Rd, behind Muktidham Mandir, Gayakhe Colony, Deolali Gaon, Nashik, Maharashtra 422101",
    hours: [
      { day: "Mon – Sun", hours: "12:00 PM – 11:00 PM" },
    ],
  },
  {
    id: "college-road",
    name: "Buba Junction — College Road",
    addressLines: [
      "Shop No. 8, D J House, College Rd,",
      "opp. Chutney Hotel, D'souza Colony,",
      "Nashik, Maharashtra 422005",
    ],
    mapsQuery:
      "Shop No. 8, D J House, College Rd, opp. Chutney Hotel, D'souza Colony, Nashik, Maharashtra 422005",
    hours: [
      { day: "Mon – Sun", hours: "12:00 PM – 11:00 PM" },
    ],
  },
];
