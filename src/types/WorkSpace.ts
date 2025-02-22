export interface WrokSpace {
  // "id": "39ab7642-8de3-4e95-aa5d-34089bc67b90",
  id: string;
  // "name": "Platinum, Indiranagar",
  name: string;
  // "address": "271, 6th Main Rd, HAL 2nd Stage, Motappapalya, Indiranagar, Bengaluru, Karnataka 560038, India",
  address: string;
  // "latitude": 12.9732196,
  // "longitude": 77.6406548,
  latitude: number;
  longitude: number;
  // "google_maps_url": "https://www.google.com/maps/place/BHIVE+Workspace+Platinum+Indiranagar/@12.9732196,77.6406548,15z/data=!4m2!3m1!1s0x0:0x310e3359eaf1ee4f?sa=X&ved=2ahUKEwjO3L_JgJ6BAxWzZWwGHSwRDXAQ_BJ6BAg9EAA&hl=en-US&ved=2ahUKEwjO3L_JgJ6BAxWzZWwGHSwRDXAQ_BJ6BAhNEAgm/maps/place/BHIVE+Workspace+Indiranagar/@12.9789187,77.6404881,17z/data=!4m6!3m5!1s0x3bae141e007a849d:0xbff26c814318fc77!8m2!3d12.9789187!4d77.643063!16s%2Fg%2F11bxf3zpnf?entry=ttu",
  google_maps_url: string;
  // "city": "Bengaluru",
  city: string;
  // "state": "Karnataka"
  state: string;
  // "country": "India",
  country: string;
  // "postal_code": "560038",
  postal_code: string;
  // "description": null,
  description: string;
  // "rules": null,
  rules: string;
  // "amenities": ["Conferencing facilities", "Parking"],
  amenities: string[];
  // "images": ["static_assets/5934c0fd9d574bddbde8175d86a2d2da.jpg"],
  images: string[];
  // "working_hours_start": "00:00",
  working_hours_start: string;
  // "working_hours_end": "23:59",
  working_hours_end: string;
  // "contact_person_name": "Lavena",
  contact_person_name: string;
  // "facilities": null,
  facilities: string;
  // "is_active": true,
  is_active: boolean;
  // "is_day_pass_enabled": true,
  is_day_pass_enabled: boolean;
  // "day_pass_price": 499,
  day_pass_price: number;
  day_pass_discounts_percentage: {
    [key: number]: {
      value: number;
      message: string;
    };
  };
  manager_id: string;
}
