/**
 * Photo manifest.
 *
 * Every photo here is a generic stock image from Unsplash, downloaded into
 * /public/images at build-prep time by `npm run images`. They stand in for
 * Five Star Reno's own project photography.
 *
 * REPLACE THESE with real job photos as they become available. Drop a file at
 * public/images/<slug>-1280.jpg (and -640.jpg) and the site picks it up with no
 * other change. Captions describe the type of work, never a specific job, so
 * nothing on the page claims a project that did not happen.
 */

export type Category = 'kitchen' | 'bathroom' | 'basement' | 'whole-home' | 'condo' | 'exterior';

export interface Photo {
  slug: string;
  id: string;           // Unsplash photo id
  /** Widths downloaded, smallest first. The largest is the default src. */
  widths: number[];
  alt: { en: string; ko: string };
  category?: Category;
}

export const photos: Photo[] = [
  // ---- Hero and section backgrounds -------------------------------------
  { slug: 'hero-living', id: 'photo-1600210491892-03d54c0aaf87', widths: [960, 1600, 2400],
    alt: { en: 'Bright living room with exposed beams, arched windows and a white fireplace',
           ko: '노출 들보와 아치형 창문, 흰색 벽난로가 있는 밝은 거실' } },
  { slug: 'craft-carpenter', id: 'photo-1589939705384-5185137a7f0f', widths: [960, 1600, 2400],
    alt: { en: 'Carpenter cutting a length of framing lumber with a circular saw',
           ko: '원형 톱으로 구조용 목재를 절단하는 목수' } },
  { slug: 'band-openplan', id: 'photo-1593696140826-c58b021acf8b', widths: [960, 1600, 2400],
    alt: { en: 'Open-concept living and dining area after a full renovation',
           ko: '전면 리노베이션을 마친 개방형 거실과 다이닝 공간' } },

  // ---- Service cards ----------------------------------------------------
  { slug: 'svc-kitchen', id: 'photo-1600489000022-c2086d79f9d4', widths: [640, 1280],
    alt: { en: 'Kitchen with deep green shaker cabinets, open shelving and a subway tile backsplash',
           ko: '짙은 녹색 셰이커 캐비닛과 오픈 선반, 서브웨이 타일 백스플래시를 갖춘 주방' }, category: 'kitchen' },
  { slug: 'svc-bathroom', id: 'photo-1600566752355-35792bedcfea', widths: [640, 1280],
    alt: { en: 'Renovated bathroom with a freestanding tub, walk-in shower and floating vanity',
           ko: '독립형 욕조와 워크인 샤워부스, 벽걸이형 세면대를 갖춘 리노베이션 욕실' }, category: 'bathroom' },
  { slug: 'svc-basement', id: 'photo-1584622781564-1d987f7333c1', widths: [640, 1280],
    alt: { en: 'Finished lower-level family room with hardwood floors and a fireplace',
           ko: '원목 바닥과 벽난로를 갖춘 완공된 지하 가족실' }, category: 'basement' },
  { slug: 'svc-wholehome', id: 'photo-1598928506311-c55ded91a20c', widths: [640, 1280],
    alt: { en: 'Living room with a coffered ceiling and built-in cabinetry after a whole-home renovation',
           ko: '전체 리노베이션 후 우물 천장과 붙박이장을 갖춘 거실' }, category: 'whole-home' },
  { slug: 'svc-condo', id: 'photo-1600607687920-4e2a09cf159d', widths: [640, 1280],
    alt: { en: 'Condo kitchen and dining area with a dark stone island and floor-to-ceiling glass',
           ko: '짙은 석재 아일랜드와 통유리창을 갖춘 콘도 주방 및 다이닝 공간' }, category: 'condo' },
  { slug: 'svc-addition', id: 'photo-1604014237800-1c9102c219da', widths: [640, 1280],
    alt: { en: 'Rear addition opening onto a cedar deck through wide sliding glass doors',
           ko: '넓은 슬라이딩 유리문을 통해 시더 데크로 이어지는 후면 증축 공간' }, category: 'whole-home' },
  { slug: 'svc-deck', id: 'photo-1617850687395-620757feb1f3', widths: [640, 1280],
    alt: { en: 'Backyard deck of wide timber boards with lounge chairs and planters, seen from above',
           ko: '위에서 내려다본 넓은 목재 데크와 라운지 의자, 화분' }, category: 'exterior' },
  { slug: 'svc-exterior', id: 'photo-1598228723793-52759bba239c', widths: [640, 1280],
    alt: { en: 'Two-storey brick house with a new roof, soffit and front entrance',
           ko: '새 지붕과 처마, 현관을 시공한 2층 벽돌 주택' }, category: 'exterior' },

  // ---- Gallery: kitchens ------------------------------------------------
  { slug: 'g-kitchen-marble', id: 'photo-1556911220-bff31c812dba', widths: [640, 1280],
    alt: { en: 'White kitchen with a marble counter, gas range and integrated oven',
           ko: '대리석 상판과 가스레인지, 빌트인 오븐을 갖춘 화이트 주방' }, category: 'kitchen' },
  { slug: 'g-kitchen-island', id: 'photo-1600585152220-90363fe7e115', widths: [640, 1280],
    alt: { en: 'Kitchen island with four stools under three pendant lights',
           ko: '세 개의 펜던트 조명 아래 스툴 네 개를 배치한 주방 아일랜드' }, category: 'kitchen' },
  { slug: 'g-kitchen-shaker', id: 'photo-1601760561441-16420502c7e0', widths: [640, 1280],
    alt: { en: 'White shaker kitchen with a farmhouse sink and stainless appliances',
           ko: '팜하우스 싱크와 스테인리스 가전을 갖춘 화이트 셰이커 주방' }, category: 'kitchen' },
  { slug: 'g-kitchen-wood', id: 'photo-1600607686527-6fb886090705', widths: [640, 1280],
    alt: { en: 'Kitchen with pale oak cabinetry, a wall oven and black pendant lights',
           ko: '밝은 오크 캐비닛과 벽 오븐, 검은색 펜던트 조명을 갖춘 주방' }, category: 'kitchen' },
  { slug: 'g-kitchen-galley', id: 'photo-1507089947368-19c1da9775ae', widths: [640, 1280],
    alt: { en: 'Galley kitchen with a stone hood, quartz counters and glass pendants',
           ko: '석재 후드와 쿼츠 상판, 유리 펜던트 조명을 갖춘 일자형 주방' }, category: 'kitchen' },
  { slug: 'g-kitchen-blue', id: 'photo-1588854337236-6889d631faa8', widths: [640, 1280],
    alt: { en: 'Kitchen with glossy blue cabinets and a veined stone waterfall island',
           ko: '광택 있는 블루 캐비닛과 무늬 석재 워터폴 아일랜드를 갖춘 주방' }, category: 'kitchen' },

  // ---- Gallery: bathrooms ----------------------------------------------
  { slug: 'g-bath-grey', id: 'photo-1604709177225-055f99402ea3', widths: [640, 1280],
    alt: { en: 'Grey porcelain bathroom with twin vessel sinks and a freestanding tub',
           ko: '회색 포세린 타일과 두 개의 볼세면기, 독립형 욕조를 갖춘 욕실' }, category: 'bathroom' },
  { slug: 'g-bath-glass', id: 'photo-1584622650111-993a426fbf0a', widths: [640, 1280],
    alt: { en: 'Ensuite with a glass shower enclosure, black fixtures and a wide mirror',
           ko: '유리 샤워부스와 블랙 수전, 넓은 거울을 갖춘 안방 욕실' }, category: 'bathroom' },
  { slug: 'g-bath-tub', id: 'photo-1620626011761-996317b8d101', widths: [640, 1280],
    alt: { en: 'Soaker tub beside a window with a wall-mounted filler and stone sink',
           ko: '창가에 놓인 욕조와 벽걸이형 수전, 석재 세면대' }, category: 'bathroom' },
  { slug: 'g-bath-white', id: 'photo-1552321554-5fefe8c9ef14', widths: [640, 1280],
    alt: { en: 'Small bathroom with wainscoting, a pedestal sink and plants on the sill',
           ko: '웨인스코팅과 페데스탈 세면대, 창턱의 화분이 있는 소형 욕실' }, category: 'bathroom' },
  { slug: 'g-bath-tile', id: 'photo-1523413651479-597eb2da0ad6', widths: [640, 1280],
    alt: { en: 'Close view of a white subway tile wall behind a black gooseneck faucet',
           ko: '검은색 구스넥 수전 뒤로 보이는 화이트 서브웨이 타일 벽' }, category: 'bathroom' },

  // ---- Gallery: basements ----------------------------------------------
  { slug: 'g-base-rec', id: 'photo-1615529182904-14819c35db37', widths: [640, 1280],
    alt: { en: 'Lower-level sitting room with pot lights, a sectional and woven pendants',
           ko: '매입 조명과 코너 소파, 라탄 펜던트 조명을 갖춘 지하 거실' }, category: 'basement' },
  { slug: 'g-base-empty', id: 'photo-1630699144867-37acec97df5a', widths: [640, 1280],
    alt: { en: 'Empty finished room with new vinyl plank flooring and a large window',
           ko: '새 비닐 플랭크 바닥과 큰 창문을 갖춘 빈 완공 공간' }, category: 'basement' },
  { slug: 'g-base-stairs', id: 'photo-1502005229762-cf1b2da7c5d6', widths: [640, 1280],
    alt: { en: 'Open-riser staircase with a steel railing connecting two finished levels',
           ko: '두 층을 연결하는 스틸 난간의 오픈 라이저 계단' }, category: 'basement' },
  { slug: 'g-base-suite', id: 'photo-1631679706909-1844bbd07221', widths: [640, 1280],
    alt: { en: 'Neutral sitting area with a curved sofa, round mirrors and a pale rug',
           ko: '곡선형 소파와 원형 거울, 밝은 러그를 배치한 차분한 색조의 거실' }, category: 'basement' },

  // ---- Gallery: whole home ---------------------------------------------
  { slug: 'g-home-open', id: 'photo-1600210492486-724fe5c67fb0', widths: [640, 1280],
    alt: { en: 'Sunlit living room with a leather sofa, gallery wall and tall plants',
           ko: '가죽 소파와 갤러리 월, 키 큰 화분이 있는 햇살 가득한 거실' }, category: 'whole-home' },
  { slug: 'g-home-warm', id: 'photo-1618221195710-dd6b41faaea6', widths: [640, 1280],
    alt: { en: 'Living room with clerestory windows, a grey sofa and leather ottomans',
           ko: '고측창과 회색 소파, 가죽 오토만을 배치한 거실' }, category: 'whole-home' },
  { slug: 'g-home-stair', id: 'photo-1600566753086-00f18fb6b3ea', widths: [640, 1280],
    alt: { en: 'Double-height living space with a floating staircase and white sofas',
           ko: '플로팅 계단과 흰색 소파가 있는 층고 높은 거실' }, category: 'whole-home' },
  { slug: 'g-home-hall', id: 'photo-1581858726788-75bc0f6a952d', widths: [640, 1280],
    alt: { en: 'Hallway with new oak flooring, a walnut console and a round mirror',
           ko: '새 오크 바닥과 월넛 콘솔, 원형 거울이 있는 복도' }, category: 'whole-home' },
  { slug: 'g-home-bed', id: 'photo-1615529162924-f8605388461d', widths: [640, 1280],
    alt: { en: 'Bedroom with panelled walls, layered bedding and a bench at the foot of the bed',
           ko: '패널 벽과 침구, 침대 발치의 벤치를 갖춘 침실' }, category: 'whole-home' },
  { slug: 'g-home-millwork', id: 'photo-1595428774223-ef52624120d2', widths: [640, 1280],
    alt: { en: 'Close view of custom millwork shelving in oak and pale plaster',
           ko: '오크와 밝은 회벽으로 마감한 맞춤 목공 선반의 근접 사진' }, category: 'whole-home' },

  // ---- Gallery: condo ---------------------------------------------------
  { slug: 'g-condo-living', id: 'photo-1600607687939-ce8a6c25118c', widths: [640, 1280],
    alt: { en: 'Condo living room with a walnut feature wall and a low grey sectional',
           ko: '월넛 포인트 월과 낮은 회색 코너 소파를 갖춘 콘도 거실' }, category: 'condo' },
  { slug: 'g-condo-bed', id: 'photo-1631049307264-da0ec9d70304', widths: [640, 1280],
    alt: { en: 'Condo bedroom with an upholstered headboard and blackout drapery',
           ko: '패브릭 헤드보드와 암막 커튼을 갖춘 콘도 침실' }, category: 'condo' },
  { slug: 'g-condo-suite', id: 'photo-1616594039964-ae9021a400a0', widths: [640, 1280],
    alt: { en: 'Dark-walled bedroom with a brass chandelier and city views',
           ko: '어두운 색 벽과 황동 샹들리에, 도시 전망을 갖춘 침실' }, category: 'condo' },

  // ---- Gallery: exterior and decks --------------------------------------
  { slug: 'g-ext-deck2', id: 'photo-1600585154084-4e5fe7c39198', widths: [640, 1280],
    alt: { en: 'Living room opening through glass walls onto a covered deck',
           ko: '유리벽을 통해 지붕 있는 데크로 이어지는 거실' }, category: 'exterior' },
  { slug: 'g-ext-porch', id: 'photo-1560184897-ae75f418493e', widths: [640, 1280],
    alt: { en: 'Covered front porch with painted decking, a wicker bench and a lantern',
           ko: '도장 마감 바닥과 라탄 벤치, 랜턴 조명을 갖춘 지붕 있는 현관 포치' }, category: 'exterior' },
  { slug: 'g-ext-craftsman', id: 'photo-1625602812206-5ec545ca1231', widths: [640, 1280],
    alt: { en: 'Craftsman-style house with cedar shingles, white columns and a wide porch',
           ko: '시더 싱글과 흰색 기둥, 넓은 포치를 갖춘 크래프츠맨 스타일 주택' }, category: 'exterior' },
  { slug: 'g-ext-modern', id: 'photo-1600047509782-20d39509f26d', widths: [640, 1280],
    alt: { en: 'Modern house with a flat roof, timber soffit and a rear deck',
           ko: '평지붕과 목재 처마, 후면 데크를 갖춘 현대식 주택' }, category: 'exterior' },
  { slug: 'g-ext-street', id: 'photo-1605146769289-440113cc3d00', widths: [640, 1280],
    alt: { en: 'Row of newly built detached houses with brick and stone fronts',
           ko: '벽돌과 석재로 마감한 신축 단독주택이 늘어선 거리' }, category: 'exterior' },
  { slug: 'g-ext-white', id: 'photo-1572120360610-d971b9d7767c', widths: [640, 1280],
    alt: { en: 'White clapboard house with a covered porch and dormer windows',
           ko: '지붕 있는 포치와 도머 창을 갖춘 흰색 판벽 주택' }, category: 'exterior' },
  { slug: 'g-ext-soffit', id: 'photo-1503594384566-461fe158e797', widths: [640, 1280],
    alt: { en: 'Close view of white siding, soffit, fascia and an eavestrough against blue sky',
           ko: '푸른 하늘을 배경으로 한 흰색 사이딩과 처마, 빗물받이의 근접 사진' }, category: 'exterior' },

  // ---- Trades at work ---------------------------------------------------
  { slug: 'work-insulation', id: 'photo-1607400201889-565b1ee75f8e', widths: [640, 1280],
    alt: { en: 'Installer fitting batt insulation between wall studs',
           ko: '벽체 스터드 사이에 단열재를 시공하는 작업자' } },
  { slug: 'work-plans', id: 'photo-1503387762-592deb58ef4e', widths: [640, 1280],
    alt: { en: 'Contractor marking up a set of drawings with a scale rule',
           ko: '스케일 자로 도면을 검토하며 표시하는 시공 담당자' } },
  { slug: 'work-electrical', id: 'photo-1621905251189-08b45d6a269e', widths: [640, 1280],
    alt: { en: 'Electrician wiring a panel box on a wall',
           ko: '벽면 분전반에 배선 작업을 하는 전기 기술자' } },
];

export const bySlug: Record<string, Photo> = Object.fromEntries(photos.map((p) => [p.slug, p]));

export function photo(slug: string): Photo {
  const p = bySlug[slug];
  if (!p) throw new Error(`Unknown photo slug: ${slug}`);
  return p;
}

export function inCategory(cat: Category): Photo[] {
  return photos.filter((p) => p.category === cat && p.slug.startsWith('g-'));
}
