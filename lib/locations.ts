export interface Location {
  id: string
  suburb: string
  clinic: string
  address: string
  state: string
  postcode: string
  phone: string
  mapUrl: string
}

export const locations: Location[] = [
  {
    id: 'lakelands',
    suburb: 'Lakelands',
    clinic: 'Modern Medical Clinics',
    address: '5 Peelwood Parade',
    state: 'WA',
    postcode: '6180',
    phone: '(08) 9582 7800',
    mapUrl: 'https://maps.google.com/?q=5+Peelwood+Parade+Lakelands+WA+6180',
  },
  {
    id: 'halls-head',
    suburb: 'Halls Head',
    clinic: 'Modern Medical Clinics',
    address: 'Halls Head',
    state: 'WA',
    postcode: '6210',
    phone: '(08) 9582 7800',
    mapUrl: 'https://maps.google.com/?q=Halls+Head+WA+6210',
  },
  {
    id: 'armadale',
    suburb: 'Armadale',
    clinic: 'Forrest Road GP',
    address: 'Unit 1/50 Forrest Road',
    state: 'WA',
    postcode: '6112',
    phone: '(08) 9497 1900',
    mapUrl: 'https://maps.google.com/?q=50+Forrest+Road+Armadale+WA+6112',
  },
]
