export type LatLng = { lat: number; lng: number };

export const HOME_BASE_SLUG = "frp-installation-mississauga";

export const CITY_COORDINATES: Record<string, LatLng> = {
  "frp-installation-toronto": { lat: 43.6532, lng: -79.3832 },
  "frp-installation-mississauga": { lat: 43.589, lng: -79.6441 },
  "frp-installation-brampton": { lat: 43.7315, lng: -79.7624 },
  "frp-installation-north-york": { lat: 43.7615, lng: -79.4111 },
  "frp-installation-scarborough": { lat: 43.7731, lng: -79.2578 },
  "frp-installation-vaughan": { lat: 43.8361, lng: -79.4985 },
  "frp-installation-etobicoke": { lat: 43.6435, lng: -79.5656 },
  "frp-installation-markham": { lat: 43.8561, lng: -79.337 },
  "frp-installation-richmond-hill": { lat: 43.8828, lng: -79.4403 },
  "frp-installation-aurora": { lat: 44.0065, lng: -79.4504 },
  "frp-installation-newmarket": { lat: 44.0592, lng: -79.4613 },
  "frp-installation-oakville": { lat: 43.4675, lng: -79.6877 },
  "frp-installation-burlington": { lat: 43.3255, lng: -79.799 },
  "frp-installation-milton": { lat: 43.5183, lng: -79.8774 },
  "frp-installation-hamilton": { lat: 43.2557, lng: -79.8711 },
  "frp-installation-kitchener": { lat: 43.4516, lng: -80.4925 },
  "frp-installation-waterloo": { lat: 43.4643, lng: -80.5204 },
  "frp-installation-cambridge": { lat: 43.3616, lng: -80.3144 },
  "frp-installation-guelph": { lat: 43.5448, lng: -80.2482 },
  "frp-installation-pickering": { lat: 43.8384, lng: -79.0868 },
  "frp-installation-ajax": { lat: 43.8509, lng: -79.0204 },
  "frp-installation-whitby": { lat: 43.8975, lng: -78.9429 },
  "frp-installation-oshawa": { lat: 43.8971, lng: -78.8658 },
  "frp-installation-barrie": { lat: 44.3894, lng: -79.6903 },
  "frp-installation-brantford": { lat: 43.1394, lng: -80.2644 },
  "frp-installation-london": { lat: 42.9849, lng: -81.2453 },
  "frp-installation-st-catharines": { lat: 43.1594, lng: -79.2469 },
  "frp-installation-niagara-falls": { lat: 43.0962, lng: -79.0377 },
  "frp-installation-kingston": { lat: 44.2312, lng: -76.486 },
  "frp-installation-belleville": { lat: 44.1628, lng: -77.3832 },
  "frp-installation-peterborough": { lat: 44.3091, lng: -78.3197 },
  "frp-installation-ottawa": { lat: 45.4215, lng: -75.6972 },
};

export function getCityCoordinates(slug: string): LatLng | undefined {
  return CITY_COORDINATES[slug];
}
