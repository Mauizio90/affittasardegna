export class Accommodation {
    id_room_typ?: number;
    name_it?: string;
    h2_it?: string | null;
    name_en?: string;
    h2_en?: string | null;
    name_de?: string;
    h2_de?: string | null;
    district?: string | null;
    stars?: number | null;
    guests?: string;
    meta_it_url?: string;
    meta_en_url?: string;
    short_term_amount?: number;
    n_bedrooms?: number;
    n_bathrooms?: number;
    latitude?: number;
    longitude?: number;
    name_room_type_category?: string;
    id_room_type_category?: number;
    city?: string;
    address?: string;
    area?: string | null;
    postcode?: string;
    cod_country?: string;
    description?: {
      it: string;
      en: string;
      es: string;
      de: string;
      fr: string;
    }
    license_number?: string;
    images?: string[];
    price?: number;
    amenities?: Amenity[];
}

export interface Amenity {
    code: string;
    name: {
      it: string;
      en: string;
      es: string;
      de: string;
      fr: string;
    };
  }

