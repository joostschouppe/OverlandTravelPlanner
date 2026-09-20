// Country/region data for Oceania.
// Alphabetically ordered by name. Each entry:
//   id   - unique unit id (matches the map's country iso3 code, or iso3_region for
//          countries split into multiple climate regions)
//   iso  - ISO 3166-1 alpha-3 code used to match the map's GeoJSON country outlines
//   name - display name shown in the table and on the map
//   lat/lng - marker position on the map
//   climate - { codes, extra, note } or null if not yet researched
//     codes: 12-character string (JAN..DEC), one of V(avoid) / O(ok) / I(ideal)
//     extra: 12-entry array, each entry a combination of icon codes for that month
//            (or ""): H = extreme heat, C = extreme cold, R = extreme rain/monsoon,
//            T = overrun with tourists (only used where this is a genuine concern)
//     note: short free-text shown in a popup when clicking the country name
//   complexity - object with 9 fields (visa, particular, stayLength, extendStay,
//     carnet, vehicleStay, extendVeh, modernVeh, roadQuality), or null if not yet
//     researched. Each field: { level: "easy"|"moderate"|"hard", label, detail }
//   See /llm_update_instructions.md for the research prompt used to fill these in.
(function() {
  const OCEANIA_COUNTRIES = [
    { id: "AUS_central", iso: "AUS", name: "Australia – Central/Outback", lat: -25, lng: 133, continent: "Oceania",
      climate: {
        codes: "VVOIIIIIIOVV",
        extra: ["H", "H", "", "", "", "", "", "", "", "", "H", "H"],
        note: "Desert interior: brutally hot Dec-Feb (avoid), pleasant and dry May-Sep, best in the cooler shoulder months.",
      },
      complexity: {
        visa: { level: "easy", label: "eVisitor / ETA online", detail: "EU/Belgian passport holders apply online for a free eVisitor (subclass 651) visa, usually approved within a day or two, valid for multiple entries over 12 months." },
        particular: { level: "moderate", label: "Strict biosecurity, remote fuel gaps", detail: "Australia has very strict biosecurity rules (no fresh food, wood, soil crossing state lines in places); in the outback, fuel/water stops can be 300+ km apart and require planning." },
        stayLength: { level: "easy", label: "Up to 3 months per visit", detail: "eVisitor allows stays of up to 3 months per entry, multiple entries within its 12-month validity." },
        extendStay: { level: "moderate", label: "Possible but needs a new visa", detail: "No simple in-country extension of the eVisitor; a new visitor visa (subclass 600) application is generally needed to stay longer." },
        carnet: { level: "moderate", label: "No land border — sea freight only", detail: "There is no land or ferry route into Australia; a foreign-plated vehicle must be shipped in by sea freight (RoRo or container) to a port like Fremantle, Melbourne, or Brisbane. A Carnet de Passage is not typically required for temporary import by non-residents but full customs/quarantine clearance (including thorough vehicle cleaning for biosecurity) is mandatory." },
        vehicleStay: { level: "moderate", label: "12 months temporary import", detail: "Foreign vehicles can typically be temporarily imported for up to 12 months under the visitor's own use, arranged through Australian Border Force/customs at the port of entry." },
        extendVeh: { level: "hard", label: "Difficult beyond 12 months", detail: "Extending the vehicle's temporary import period beyond 12 months is difficult and requires special application; most overlanders plan to re-export or sell within that window." },
        modernVeh: { level: "moderate", label: "Good in towns, plan fuel in outback", detail: "Euro6 diesel (ULSD) is widely available in cities and along major highways; Mercedes-Benz has dealers in state capitals, but outback fuel stops may have lower-grade diesel and long distances between servos." },
        roadQuality: { level: "moderate", label: "Good highways, remote unsealed roads", detail: "Sealed highways are excellent, but much of the outback network (e.g. Oodnadatta Track, Tanami) is unsealed corrugated dirt, prone to becoming impassable after rare heavy rain, and requires high clearance/4WD in places." },
      },
    },
    { id: "AUS_north", iso: "AUS", name: "Australia – North", lat: -16, lng: 133, continent: "Oceania",
      climate: {
        codes: "VVVOIIIIIOVV",
        extra: ["HR", "HR", "R", "", "", "", "", "", "", "", "H", "H"],
        note: "Tropical monsoon climate: wet season (Nov-Apr) brings heavy rain, flooding and road closures; dry season (May-Oct) is the prime travel window.",
      },
      complexity: {
        visa: { level: "easy", label: "eVisitor / ETA online", detail: "EU/Belgian passport holders apply online for a free eVisitor (subclass 651) visa, usually approved within a day or two, valid for multiple entries over 12 months." },
        particular: { level: "moderate", label: "Wet-season road/river closures, crocs", detail: "Monsoon season floods many unsealed roads and river crossings (Nov-Apr), sometimes cutting off regions for weeks; saltwater crocodile awareness is essential near rivers/waterholes." },
        stayLength: { level: "easy", label: "Up to 3 months per visit", detail: "eVisitor allows stays of up to 3 months per entry, multiple entries within its 12-month validity." },
        extendStay: { level: "moderate", label: "Possible but needs a new visa", detail: "No simple in-country extension of the eVisitor; a new visitor visa (subclass 600) application is generally needed to stay longer." },
        carnet: { level: "moderate", label: "No land border — sea freight only", detail: "There is no land or ferry route into Australia; a foreign-plated vehicle must be shipped in by sea freight to a port such as Darwin or Brisbane. A Carnet de Passage is not typically required for temporary import by non-residents but full customs/quarantine clearance is mandatory." },
        vehicleStay: { level: "moderate", label: "12 months temporary import", detail: "Foreign vehicles can typically be temporarily imported for up to 12 months for personal use, arranged through Australian Border Force/customs at the port of entry." },
        extendVeh: { level: "hard", label: "Difficult beyond 12 months", detail: "Extending the vehicle's temporary import period beyond 12 months is difficult and requires special application." },
        modernVeh: { level: "moderate", label: "Good in Darwin, rural gaps in wet season", detail: "Euro6 diesel is available in Darwin and along major routes; Mercedes-Benz dealer presence is limited to Darwin, and wet-season flooding can disrupt fuel supply logistics in remoter towns." },
        roadQuality: { level: "hard", label: "Wet-season flooding closes many routes", detail: "Sealed highways (e.g. Stuart Highway) are generally good, but many unsealed roads (Gibb River Road, Cape York tracks) become impassable or are officially closed during the monsoon (Nov-Apr) due to flooding." },
      },
    },
    { id: "AUS_south", iso: "AUS", name: "Australia – South/East", lat: -33, lng: 148, continent: "Oceania",
      climate: {
        codes: "OOIIIIOOIIIO",
        extra: ["H", "H", "", "", "", "", "", "", "", "", "", "H"],
        note: "Temperate south/east coast: hot summers (Dec-Feb, bushfire risk), mild pleasant autumn/spring, cool winters especially in the highlands.",
      },
      complexity: {
        visa: { level: "easy", label: "eVisitor / ETA online", detail: "EU/Belgian passport holders apply online for a free eVisitor (subclass 651) visa, usually approved within a day or two, valid for multiple entries over 12 months." },
        particular: { level: "moderate", label: "Strict biosecurity, bushfire season", detail: "Strict interstate biosecurity checks (fruit, plants, honey) and total fire ban days in summer restrict campfire use and sometimes vehicle access to bush areas during high bushfire risk." },
        stayLength: { level: "easy", label: "Up to 3 months per visit", detail: "eVisitor allows stays of up to 3 months per entry, multiple entries within its 12-month validity." },
        extendStay: { level: "moderate", label: "Possible but needs a new visa", detail: "No simple in-country extension of the eVisitor; a new visitor visa (subclass 600) application is generally needed to stay longer." },
        carnet: { level: "moderate", label: "No land border — sea freight only", detail: "There is no land or ferry route into Australia; a foreign-plated vehicle must be shipped in by sea freight to a port such as Melbourne, Sydney, or Brisbane. A Carnet de Passage is not typically required for temporary import by non-residents but full customs/quarantine clearance is mandatory." },
        vehicleStay: { level: "moderate", label: "12 months temporary import", detail: "Foreign vehicles can typically be temporarily imported for up to 12 months for personal use, arranged through Australian Border Force/customs at the port of entry." },
        extendVeh: { level: "hard", label: "Difficult beyond 12 months", detail: "Extending the vehicle's temporary import period beyond 12 months is difficult and requires special application." },
        modernVeh: { level: "easy", label: "Excellent support along the coast", detail: "Euro6 diesel and full Mercedes-Benz dealer/service network are readily available in and between Sydney, Melbourne, Brisbane, and Adelaide, the best-supported region in the country." },
        roadQuality: { level: "easy", label: "Well-maintained sealed network", detail: "The southeast has Australia's best road network — sealed, well-maintained highways connecting all major cities, with only occasional flooding/bushfire-related closures on specific routes." },
      },
    },
    { id: "NZL", iso: "NZL", name: "New Zealand", lat: -40.55, lng: 172.51, continent: "Oceania",
      climate: {
        codes: "IIIOOVVOOOII",
        extra: ["T", "T", "", "", "", "C", "C", "", "", "", "", "T"],
        note: "Temperate maritime climate; Dec-Feb summer is ideal but very touristy in popular spots, winter (Jun-Aug) brings snow/cold especially in the South Island mountains.",
      },
      complexity: {
        visa: { level: "easy", label: "NZeTA + visa-free entry", detail: "Belgian/EU citizens require a New Zealand Electronic Travel Authority (NZeTA), applied online before travel, plus pay the International Visitor Levy; actual visa-free entry follows for up to 3 months." },
        particular: { level: "easy", label: "Freedom camping rules vary by area", detail: "No mandatory guide or special permits, but many regions restrict or ban freedom camping outside certified self-contained vehicles/designated sites — a certified self-contained camper avoids most restrictions." },
        stayLength: { level: "easy", label: "Up to 3 months", detail: "Standard visitor entry allows up to 3 months (up to 6 months for UK citizens) per visit." },
        extendStay: { level: "moderate", label: "Possible via Immigration NZ", detail: "Extensions beyond 3 months are possible through Immigration New Zealand but require justification and are not automatic." },
        carnet: { level: "moderate", label: "No land border — sea freight only", detail: "New Zealand is only reachable by sea/air; a foreign-plated vehicle must be shipped in by sea freight (commonly via Auckland or Lyttelton). A Carnet de Passage is not usually required for temporary import by visitors, but MPI biosecurity inspection/cleaning is mandatory and thorough." },
        vehicleStay: { level: "moderate", label: "12 months temporary import", detail: "Vehicles can typically be temporarily imported duty-free for up to 12 months for a visitor's personal use, arranged with NZ Customs at the port of entry." },
        extendVeh: { level: "hard", label: "Difficult beyond 12 months", detail: "Extending the vehicle's temporary import period beyond 12 months requires a special customs application and is not routine." },
        modernVeh: { level: "easy", label: "Excellent support nationwide", detail: "Euro6 diesel is standard and widely available; Mercedes-Benz has dealers in main centers (Auckland, Wellington, Christchurch) with good parts/service access for a Sprinter." },
        roadQuality: { level: "moderate", label: "Good but winding, weather-exposed", detail: "Roads are well-maintained but often narrow and winding through mountainous terrain; South Island alpine passes can close temporarily for snow/ice in winter (Jun-Aug), and heavy rain occasionally triggers slips/closures." },
      },
    },
    { id: "PNG", iso: "PNG", name: "Papua New Guinea", lat: -6.58, lng: 148.51, continent: "Oceania",
      climate: {
        codes: "VVVOOOOOOOVV",
        extra: ["HR", "HR", "R", "", "", "", "", "", "", "", "R", "HR"],
        note: "Equatorial climate, hot and humid year-round with heavy rainfall; the relatively drier June-September window is most practical for travel.",
      },
      complexity: {
        visa: { level: "moderate", label: "e-visa or visa on arrival", detail: "EU/Belgian citizens can obtain a PNG e-visa online in advance or a visa on arrival at Port Moresby; process is straightforward but requires proof of accommodation/onward travel." },
        particular: { level: "hard", label: "Security risk, limited road network", detail: "Significant law-and-order/security concerns in parts of the country (especially Highlands Highway areas and some urban centers) mean local advice and caution are essential; PNG has one of the least-developed road networks in the region and many regions are only reachable by air or sea." },
        stayLength: { level: "moderate", label: "Typically 60 days", detail: "Tourist visas are commonly granted for up to 60 days depending on visa type." },
        extendStay: { level: "hard", label: "Bureaucratic, via Immigration in Port Moresby", detail: "Extensions require in-person application at PNG Immigration and Citizenship Service Authority in Port Moresby, with unpredictable processing." },
        carnet: { level: "hard", label: "No land border — sea freight only, rare", detail: "PNG has no land border reachable by vehicle from outside (the Indonesian land border with Papua is not a viable/legal overland vehicle crossing); a foreign vehicle would need sea freight to Port Moresby or Lae. This is very rarely done and poorly documented — expect significant logistical difficulty and bureaucracy, and verify current requirements directly with PNG customs before attempting." },
        vehicleStay: { level: "hard", label: "Uncertain, rarely done", detail: "Temporary vehicle import processes for private foreign vehicles are not well established or commonly used; expect to negotiate directly with PNG Customs and possibly a local agent." },
        extendVeh: { level: "hard", label: "Uncertain, case-by-case", detail: "No standard extension process exists given how rare private vehicle imports are; this would be highly case-by-case." },
        modernVeh: { level: "hard", label: "Poor outside Port Moresby", detail: "Fuel quality/availability and Euro6 diesel are unreliable outside main towns; no Mercedes-Benz dealer network exists, and parts/service for a Sprinter would need to be flown in or handled by generalist mechanics at best." },
        roadQuality: { level: "hard", label: "Very poor, rain-damaged, few connections", detail: "PNG's road network is limited and often in poor condition, with mountainous terrain, frequent landslides, and monsoonal rain washing out routes; many regions have no road connection at all and require air or sea transport." },
      },
    },
  ];
  window.COUNTRY_DATA = window.COUNTRY_DATA || [];
  window.COUNTRY_DATA.push(...OCEANIA_COUNTRIES);
})();
