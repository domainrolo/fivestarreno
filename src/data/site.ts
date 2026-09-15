/**
 * Business facts for Five Star Reno.
 *
 * ┌─────────────────────────────────────────────────────────────────────────┐
 * │  CONFIRM BEFORE YOU SHOW THIS TO ANYONE                                  │
 * │                                                                          │
 * │  Anything below set to `null` is HIDDEN on the site. That is deliberate:  │
 * │  these are facts only you can verify, and the site will not claim them    │
 * │  on your behalf. Fill one in and the matching badge, stat or FAQ item     │
 * │  appears automatically. No other change needed.                          │
 * │                                                                          │
 * │    yearsInBusiness   → adds "X years in business" to the stats band       │
 * │    projectsCompleted → adds "X projects completed"                        │
 * │    liabilityInsurance→ adds the "$XM liability insurance" trust badge     │
 * │    wsibCovered       → adds the "WSIB covered" trust badge                │
 * │    googleRating +                                                         │
 * │    googleReviewCount → adds the star rating badge (needs BOTH)            │
 * │    hstNumber         → adds the HST number to the footer                  │
 * │                                                                          │
 * │  `warrantyYears` is a promise you make, not a credential, so it ships     │
 * │  switched on at 2 years. Change or null it if that is not your policy.    │
 * └─────────────────────────────────────────────────────────────────────────┘
 */

export const site = {
  name: 'Five Star Reno',
  nameKo: '파이브스타 리노',
  domain: 'fivestarreno.ca',
  url: 'https://fivestarreno.ca',

  phone: '647-893-8134',
  phoneHref: 'tel:+16478938134',
  smsHref: 'sms:+16478938134',
  email: 'fivestar62004@gmail.com',

  /** Shown in the footer and in schema.org markup. */
  region: 'Toronto and the Greater Toronto Area',
  regionKo: '토론토 및 광역 토론토 지역',

  hours: [
    { days: 'Mon to Fri', time: '7:30am to 6:00pm' },
    { days: 'Saturday', time: '8:00am to 4:00pm' },
    { days: 'Sunday', time: 'By appointment' },
  ],
  hoursKo: [
    { days: '월요일 ~ 금요일', time: '오전 7시 30분 ~ 오후 6시' },
    { days: '토요일', time: '오전 8시 ~ 오후 4시' },
    { days: '일요일', time: '예약제로 운영합니다' },
  ],

  // ---- CONFIRM THESE -----------------------------------------------------
  warrantyYears: 2 as number | null,
  yearsInBusiness: null as number | null,
  projectsCompleted: null as number | null,
  liabilityInsurance: null as string | null,   // e.g. '$2M'
  wsibCovered: null as boolean | null,          // set true once your clearance is current
  googleRating: null as number | null,          // e.g. 4.9
  googleReviewCount: null as number | null,     // e.g. 115
  googleReviewUrl: null as string | null,
  hstNumber: null as string | null,
  // ------------------------------------------------------------------------

  /**
   * Real customer reviews. Empty by default, and the whole testimonials
   * section stays hidden until you add at least two. Do not invent these.
   *
   *   { quote: '…', quoteKo: '…', name: 'First L.', place: 'North York', source: 'Google' }
   */
  testimonials: [] as Array<{
    quote: string;
    quoteKo?: string;
    name: string;
    place: string;
    source?: string;
  }>,
} as const;

export type Site = typeof site;

export const serviceAreas = [
  'Toronto', 'North York', 'Willowdale', 'Scarborough', 'Etobicoke', 'East York',
  'Markham', 'Unionville', 'Richmond Hill', 'Thornhill', 'Vaughan', 'Woodbridge',
  'Maple', 'Concord', 'King City', 'Aurora', 'Newmarket', 'Stouffville',
  'Mississauga', 'Brampton', 'Oakville', 'Burlington', 'Milton',
  'Pickering', 'Ajax', 'Whitby', 'Oshawa',
];
