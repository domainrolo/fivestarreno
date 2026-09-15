export const en = {
  code: 'en',
  htmlLang: 'en-CA',
  label: 'English',
  otherLabel: '한국어',

  nav: {
    home: 'Home',
    services: 'Services',
    work: 'Our work',
    about: 'About',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close menu',
    skip: 'Skip to main content',
  },

  cta: {
    primary: 'Get a free estimate',
    secondary: 'See the work',
    call: 'Call',
    callNow: 'Call now',
    text: 'Text us',
    email: 'Email us',
    quote: 'Get my free estimate',
    back: 'Back to services',
    allServices: 'All services',
  },

  hero: {
    eyebrow: 'General contractor · Toronto and the GTA',
    h1a: 'Kitchens, bathrooms and basements,',
    h1b: 'finished properly.',
    lead:
      'A written quote with every line priced, and one person to call from the first swing of the hammer through the final walkthrough. We sweep the site at the end of each day.',
    scroll: 'Scroll to see more',
  },

  trust: {
    freeEstimate: 'Free on-site estimates',
    writtenQuote: 'Itemized written quotes',
    korean: 'Korean spoken · 한국어 상담',
    gta: 'Serving Toronto and the GTA',
    warranty: (y: number) => `${y}-year workmanship warranty`,
    insured: (amount: string) => `${amount} liability insurance`,
    wsib: 'WSIB covered',
    rating: (r: number, c: number) => `${r} stars from ${c} Google reviews`,
  },

  services: {
    eyebrow: 'What we do',
    heading: 'Eight things we build, all under one contract',
    lead:
      'Most jobs land in one of these. If yours sits between two of them, call and describe it. We will tell you straight whether it is work we take on.',
    learnMore: 'What this includes',
    typical: 'Typical timeline',
    items: [
      {
        slug: 'kitchen-renovation',
        title: 'Kitchen renovations',
        blurb: 'Gut to finish, including cabinets, counters, and the plumbing and electrical behind the walls.',
        photo: 'svc-kitchen',
        duration: '4 to 8 weeks',
        long:
          'We take the room back to studs, move plumbing and wiring where the new layout needs it, and bring in cabinetry that is measured to your walls rather than trimmed to fit. Counters, backsplash, lighting, flooring and paint are all part of the same contract, so you are not chasing four trades yourself.',
        bullets: [
          'Custom and semi-custom cabinetry, measured on site',
          'Quartz, granite and porcelain counters with templated seams',
          'Plumbing and gas relocated by licensed trades',
          'Pot lights, under-cabinet lighting and new circuits',
          'Backsplash tile, flooring, trim and paint',
          'Island and peninsula builds, and load-bearing wall removal with an engineer’s letter',
        ],
      },
      {
        slug: 'bathroom-renovation',
        title: 'Bathroom renovations',
        blurb: 'Main baths, ensuites and powder rooms, waterproofed and tiled to code.',
        photo: 'svc-bathroom',
        duration: '2 to 4 weeks',
        long:
          'Bathrooms fail at the waterproofing long before they fail at the tile. We use a bonded membrane across the shower pan and up the walls, pressure test before anything is covered, and then tile. You get a room that still looks right in ten years.',
        bullets: [
          'Bonded waterproofing membrane, tested before tiling',
          'Curbless and low-curb shower pans with linear drains',
          'Heated floors under tile',
          'Vanities, wall-hung toilets and frameless glass',
          'Exhaust fans ducted outside, not into the attic',
          'Grab bars and blocking for accessibility, installed at framing stage',
        ],
      },
      {
        slug: 'basement-finishing',
        title: 'Basement finishing',
        blurb: 'Unfinished space turned into a family room, office, gym or in-law suite.',
        photo: 'svc-basement',
        duration: '6 to 12 weeks',
        long:
          'A finished basement is the cheapest square footage you will ever add to a GTA house. We insulate to the current code, frame around the mechanicals rather than boxing you into a low ceiling, and plan the lighting before the drywall goes up.',
        bullets: [
          'Framing, insulation and vapour barrier to Ontario code',
          'Bathroom and wet bar rough-ins',
          'Egress windows cut and installed where a bedroom is planned',
          'Pot lights, sound insulation between floors and cold room reworks',
          'Engineered flooring or vinyl plank rated for below grade',
          'Separate entrance and second suite work where the zoning allows it',
        ],
      },
      {
        slug: 'whole-home-renovation',
        title: 'Whole-home renovations',
        blurb: 'Room by room or the full house, run by one project manager on one schedule.',
        photo: 'svc-wholehome',
        duration: '3 to 6 months',
        long:
          'The hard part of a full renovation is sequencing. Electrical before insulation, insulation before drywall, drywall before flooring, and an inspector booked at the right point in each. We hold that schedule so you are not the one phoning trades to ask where they are.',
        bullets: [
          'One contract, one schedule and one point of contact',
          'Structural work with drawings stamped by an engineer',
          'Full mechanical, electrical and plumbing replacement where the age of the house calls for it',
          'Knob-and-tube and galvanized pipe removal',
          'Staged work so you can keep living in part of the house',
          'Weekly written updates on what was done and what is next',
        ],
      },
      {
        slug: 'condo-renovation',
        title: 'Condo renovations',
        blurb: 'Downtown and midtown units, with the building paperwork handled for you.',
        photo: 'svc-condo',
        duration: '4 to 10 weeks',
        long:
          'Condo work is half construction and half property management. Every building has its own rules on working hours, elevator bookings, noise and insurance certificates. We submit the package, book the service elevator and keep the concierge informed so your neighbours stay on your side.',
        bullets: [
          'Board and property manager submissions prepared and filed',
          'Service elevator and loading dock booked around building rules',
          'Work kept inside permitted hours',
          'Sound and water protection required by the declaration',
          'Debris removed through the dock, never the passenger elevator',
          'Trades carrying the insurance certificates the building asks for',
        ],
      },
      {
        slug: 'home-additions',
        title: 'Additions',
        blurb: 'Rear, side and second-storey additions, from drawings through final inspection.',
        photo: 'svc-addition',
        duration: '5 to 12 months',
        long:
          'An addition starts long before anyone digs. Drawings, a survey, zoning review, and sometimes a Committee of Adjustment hearing all come first. We walk that with you and give you a realistic date for when framing actually starts.',
        bullets: [
          'Architectural drawings and a structural engineer’s stamp',
          'Zoning review and Committee of Adjustment applications',
          'Building permits pulled in our name',
          'Footings, foundation, framing and roof tie-in',
          'Second-storey additions on existing foundations where the footings allow it',
          'Interior finishing so the new space matches the old',
        ],
      },
      {
        slug: 'decks-and-porches',
        title: 'Decks and porches',
        blurb: 'Pressure-treated, cedar and composite decks, plus front porches and covered structures.',
        photo: 'svc-deck',
        duration: '1 to 3 weeks',
        long:
          'A deck is a small structure with real loads on it. We set proper footings below the frost line, flash the ledger against the house so water cannot get behind the siding, and build railings that pass inspection rather than ones that merely look sturdy.',
        bullets: [
          'Sonotube footings below the frost line',
          'Ledger flashing and hangers rated for the span',
          'Pressure-treated, western red cedar and composite decking',
          'Glass, aluminum and wood railings to code height',
          'Pergolas, privacy screens and covered roofs',
          'Stairs, landings, skirting and under-deck storage',
        ],
      },
      {
        slug: 'exterior-renovation',
        title: 'Exterior work',
        blurb: 'Siding, soffit and fascia, eavestrough, windows, doors and front entrances.',
        photo: 'svc-exterior',
        duration: '1 to 4 weeks',
        long:
          'Most exterior calls we get start as a leak. We find where the water is actually entering, which is rarely where the stain shows up inside, and fix the detail rather than the symptom.',
        bullets: [
          'Vinyl, engineered wood, board and batten, and stucco',
          'Soffit, fascia, eavestrough and downspout reroutes',
          'Window and door replacement with proper flashing and sealing',
          'Front entrance rebuilds, steps and railings',
          'Stone and brick veneer on new and existing walls',
          'Waterproofing and grading where the ground slopes toward the house',
        ],
      },
    ],
  },

  stats: {
    eyebrow: 'By the numbers',
    heading: 'What you can hold us to',
    warranty: 'Year workmanship warranty',
    warrantyPlural: 'Years workmanship warranty',
    response: 'Business day to a callback',
    languages: 'Languages on site',
    languagesNote: 'English and Korean',
    years: 'Years in business',
    projects: 'Projects completed',
    free: 'Cost of an estimate',
    freeValue: '$0',
  },

  gallery: {
    eyebrow: 'Our work',
    heading: 'The kind of work we take on',
    lead:
      'Filter by room to see what a finished job looks like. Click any photo to open it larger.',
    all: 'Everything',
    filters: {
      kitchen: 'Kitchens',
      bathroom: 'Bathrooms',
      basement: 'Basements',
      'whole-home': 'Whole home',
      condo: 'Condos',
      exterior: 'Exterior and decks',
    },
    viewAll: 'See more of our work',
    lightbox: { close: 'Close', next: 'Next photo', prev: 'Previous photo', counter: 'Photo' },
    note:
      'Photography on this site is representative of the work we do. We are swapping these for photos of our own jobs as each one wraps.',
  },

  process: {
    eyebrow: 'How it goes',
    heading: 'Four steps, and you always know which one you are in',
    steps: [
      {
        title: 'You call, we come look',
        body:
          'Tell us roughly what you want. We come to the house, measure, take photos, and point out anything that is going to cost more than you expect. The visit is free and there is no obligation at the end of it.',
      },
      {
        title: 'You get a written quote',
        body:
          'Every line is priced separately, so you can see what the cabinets cost against what the tile costs. Allowances for anything you have not chosen yet are written in plain numbers, not hidden in a lump sum.',
      },
      {
        title: 'Permits, then we build',
        body:
          'Where a permit is needed we pull it in our name and meet the inspector. Once work starts you get a schedule, one person to call, and a message at the end of each week saying what got done.',
      },
      {
        title: 'Walkthrough, then warranty',
        body:
          'We walk the job with you and write a deficiency list. Nothing is called finished until that list is empty. After that the workmanship warranty runs, and you still call the same number.',
      },
    ],
  },

  why: {
    eyebrow: 'Why us',
    heading: 'Four things that are true here and are not everywhere',
    items: [
      {
        title: 'Ontario does not license renovators',
        body:
          'Anyone can print a business card that says contractor. So do not take our word for it. Ask us for a certificate of insurance, ask for the ESA licence number of whoever does your electrical, and ask for two addresses you can drive past. We will hand all three over without a pause.',
      },
      {
        title: 'The quote is itemized',
        body:
          'A single number at the bottom of a page is how change orders become arguments. When every line is priced, changing one thing changes one line and you can see it happen.',
      },
      {
        title: 'One person, start to finish',
        body:
          'You get a name and a mobile number on day one, and it is the same name on the last day. Nobody hands you to a coordinator halfway through.',
      },
      {
        title: 'English and Korean, on site',
        body:
          '영어와 한국어 모두 가능합니다. Technical decisions get made on site, often quickly, and it matters that you understand exactly what is being asked before you answer.',
      },
    ],
  },

  costs: {
    eyebrow: 'Ballpark',
    heading: 'What this usually costs in the GTA',
    lead:
      'These are typical Greater Toronto Area ranges as of 2026, meant for planning. They are not our prices. Your number is fixed in writing after we have seen the space, and it does not move unless you change the scope.',
    colWork: 'Work',
    colRange: 'Typical GTA range',
    rows: [
      { work: 'Bathroom, main or ensuite', range: '$15,000 to $45,000' },
      { work: 'Kitchen, gut to finish', range: '$30,000 to $110,000' },
      { work: 'Basement finishing', range: '$45,000 to $120,000' },
      { work: 'Deck, built new', range: '$8,000 to $35,000' },
      { work: 'Whole home', range: '$200 to $280 per square foot' },
      { work: 'Addition', range: '$350 to $550 per square foot' },
    ],
    footnote:
      'Wide ranges are honest ranges. A 40 square foot powder room and a 120 square foot ensuite with heated floors are both bathrooms, and they are not the same job.',
  },

  areas: {
    eyebrow: 'Where we work',
    heading: 'Toronto and across the GTA',
    lead:
      'If your address is not on this list, call anyway. We travel for the right job, and we will tell you on the phone if it is too far to do properly.',
  },

  faq: {
    eyebrow: 'Questions',
    heading: 'What people ask before they call',
    items: [
      {
        q: 'Is the estimate really free?',
        a: 'Yes. We come to the house, measure, talk through what you want and send a written quote. There is no charge and no obligation. If we are not the right fit we will say so on the visit rather than waste a week of yours.',
      },
      {
        q: 'Do you handle the permits?',
        a: 'Yes, and we pull them in our name. That matters more than it sounds: if a homeowner pulls the permit, the city holds the homeowner responsible for the work. We take that on. Structural changes, additions, second suites, decks over a certain height and most basement bathrooms all need one.',
      },
      {
        q: 'How long will my job take?',
        a: 'A bathroom is usually two to four weeks, a kitchen four to eight, a basement six to twelve, and an addition runs several months once you count drawings and permits. You get a dated schedule with the quote, and we tell you when something slips instead of letting you notice.',
      },
      {
        q: 'Can I live in the house while you work?',
        a: 'Usually yes. We hang dust barriers, run air scrubbers on dusty phases, and stage the work so you keep a functioning bathroom and kitchen for as much of it as we can. For a full gut it is easier on everyone if you move out for the noisy weeks, and we will tell you which ones those are.',
      },
      {
        q: 'What happens if the price changes?',
        a: 'It changes when the scope changes, and only in writing. If we open a wall and find knob-and-tube or rotted joists, work stops, we show you the photo, and you get a priced change order before anyone carries on. No surprise line items at the end.',
      },
      {
        q: '한국어로 상담이 가능한가요?',
        a: '네, 가능합니다. 전화 상담과 현장 방문, 견적서 설명까지 한국어로 진행할 수 있습니다. 이 웹사이트도 한국어로 보실 수 있습니다. Korean-language consultation, site visits and quote walkthroughs are all available.',
      },
      {
        q: 'Do you do small jobs?',
        a: 'Some. A single bathroom, a deck or a basement bathroom rough-in are all normal for us. A one-day repair usually is not, and you are better served by a handyman who charges by the hour. Call and ask. A straight answer costs you one phone call.',
      },
    ],
  },

  contact: {
    eyebrow: 'Get started',
    heading: 'Tell us what you are thinking about',
    lead:
      'The fastest route is the phone. If it is late or you would rather write it down, fill this in and we will call you back within one business day.',
    phoneLabel: 'Call or text',
    emailLabel: 'Email',
    hoursLabel: 'Hours',
    areaLabel: 'Service area',
    form: {
      name: 'Your name',
      namePlaceholder: 'Jane Kim',
      phone: 'Phone',
      phonePlaceholder: '416 555 0134',
      email: 'Email',
      emailPlaceholder: 'you@example.com',
      address: 'Property address or postal code',
      addressPlaceholder: 'M2N 5W9',
      service: 'What can we help with?',
      serviceOptions: [
        'Kitchen', 'Bathroom', 'Basement', 'Whole home', 'Condo',
        'Addition', 'Deck or porch', 'Exterior', 'Something else',
      ],
      timeline: 'When would you like to start?',
      timelineOptions: ['As soon as possible', 'Within 1 to 3 months', 'Within 3 to 6 months', 'Just planning for now'],
      budget: 'Rough budget (optional)',
      budgetOptions: ['Not sure yet', 'Under $25,000', '$25,000 to $50,000', '$50,000 to $100,000', '$100,000 to $250,000', 'Over $250,000'],
      message: 'Tell us about the project',
      messagePlaceholder: 'Rough size of the room, what you want changed, anything you already know is a problem.',
      language: 'Reply to me in',
      languageOptions: ['English', '한국어'],
      consent: 'You can call, text or email me about this project.',
      submit: 'Get my free estimate',
      required: 'Required',
      optional: 'optional',
      opensEmail:
        'This opens your email app with the details filled in, addressed to us. Nothing is sent until you press send there.',
      copied: 'Copied. Paste it into an email or a text to us.',
      copy: 'Copy the details instead',
      errorRequired: 'Please fill this in.',
      errorEmail: 'Please check this email address.',
      errorPhone: 'Please enter a phone number we can reach you on.',
      errorConsent: 'We need your permission to contact you about the project.',
      subject: 'Renovation enquiry from the website',
    },
  },

  footer: {
    blurb:
      'A general contractor working across Toronto and the GTA on kitchens, bathrooms, basements, additions, decks and exterior work.',
    servicesHeading: 'Services',
    companyHeading: 'Company',
    contactHeading: 'Contact',
    areasHeading: 'Service area',
    rights: 'All rights reserved.',
    photoCredit: 'Photography from Unsplash, used to represent the type of work described.',
    disclaimer:
      'Ontario does not license general contractors or renovators. Ask any contractor, including us, for proof of insurance and for references you can visit.',
    hst: 'HST',
  },

  pages: {
    home: {
      title: 'Kitchen, bathroom and basement renovations in Toronto and the GTA',
      description:
        'Five Star Reno is a general contractor working across Toronto and the GTA. Itemized written quotes, free on-site estimates, and English and Korean spoken. Call 647-893-8134.',
    },
    services: {
      title: 'Renovation services across Toronto and the GTA',
      description:
        'Kitchens, bathrooms, basements, whole-home renovations, condos, additions, decks and exterior work. One contract, one schedule, one person to call.',
      eyebrow: 'Services',
      heading: 'Everything we build',
      lead:
        'Eight services, all run the same way: a free visit, an itemized quote, permits in our name, and a walkthrough at the end.',
    },
    work: {
      title: 'Our work',
      description: 'Kitchens, bathrooms, basements, whole-home renovations, condos, decks and exteriors across the GTA.',
      eyebrow: 'Our work',
      heading: 'The work, room by room',
      lead:
        'Filter by room. Click a photo to open it larger, then use the arrow keys to move through the set.',
    },
    about: {
      title: 'About Five Star Reno',
      description:
        'A general contractor in Toronto and the GTA. How we quote, how we run a job site, and what we will not do.',
      eyebrow: 'About',
      heading: 'A small contractor that answers the phone',
      lead:
        'Five Star Reno is a renovation contractor working out of Toronto, across the GTA, on residential work. Kitchens, bathrooms, basements, additions, decks and exteriors.',
      body: [
        {
          h: 'How we quote',
          p: 'We come to the house before we write a number. Somebody who quotes a kitchen over the phone is guessing, and a guess always gets corrected in your direction later. After the visit you get a document with each line priced separately, allowances written out in dollars, and a start date we can actually hold.',
        },
        {
          h: 'How we run a site',
          p: 'Dust barriers go up before demolition, not after someone complains. Tools come off the floor at the end of the day and the site gets swept. Your driveway is not a dump bin, and the bin that is there gets covered. These sound like small things until you have lived through eight weeks without them.',
        },
        {
          h: 'What we will not do',
          p: 'We will not start work without a written scope. We will not bury electrical or plumbing changes that should have a permit. And we will not take a job we do not have the crew for, which occasionally means telling you to call someone else. That is a better outcome for you than a project that stalls in week three.',
        },
        {
          h: '한국어 상담',
          p: '전화 상담부터 현장 방문, 견적서 설명, 공사 중 진행 상황 보고까지 한국어로 진행합니다. 리노베이션은 결정해야 할 사항이 많고, 그 결정을 대부분 현장에서 빠르게 내려야 합니다. 그래서 내용을 정확히 이해하신 상태에서 답하시는 것이 중요합니다. 한국어가 편하시면 처음부터 한국어로 말씀해 주십시오.',
        },
      ],
    },
    contact: {
      title: 'Contact Five Star Reno',
      description:
        'Call 647-893-8134 or send us the details of your project. Free on-site estimates across Toronto and the GTA.',
    },
    notFound: {
      title: 'Page not found',
      heading: 'That page is not here',
      lead: 'The link may be old, or we may have moved the page. Here is the way back.',
      home: 'Go to the homepage',
    },
  },

  meta: {
    ogAlt: 'Five Star Reno, general contractor in Toronto and the GTA',
  },
};

export type Dict = typeof en;
