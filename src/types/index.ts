export interface CafeConfig {
  name: string;
  location: Location;
  about: string;
  currency: string;
  hours: Hours;
  contact: Contact;
  categories: string[];
  items: MenuItem[];
  theme: Theme;
}

export interface Location {
  address: string;
  city: string;
  country: string;
}

export interface Hours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Contact {
  phone: string;
  email: string;
  instagram: string;
}

export interface MenuItem {
  name: string;
  category: string;
  price: number;
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  font: string;
}
