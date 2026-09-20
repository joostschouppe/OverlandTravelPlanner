Content was created with a prompt like the below:

You are helping me fact-check and update a travel-planning data table about overland travel complexity for [COUNTRY NAME]. I'm traveling as a [YOUR NATIONALITY] passport holder, driving a foreign-registered vehicle (e.g. a European Mercedes Sprinter van).
For this country, give me current, verified information for each of the following 9 fields. For each field, give:
1. A "level": easy, moderate, or hard (traffic-light style — easy=straightforward, moderate=some bureaucracy/friction, hard=very restrictive or complex)
2. A short "label" (max ~6 words, shown in a compact table cell)
3. A one-to-three sentence "detail" (shown in a popup on click) — be specific, mention exact durations/permits/agencies where relevant, and flag anything that changes often or is nationality-dependent
Fields:
1. visa — visa requirement and how to obtain it (on arrival, e-visa, embassy application, invitation letter needed, etc.)
2. particular — any legally required particularities: mandatory guide, mandatory travel/health insurance, permits for specific regions, registration requirements. Do NOT mention the absence of a guide requirement — only mention guide/escort rules if they are actually legally mandatory.
3. stayLength — the default/standard permitted length of stay for a tourist
4. extendStay — how hard it is to extend that stay from inside the country
5. carnet — whether a Carnet de Passage is required for a foreign private vehicle, how strictly it's enforced, and note if there's no land border (i.e. only sea/ferry/freight options exist) rather than just saying "not applicable"
6. vehicleStay — how long the vehicle itself is permitted to stay (temporary import duration)
7. extendVeh — how hard it is to extend the vehicle's permitted stay
8. modernVeh — how well-suited the country is for a modern Euro6 diesel vehicle and specifically a Mercedes Sprinter AWD: fuel quality/availability, dealer/service network, parts availability
9. roadQuality — road conditions, including susceptibility to flooding, mountain-pass closures, monsoon/landslide risk, or other seasonal/route-specific hazards
Important:
- Prioritize current information (rules change often, especially e-visa systems, sanctions-related effects, and permit requirements) — flag anything you're not confident is still accurate.
- Where rules depend on nationality, state which nationality/nationalities your answer assumes.
- Where multiple credible sources disagree or the situation is fluid (e.g. security situations, sanctions), say so explicitly rather than picking one confident answer.
- Output as a JS object literal matching this exact structure so I can paste it directly into my data file:
{
  visa:        { level: "...", label: "...", detail: "..." },
  particular:  { level: "...", label: "...", detail: "..." },
  stayLength:  { level: "...", label: "...", detail: "..." },
  extendStay:  { level: "...", label: "...", detail: "..." },
  carnet:      { level: "...", label: "...", detail: "..." },
  vehicleStay: { level: "...", label: "...", detail: "..." },
  extendVeh:   { level: "...", label: "...", detail: "..." },
  modernVeh:   { level: "...", label: "...", detail: "..." },
  roadQuality: { level: "...", label: "...", detail: "..." },
}
---
Swap in the country name and your actual nationality, and run it one country at a time (or batch a few similar ones, like the Gulf states together) so the model can focus and you can spot-check each result before pasting it back into the HTML files.

If the "best travel time" info is also requested, use websites like www.columbusmagazine.nl/bestemming/azie/oezbekistan/ to get an idea of the best climate for travelling and make a classification in three categories, like currently used. Give months an extra mark for:
- extreme heath
- heavy rains
- extreme cold
- very busy with tourists (local or otherwise)