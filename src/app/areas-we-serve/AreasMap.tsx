"use client";

import "leaflet/dist/leaflet.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Polyline,
  Tooltip,
  Popup,
} from "react-leaflet";
import { CITIES_LIST, type City } from "@/lib/cities";
import {
  CITY_COORDINATES,
  HOME_BASE_SLUG,
  type LatLng,
} from "@/lib/city-coordinates";

const ORANGE = "#ff6b35";
const NAVY = "#1e3a5f";

type CityWithCoords = City & { coords: LatLng };

function withCoords(): CityWithCoords[] {
  return CITIES_LIST.map((c) => ({
    ...c,
    coords: CITY_COORDINATES[c.slug],
  })).filter((c) => !!c.coords) as CityWithCoords[];
}

export default function AreasMap() {
  const router = useRouter();
  const cities = withCoords();
  const homeBase = cities.find((c) => c.slug === HOME_BASE_SLUG);
  if (!homeBase) return null;

  const others = cities.filter((c) => c.slug !== HOME_BASE_SLUG);

  return (
    <div className="w-full">
      <div
        className="w-full rounded-2xl overflow-hidden border border-gray-200 shadow-lg"
        style={{ height: "min(70vh, 640px)" }}
      >
        <MapContainer
          center={[43.95, -79.6]}
          zoom={7}
          minZoom={6}
          maxZoom={12}
          scrollWheelZoom={false}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          />

          {others.map((c) => (
            <Polyline
              key={`line-${c.slug}`}
              positions={[
                [homeBase.coords.lat, homeBase.coords.lng],
                [c.coords.lat, c.coords.lng],
              ]}
              pathOptions={{
                color: ORANGE,
                weight: 1.4,
                opacity: 0.45,
                dashArray: "4, 8",
              }}
            />
          ))}

          {others.map((c) => (
            <CircleMarker
              key={c.slug}
              center={[c.coords.lat, c.coords.lng]}
              radius={7}
              pathOptions={{
                color: "#ffffff",
                weight: 2,
                fillColor: NAVY,
                fillOpacity: 1,
              }}
              eventHandlers={{
                click: () => router.push(`/${c.slug}`),
                mouseover: (e) => e.target.setRadius(10),
                mouseout: (e) => e.target.setRadius(7),
              }}
            >
              <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                <span className="font-semibold">{c.shortName}</span>
              </Tooltip>
              <Popup>
                <div className="text-sm">
                  <div className="font-bold text-[#1e3a5f] mb-1">
                    FRP Installation in {c.shortName}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">{c.region}</div>
                  <Link
                    href={`/${c.slug}`}
                    className="text-[#ff6b35] font-semibold no-underline hover:underline"
                  >
                    View {c.shortName} service details →
                  </Link>
                </div>
              </Popup>
            </CircleMarker>
          ))}

          <CircleMarker
            center={[homeBase.coords.lat, homeBase.coords.lng]}
            radius={12}
            pathOptions={{
              color: "#ffffff",
              weight: 3,
              fillColor: ORANGE,
              fillOpacity: 1,
            }}
            eventHandlers={{
              click: () => router.push(`/${homeBase.slug}`),
              mouseover: (e) => e.target.setRadius(15),
              mouseout: (e) => e.target.setRadius(12),
            }}
          >
            <Tooltip
              direction="top"
              offset={[0, -12]}
              opacity={1}
              permanent
            >
              <span className="font-bold">Home Base · Mississauga</span>
            </Tooltip>
            <Popup>
              <div className="text-sm">
                <div className="font-bold text-[#ff6b35] mb-1">
                  Corevance Home Base
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  Mississauga, ON — same-day delivery across the GTA, scheduled
                  delivery province-wide.
                </div>
                <Link
                  href={`/${homeBase.slug}`}
                  className="text-[#ff6b35] font-semibold no-underline hover:underline"
                >
                  View Mississauga service details →
                </Link>
              </div>
            </Popup>
          </CircleMarker>
        </MapContainer>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-600">
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block w-3 h-3 rounded-full border-2 border-white"
            style={{ background: ORANGE, boxShadow: "0 0 0 1px #00000033" }}
          />
          Home Base — Mississauga
        </span>
        <span className="inline-flex items-center gap-2">
          <span
            className="inline-block w-2.5 h-2.5 rounded-full border-2 border-white"
            style={{ background: NAVY, boxShadow: "0 0 0 1px #00000033" }}
          />
          Service area — click any city to view
        </span>
        <span className="inline-flex items-center gap-2">
          <svg width="28" height="6" aria-hidden="true">
            <line
              x1="0"
              y1="3"
              x2="28"
              y2="3"
              stroke={ORANGE}
              strokeWidth="1.4"
              strokeDasharray="4 8"
              opacity="0.6"
            />
          </svg>
          Coverage route from Home Base
        </span>
      </div>
    </div>
  );
}
