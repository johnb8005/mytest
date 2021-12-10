export interface Slug {
  id: number;
  property_id: number;
  language_id: number;
  slug: string;
  created_at: string;
  updated_at: string;
}

export interface Attributes {
  area: number;
  bathrooms: number;
  bedrooms: number;
  rooms: number;
}

export interface Image {
  carousel_image: string;
  file_name: string;
  full_image: string;
  img_principal: number;
  path: string;
  path_url: " ";
  thumbnail: string;
}

export interface Data {
  name: string;
  price: number;
  url: string;
  slug: Slug;
  addresses: string[];
  attributes: Attributes;
  location: { city: string; zip: string };
  images: Image[];
}
