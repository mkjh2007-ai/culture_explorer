// Culture Explorer - Core JavaScript Application Engine

// Robust fallback images (Unsplash vintage travel journal + local SVG compass stamp Data URI)
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&q=80";
const SVG_FALLBACK = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23f5f3eb' stroke='%232D2B2A' stroke-width='2'/><path d='M30,35 L70,35 M30,50 L70,50 M30,65 L55,65' stroke='%232d2b2a' stroke-width='2' stroke-linecap='round'/><circle cx='70' cy='70' r='12' fill='none' stroke='%23e05a36' stroke-width='2'/><path d='M66,66 L74,74 M74,66 L66,74' stroke='%23e05a36' stroke-width='1.5'/></svg>";

// 1. Destination Database with rich educational properties & real photographs (3 images per destination)
const DESTINATIONS = [
  {
    id: "yogyakarta",
    name: "Yogyakarta",
    country: "Indonesia",
    flag: "🇮🇩",
    imageColor: "linear-gradient(135deg, #10B981, #06B6D4)",
    imageUrl: "/culture_explorer/images/Yogyakarta/yogyakarta-food.jpeg",
    foodUrl: "/culture_explorer/images/Yogyakarta/yogyakarta-food.jpeg",
    craftUrl: "/culture_explorer/images/Yogyakarta/yogyakarta-culture.jpeg",
    cultureUrl: "/culture_explorer/images/Yogyakarta/yogyakarta-dance.jpeg",
    monumentUrl: "/culture_explorer/images/Yogyakarta/yogyakarta-monument.jpeg",
    culturalSignificance: "The cradle of Javanese civilization, Yogyakarta is a royal city where ancient sultanates, artistic traditions, and spiritual heritage remain an active part of daily life rather than just history.",
    traditionalFood: "Gudeg - a slow-cooked, rich stew made from young jackfruit, coconut milk, palm sugar, and local spices, served with chicken and rice.",
    artCraft: "Batik Tulis - the meticulous process of hand-drawing wax-resist patterns on textiles, and silver filigree crafting in the historical district of Kotagede.",
    dances: "The Ramayana Ballet - a breathtaking theatrical dance performance held under the open stars against the backdrop of the illuminated Prambanan temples.",
    monuments: "Borobudur Temple (a majestic 9th-century Buddhist pyramid temple) and Prambanan Temple (towering Hindu temples).",
    activities: [
      "Climbing Borobudur at sunrise for panoramic volcanic views",
      "Taking a private batik-making workshop from a neighborhood artisan",
      "Exploring the historic lanes of the Sultan's Palace (Kraton) by bicycle"
    ],
    budgetLevel: "low",
    climate: "warm",
    tags: {
      history: true, culture: true, art: true, food: true, nature: false, shopping: true,
      quiet: true, adventure: false, relaxation: true, city: false,
      warm: true, cool: false, fourseasons: false,
      deep: true, moderate: false, light: false
    }
  },
  {
    id: "kanazawa",
    name: "Kanazawa",
    country: "Japan",
    flag: "🇯🇵",
    imageColor: "linear-gradient(135deg, #F59E0B, #EC4899)",
    imageUrl: "https://images.unsplash.com/photo-1590483736622-39da8af75bba?auto=format&fit=crop&w=600&q=80", // Higashi Chaya
    foodUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=300&q=80",      // Omicho seafood
    craftUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=300&q=80",     // Gold details/leaf style
    monumentUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=300&q=80",  // Kenroku-en garden
    cultureUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=300&q=80",   // Traditional geisha arts
    culturalSignificance: "A historic treasure that escaped WWII bombing, Kanazawa preserves intact samurai quarters, historical geisha districts, and refined artisan traditions dating back to the Maeda Clan rule.",
    traditionalFood: "Jibuni - duck or chicken coated in flour, simmered in a rich soy-dashi broth with seasonal mountain vegetables.",
    artCraft: "Kanazawa Haku - the extraordinary craft of beating gold into micro-thin leaves (1/10,000 mm) to gild lacquerware, screens, and food.",
    dances: "Traditional Geisha dances, musical recitals, and classical Noh Theater dramas.",
    monuments: "Kenroku-en Garden (considered one of Japan's three perfect landscape gardens) and Kanazawa Castle ruins.",
    activities: [
      "Gilding your own chopsticks with pure gold leaf at an artisan workshop",
      "Sipping matcha tea in the wooden Higashi Chaya Geisha district",
      "Walking through the Nomura Samurai House to view its authentic Zen garden"
    ],
    budgetLevel: "high",
    climate: "four-seasons",
    tags: {
      history: true, culture: true, art: true, food: true, nature: false, shopping: true,
      quiet: true, adventure: false, relaxation: true, city: true,
      warm: false, cool: false, fourseasons: true,
      deep: false, moderate: true, light: false
    }
  },
  {
    id: "tainan",
    name: "Tainan",
    country: "Taiwan",
    flag: "🇹🇼",
    imageColor: "linear-gradient(135deg, #EF4444, #F97316)",
    imageUrl: "https://images.unsplash.com/photo-1627914945415-37599cb5103a?auto=format&fit=crop&w=600&q=80", // Tainan streets/lanterns
    foodUrl: "https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=300&q=80",      // Street food bowl
    craftUrl: "https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?auto=format&fit=crop&w=300&q=80",     // Paper lanterns
    monumentUrl: "https://images.unsplash.com/photo-1618944847023-38aa001235f0?auto=format&fit=crop&w=300&q=80",  // Historic temple Anping
    cultureUrl: "https://images.unsplash.com/photo-1598463239923-0a50f13a7c5e?auto=format&fit=crop&w=300&q=80",   // Temple ceremony/festival lanterns
    culturalSignificance: "As Taiwan's oldest city, Tainan is a spiritual haven dotted with hundreds of ancient temples, old merchant houses, and a legendary culinary scene that is the birthplace of street food culture.",
    traditionalFood: "Danzai Noodles (savory minced pork and shrimp broth noodles) and Tainan Beef Soup (raw local beef cooked instantly by pouring boiling broth over it).",
    artCraft: "Traditional temple mural painting, paper lantern crafting, and devotional wood carvings for shrines.",
    dances: "Ba Jia Jiang (Eight Generals) temple troupe dances, featuring dancers with painted faces performing ritual defense routines.",
    monuments: "Fort Provintia (Chihkan Tower) and the Anping Tree House (an old brick warehouse taken over by banyan trees).",
    activities: [
      "Embarking on a food tasting crawl through the bustling Yongle Market",
      "Cycling past red-brick temples and checking out Shennong Street artisan shops",
      "Exploring Anping Fort to learn about Taiwan's early maritime trade"
    ],
    budgetLevel: "low",
    climate: "warm",
    tags: {
      history: true, culture: true, art: false, food: true, nature: false, shopping: true,
      quiet: false, adventure: false, relaxation: true, city: true,
      warm: true, cool: false, fourseasons: false,
      deep: false, moderate: true, light: false
    }
  },
  {
    id: "gyeongju",
    name: "Gyeongju",
    country: "South Korea",
    flag: "🇰🇷",
    imageColor: "linear-gradient(135deg, #8B5CF6, #3B82F6)",
    imageUrl: "https://images.unsplash.com/photo-1620559670077-d4fa24f92d4f?auto=format&fit=crop&w=600&q=80", // Tomb park/Gyeongju
    foodUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=300&q=80",      // Korean table dishes
    craftUrl: "https://images.unsplash.com/photo-1576016770956-debb63d900ad?auto=format&fit=crop&w=300&q=80",     // Earthenware pots
    monumentUrl: "https://images.unsplash.com/photo-1620559670077-d4fa24f92d4f?auto=format&fit=crop&w=300&q=80",  // Bulguksa grotto context
    cultureUrl: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=300&q=80",   // Palace hanbok ceremony
    culturalSignificance: "Known as the 'Museum Without Walls', Gyeongju was the ancient capital of the Silla Kingdom for nearly 1,000 years, preserving archaeological relics and green royal grass mounds.",
    traditionalFood: "Ssambap - a grand table feast consisting of rice, meats, and dozens of side dishes wrapped in fresh leafy greens, along with Hwangnam red-bean pastries.",
    artCraft: "Silla earthenware pottery, traditional Hanji paper crafts, and gold crown replicas.",
    dances: "Cheoyongmu - a Silla-era mask dance traditionally performed to ward off evil spirits and invite peace and harmony.",
    monuments: "Bulguksa Temple, Seokguram Grotto (Buddhist shrine built into a cave), and Cheomseongdae (the oldest astronomical observatory in Asia).",
    activities: [
      "Walking among the giant grass-covered royal tombs in Daereungwon Park",
      "Viewing the magical night illumination of Donggung Palace and Wolji Pond",
      "Renting a traditional Hanbok and strolling through Gyochon Hanok Village"
    ],
    budgetLevel: "medium",
    climate: "four-seasons",
    tags: {
      history: true, culture: true, art: true, food: true, nature: true, shopping: false,
      quiet: true, adventure: false, relaxation: true, city: true,
      warm: false, cool: false, fourseasons: true,
      deep: false, moderate: true, light: false
    }
  },
  {
    id: "jordan",
    name: "Jordan",
    country: "Jordan",
    flag: "🇯🇴",
    imageColor: "linear-gradient(135deg, #B91C1C, #D97706)",
    imageUrl: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80", // Petra
    foodUrl: "https://images.unsplash.com/photo-1547058881-aa0edd92aab3?auto=format&fit=crop&w=300&q=80",      // Mansaf/hummus plate
    craftUrl: "https://images.unsplash.com/photo-1565192647048-f997ded879ab?auto=format&fit=crop&w=300&q=80",     // Woven Bedouin carpet
    monumentUrl: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=300&q=80",  // Petra Siq/Roman Jerash
    cultureUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=300&q=80",   // Traditional bedouin drum dance context
    culturalSignificance: "A historic land of hospitality at the crossroads of the Middle East, rich in Nabataean wonders, Roman outposts, and enduring Bedouin culture.",
    traditionalFood: "Mansaf - the national dish of lamb slow-cooked in a broth of fermented dried yogurt (jameed), served over rice and flatbread with pine nuts.",
    artCraft: "Intricate stone mosaics (made in the city of Madaba) and hand-spun Bedouin wool carpets.",
    dances: "Dabke - a lively, rhythmic circle and line dance performed at weddings and festivals.",
    monuments: "The Rose City of Petra (hand-carved tombs in canyon walls) and the Roman ruins of Jerash.",
    activities: [
      "Walking through the narrow Siq canyon to witness Petra's Treasury",
      "Floating effortlessly in the Dead Sea and applying therapeutic mud",
      "Stargazing from a desert camp in the red valleys of Wadi Rum"
    ],
    budgetLevel: "high",
    climate: "warm",
    tags: {
      history: true, culture: true, art: false, food: false, nature: true, shopping: false,
      quiet: true, adventure: true, relaxation: false, city: false,
      warm: true, cool: false, fourseasons: false,
      deep: true, moderate: false, light: false
    }
  },
  {
    id: "egypt",
    name: "Egypt",
    country: "Egypt",
    flag: "🇪🇬",
    imageColor: "linear-gradient(135deg, #D97706, #DC2626)",
    imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80", // Pyramids
    foodUrl: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=300&q=80",      // Egypt Koshary dish
    craftUrl: "https://images.unsplash.com/photo-1608930264026-616a9a3ff228?auto=format&fit=crop&w=300&q=80",     // Papyrus/stone craft
    monumentUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=300&q=80",  // Sphinx monument
    cultureUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=300&q=80",   // Tanoura sufi whirling dervish
    culturalSignificance: "Cradle of the Pharaohs along the fertile banks of the Nile, showcasing a rich tapestry of ancient monuments, Coptic culture, and bustling medieval markets.",
    traditionalFood: "Koshary - a mixture of lentils, macaroni, rice, and chickpeas topped with garlic vinegar and a spicy tomato sauce.",
    artCraft: "Papyrus paper painting, alabaster stone carving, and hand-hammered brass lanterns.",
    dances: "Tanoura - a spiritual folk dance performed by Sufi men spinning continuously in heavy, multi-colored circular skirts.",
    monuments: "The Great Pyramids of Giza, Karnak Temple in Luxor, and the Sphinx.",
    activities: [
      "Taking a wooden sailboat (Felucca) cruise along the Nile River",
      "Deciphering hieroglyphs in the Valley of the Kings tombs",
      "Bargaining for frankincense and lamps in Cairo's Khan el-Khalili bazaar"
    ],
    budgetLevel: "medium",
    climate: "warm",
    tags: {
      history: true, culture: true, art: false, food: true, nature: false, shopping: true,
      quiet: false, adventure: true, relaxation: false, city: true,
      warm: true, cool: false, fourseasons: false,
      deep: true, moderate: false, light: false
    }
  },
  {
    id: "peru",
    name: "Peru",
    country: "Peru",
    flag: "🇵🇪",
    imageColor: "linear-gradient(135deg, #DC2626, #F59E0B)",
    imageUrl: "https://images.unsplash.com/photo-1587590227264-0ac64bc63c52?auto=format&fit=crop&w=600&q=80", // Machu Picchu
    foodUrl: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=300&q=80",      // Ceviche fish
    craftUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=300&q=80",     // Andean colorful thread
    monumentUrl: "https://images.unsplash.com/photo-1587590227264-0ac64bc63c52?auto=format&fit=crop&w=300&q=80",  // Inca walls Cusco
    cultureUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=300&q=80",   // Peruvian traditional dance
    culturalSignificance: "The ancient heart of the Inca Empire, blending high-altitude Quechua communities, colonial architecture, and mysterious Andean astronomy.",
    traditionalFood: "Ceviche - raw fish cured in freshly squeezed key lime juice, seasoned with chili peppers, onions, and sweet potato.",
    artCraft: "Quechua backstrap loom weaving using natural botanical dyes and hand-spun alpaca wool.",
    dances: "Marinera - a elegant, romantic coastal courtship dance performed with white handkerchiefs.",
    monuments: "Machu Picchu (Inca Citadel in the Andes) and the ruins of Sacsayhuamán.",
    activities: [
      "Hiking the historic Inca Trail through mountain passes and cloud forests",
      "Learning textile weaving techniques from a cooperative in Chinchero",
      "Taking a scenic train ride along the rushing Urubamba River"
    ],
    budgetLevel: "medium",
    climate: "cool",
    tags: {
      history: true, culture: true, art: true, food: true, nature: true, shopping: false,
      quiet: true, adventure: true, relaxation: false, city: false,
      warm: false, cool: true, fourseasons: false,
      deep: true, moderate: false, light: false
    }
  },
  {
    id: "kazakhstan",
    name: "Kazakhstan",
    country: "Kazakhstan",
    flag: "🇰🇿",
    imageColor: "linear-gradient(135deg, #0EA5E9, #F59E0B)",
    imageUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80", // Charyn Canyon
    foodUrl: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=300&q=80",      // Noodle platter context
    craftUrl: "https://images.unsplash.com/photo-1596436889106-be35e843f974?auto=format&fit=crop&w=300&q=80",     // Nomadic felt arts
    monumentUrl: "https://images.unsplash.com/photo-1569531193159-2591645f7bdc?auto=format&fit=crop&w=300&q=80",  // Almaty cathedral detail
    cultureUrl: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=300&q=80",   // Nomadic equestrian culture
    culturalSignificance: "A vast land of nomadic heritage, horse culture, and Central Asian trade routes, transitioning into striking mountain valleys and futuristic cities.",
    traditionalFood: "Beshbarmak ('five fingers') - boiled mutton or horse meat served over wide flat noodles with onion broth, eaten with hands.",
    artCraft: "Syrmak - the craft of making felted wool carpets decorated with organic horn-like scrollwork.",
    dances: "Kara Zhorga - a traditional energetic folk dance simulating the movements of a wild horse and rider.",
    monuments: "Mausoleum of Khoja Ahmed Yasawi (exquisite blue tilework) and the monument of Zenkov Cathedral in Almaty.",
    activities: [
      "Hiking through the red wind-carved walls of Charyn Canyon",
      "Listening to the rumbling sand dunes of Altyn-Emel National Park",
      "Riding horses through alpine pastures in the Tien Shan Mountains"
    ],
    budgetLevel: "medium",
    climate: "four-seasons",
    tags: {
      history: true, culture: true, art: false, food: false, nature: true, shopping: false,
      quiet: true, adventure: true, relaxation: false, city: false,
      warm: false, cool: true, fourseasons: true,
      deep: true, moderate: false, light: false
    }
  },
  {
    id: "slovenia",
    name: "Slovenia",
    country: "Slovenia",
    flag: "🇸🇮",
    imageColor: "linear-gradient(135deg, #10B981, #3B82F6)",
    imageUrl: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=600&q=80", // Lake Bled
    foodUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",      // Rolled bread/pastry
    craftUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=300&q=80",     // Lace detail craft
    monumentUrl: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=300&q=80",  // Lake Bled Castle cliff
    cultureUrl: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?auto=format&fit=crop&w=300&q=80",   // Traditional Alpine costumes
    culturalSignificance: "A peaceful Alpine nation at the intersection of Slavic, Germanic, and Italian cultures, leading the world in eco-conservation and forest-living.",
    traditionalFood: "Potica - a festive sweet bread roll filled with walnuts, tarragon, or poppy seeds, baked in traditional clay pans.",
    artCraft: "Idrija Lace - intricate bobbin lace-making, and folk art beehive panels painted with humorous local scenes.",
    dances: "Traditional Polka and Alpine folklore dances accompanied by accordions.",
    monuments: "Lake Bled Castle (cliffside medieval castle) and the Dragon Bridge in Ljubljana.",
    activities: [
      "Rowing a wooden Pletna boat to the island church in Lake Bled",
      "Exploring Ljubljana's cobblestone streets and cafes by bicycle",
      "Taking an electric train into the subterranean chambers of Postojna Cave"
    ],
    budgetLevel: "medium",
    climate: "four-seasons",
    tags: {
      history: false, culture: true, art: true, food: false, nature: true, shopping: false,
      quiet: true, adventure: true, relaxation: true, city: false,
      warm: false, cool: false, fourseasons: true,
      deep: false, moderate: true, light: false
    }
  },
  {
    id: "costarica",
    name: "Costa Rica",
    country: "Costa Rica",
    flag: "🇨🇷",
    imageColor: "linear-gradient(135deg, #10B981, #F59E0B)",
    imageUrl: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=600&q=80", // Rainforest
    foodUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=300&q=80",      // Gallo pinto rice
    craftUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=300&q=80",     // Colorful painted art
    monumentUrl: "https://images.unsplash.com/photo-1535083783855-76ae62b2914e?auto=format&fit=crop&w=300&q=80",  // Volcano Arenal overview
    cultureUrl: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=300&q=80",   // Traditional vibrant dance
    culturalSignificance: "Embodying the 'Pura Vida' philosophy, Costa Rica is a global model for ecological preservation, community-led farming, and natural biodiversity.",
    traditionalFood: "Gallo Pinto - a breakfast of seasoned black beans and rice served with sweet plantains, sour cream, and homemade tortillas.",
    artCraft: "Hand-painted Sarchi Oxcarts - wooden carts intricately decorated with vibrant geometric flowers and mandala designs.",
    dances: "Punto Guanacasteco - an energetic stamp-and-spin courtship dance with sweeping colorful skirts.",
    monuments: "Guayabo National Monument (an ancient pre-Columbian stone aqueduct system).",
    activities: [
      "Ziplining through the high canopy of the Monteverde Cloud Forest",
      "Bathing in natural geothermal springs warmed by the Arenal Volcano",
      "Rafting down the pristine wild waters of the Pacuare River"
    ],
    budgetLevel: "medium",
    climate: "warm",
    tags: {
      history: false, culture: false, art: false, food: false, nature: true, shopping: false,
      quiet: true, adventure: true, relaxation: true, city: false,
      warm: true, cool: false, fourseasons: false,
      deep: false, moderate: true, light: false
    }
  },
  {
    id: "norway",
    name: "Norway",
    country: "Norway",
    flag: "🇳🇴",
    imageColor: "linear-gradient(135deg, #0EA5E9, #8B5CF6)",
    imageUrl: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=600&q=80", // Fjords
    foodUrl: "https://images.unsplash.com/photo-1485921325814-a50431496cc8?auto=format&fit=crop&w=300&q=80",      // Smoked salmon context
    craftUrl: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=300&q=80",     // Wood rosemaling pattern
    monumentUrl: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=300&q=80",  // Wooden stave church
    cultureUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=300&q=80",   // Traditional Norwegian costume
    culturalSignificance: "A dramatic Nordic realm shaped by deep fjords, Viking seafaring lore, and 'Friluftsliv'—the ancestral philosophy of outdoor spiritual renewal.",
    traditionalFood: "Smoked Salmon, Fårikål (mutton and cabbage stew), and Brunost (sweet caramelized brown goat cheese).",
    artCraft: "Rosemaling - traditional scroll and floral folk painting on wood, and ancestral woodworking.",
    dances: "Hallingdance - a highly athletic acrobatic dance where performers attempt to kick a hat off a wooden pole.",
    monuments: "Urnes Stave Church (12th-century wooden church featuring Viking carving motifs) and the Fram Museum.",
    activities: [
      "Hiking to the sheer granite cliff edge of Pulpit Rock (Preikestolen)",
      "Sailing through the narrow waterfalls of the UNESCO-listed Geirangerfjord",
      "Chasing the dancing colors of the Northern Lights (Aurora Borealis) in Tromsø"
    ],
    budgetLevel: "high",
    climate: "cool",
    tags: {
      history: false, culture: false, art: true, food: false, nature: true, shopping: false,
      quiet: true, adventure: true, relaxation: true, city: false,
      warm: false, cool: true, fourseasons: false,
      deep: false, moderate: false, light: true
    }
  },
  {
    id: "lombok",
    name: "Lombok",
    country: "Indonesia",
    flag: "🇮🇩",
    imageColor: "linear-gradient(135deg, #06B6D4, #10B981)",
    imageUrl: "https://images.unsplash.com/photo-1537953773048-24680fa90f94?auto=format&fit=crop&w=600&q=80", // Gili beach/cliffs
    foodUrl: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=300&q=80",      // Spicy Indonesian food
    craftUrl: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=300&q=80",     // Woven songket detail
    monumentUrl: "https://images.unsplash.com/photo-1537953773048-24680fa90f94?auto=format&fit=crop&w=300&q=80",  // Mount Rinjani crater lake
    cultureUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=300&q=80",   // Traditional Indonesian dancer
    culturalSignificance: "A serene tropical escape rich in Sasak tribal customs, characterized by clay crafting, weaving techniques, and deep reverence for the sacred Mt. Rinjani.",
    traditionalFood: "Ayam Taliwang - intensely spicy grilled chicken glazed with local red chilis, shrimp paste, and wild lime.",
    artCraft: "Songket Weaving - hand-looming fabrics woven with gold and silver metallic threads, and clay pottery.",
    dances: "Gandrung - a social dance of courtship accompanied by a live, rhythmic gamelan orchestra.",
    monuments: "Lingsar Temple (a unique temple complex where Balinese Hindus and Sasak Muslims worship in the same sacred grounds).",
    activities: [
      "Snorkeling with sea turtles in the shallow waters of the Gili Islands",
      "Trekking to the volcanic crater lake of Mount Rinjani",
      "Strolling through the thatched-roof bamboo houses of Sade Sasak Village"
    ],
    budgetLevel: "low",
    climate: "warm",
    tags: {
      history: false, culture: true, art: false, food: true, nature: true, shopping: false,
      quiet: true, adventure: true, relaxation: true, city: false,
      warm: true, cool: false, fourseasons: false,
      deep: true, moderate: false, light: false
    }
  }
];

// 2. Interactive Quiz Questions (9 Questions)
const QUIZ_QUESTIONS = [
  {
    id: "interests",
    question: "Select the cultural focus that excites you the most:",
    type: "single",
    options: [
      { text: "🏛️ Ancient Mysteries & Ruins (Temples, tombs, stone carvings)", value: "history" },
      { text: "🎭 Local Customs & Festivals (Living heritage, ritual ceremonies)", value: "culture" },
      { text: "🎨 Traditional Fine Arts & Crafts (Weaving, gold leaf, lacquer)", value: "art" },
      { text: "🌲 Nature & Dramatic Landscapes (Fjords, volcanoes, wilderness)", value: "nature" },
      { text: "🍜 Street Food & Culinary Heritage (Spices, markets, traditional dishes)", value: "food" },
      { text: "🛍️ Local Markets & Artisan Alleys (Handcraft boutiques, bazaars)", value: "shopping" }
    ]
  },
  {
    id: "style",
    question: "What is your preferred travel style and pace?",
    type: "single",
    options: [
      { text: "🕯️ Slow & Quiet (Peaceful retreats, off-the-beaten-path roads)", value: "quiet" },
      { text: "🧗 Wild Adventure (Active outdoor trekking, mountain trails)", value: "adventure" },
      { text: "🌊 Sun & Relaxation (Beaches, tropical waters, leisure days)", value: "relaxation" },
      { text: "⚡ Vibrant City Pulse (Night markets, historic lanes, urban energy)", value: "city" }
    ]
  },
  {
    id: "climate",
    question: "Select your ideal weather and climate environment:",
    type: "single",
    options: [
      { text: "☀️ Warm, Sun-Drenched, or Tropical (Sunny beaches, desert dunes)", value: "warm" },
      { text: "🏔️ Cool, Crisp, and Mountainous (High altitudes, fresh alpine air)", value: "cool" },
      { text: "🍁 Distinct Four Seasons (Vibrant autumn leaves, snowy winters)", value: "four-seasons" }
    ]
  },
  {
    id: "budget",
    question: "What is your target travel budget?",
    type: "single",
    options: [
      { text: "🎒 Backpacker Economy (Affordable street food, local homestays)", value: "low" },
      { text: "🧳 Comfort Voyager (Mid-range boutique stays, guided day tours)", value: "medium" },
      { text: "🥂 High-End Comfort (Premium hotels, private luxury excursions)", value: "high" }
    ]
  },
  {
    id: "immersion",
    question: "How deeply do you want to immerse in local cultural customs?",
    type: "single",
    options: [
      { text: "🛖 Deep Immersion (Homestays, learning village crafts, family kitchens)", value: "deep" },
      { text: "🏛️ Moderate Exploration (Visiting monuments, museums, dining locally)", value: "moderate" },
      { text: "🗺️ Light & Scenic (Beautiful views, relaxing stays, light sightseeing)", value: "light" }
    ]
  },
  {
    id: "transport",
    question: "How do you dream of navigating your destination daily?",
    type: "single",
    options: [
      { text: "🚶 Walking & Cycling through narrow historic streets", value: "walking" },
      { text: "🥾 Hiking rugged mountain paths and ascending peaks", value: "hiking" },
      { text: "🐪 Private vehicles, river boats, or camels", value: "tours" }
    ]
  },
  {
    id: "lodging",
    question: "What type of accommodation captures your imagination?",
    type: "single",
    options: [
      { text: "🏯 Traditional Heritage (Hanok, Ryokan, Javanese Joglo cabin)", value: "heritage" },
      { text: "⛺ Eco-Lodge or Starry Glamping (Desert dome, forest treehouse)", value: "glamping" },
      { text: "🏨 Boutique City Guesthouses & Hotels", value: "boutique" }
    ]
  },
  {
    id: "nature_vs_history",
    question: "What is your ideal balance of nature and history?",
    type: "single",
    options: [
      { text: "🏺 I'm a History Buff (temples, ruins, and historical museums)", value: "history_focus" },
      { text: "🏞️ I'm a Nature Lover (forests, waterfalls, oceans, and wildlife)", value: "nature_focus" },
      { text: "⚖️ I want a balanced mix of both history and scenery", value: "balanced" }
    ]
  },
  {
    id: "art_style",
    question: "What type of art or craft captures your attention?",
    type: "single",
    options: [
      { text: "🧵 Handcrafted Textiles & Ceramics (Batik dye, gold leaf chopsticks)", value: "textiles" },
      { text: "🪨 Ancient Rock Reliefs & Monuments (hieroglyphs, ancient carvings)", value: "carvings" },
      { text: "🖼️ Modern Galleries & Artisan Murals (creative districts, design shops)", value: "modern_art" }
    ]
  }
];

// Mapping quiz answers to points for each destination
const SCORING_MATRIX = {
  0: { // Interests
    history: { egypt: 3, jordan: 3, peru: 3, yogyakarta: 2, gyeongju: 2, kanazawa: 1, tainan: 1 },
    culture: { yogyakarta: 3, peru: 3, gyeongju: 3, lombok: 3, tainan: 2, kanazawa: 2, jordan: 1 },
    art: { kanazawa: 3, yogyakarta: 3, gyeongju: 2, slovenia: 2, tainan: 2, norway: 1, egypt: 1 },
    nature: { norway: 3, costarica: 3, slovenia: 3, kazakhstan: 3, lombok: 2, peru: 2 },
    food: { tainan: 3, yogyakarta: 3, kanazawa: 2, peru: 2, lombok: 2, egypt: 1 },
    shopping: { kanazawa: 3, tainan: 3, egypt: 2, yogyakarta: 2 }
  },
  1: { // Style
    quiet: { kanazawa: 4, gyeongju: 4, slovenia: 4, yogyakarta: 3, lombok: 3, norway: 2 },
    adventure: { costarica: 4, peru: 4, kazakhstan: 4, norway: 4, jordan: 3, egypt: 2 },
    relaxation: { lombok: 4, costarica: 4, slovenia: 3, yogyakarta: 2, tainan: 2 },
    city: { tainan: 4, egypt: 4, kanazawa: 3, gyeongju: 3, yogyakarta: 1 }
  },
  2: { // Climate
    warm: { egypt: 4, jordan: 4, yogyakarta: 4, lombok: 4, costarica: 4, tainan: 3 },
    cool: { norway: 4, peru: 4, kazakhstan: 3, slovenia: 2 },
    "four-seasons": { kanazawa: 4, gyeongju: 4, slovenia: 4, kazakhstan: 3 }
  },
  3: { // Budget
    low: { yogyakarta: 4, tainan: 4, lombok: 4, egypt: 3, kazakhstan: 2 },
    medium: { gyeongju: 4, egypt: 4, peru: 4, kazakhstan: 4, slovenia: 4, costarica: 4, yogyakarta: 2, tainan: 2, lombok: 2, kanazawa: 1 },
    high: { norway: 4, kanazawa: 4, jordan: 4, costarica: 2, slovenia: 2, egypt: 1 }
  },
  4: { // Immersion
    deep: { yogyakarta: 4, peru: 4, egypt: 4, lombok: 4, jordan: 3, kazakhstan: 3 },
    moderate: { kanazawa: 4, gyeongju: 4, tainan: 4, slovenia: 4, costarica: 3, yogyakarta: 1 },
    light: { norway: 4, lombok: 3, costarica: 3, slovenia: 3 }
  },
  5: { // Transport
    walking: { tainan: 4, kanazawa: 4, gyeongju: 4, slovenia: 3, yogyakarta: 2 },
    hiking: { peru: 4, kazakhstan: 4, norway: 4, costarica: 3, jordan: 3 },
    tours: { egypt: 4, jordan: 4, lombok: 3, costarica: 3, yogyakarta: 2 }
  },
  6: { // Lodging
    heritage: { kanazawa: 4, gyeongju: 4, yogyakarta: 4, tainan: 3 },
    glamping: { jordan: 4, costarica: 4, norway: 4, lombok: 3, kazakhstan: 3 },
    boutique: { slovenia: 4, egypt: 4, peru: 4, kanazawa: 3 }
  },
  7: { // Nature vs History
    history_focus: { egypt: 4, jordan: 4, peru: 3, yogyakarta: 3, gyeongju: 3, tainan: 2 },
    nature_focus: { norway: 4, costarica: 4, slovenia: 4, lombok: 4, kazakhstan: 3 },
    balanced: { peru: 4, yogyakarta: 4, gyeongju: 4, jordan: 3, slovenia: 3, kazakhstan: 2 }
  },
  8: { // Art Style
    textiles: { yogyakarta: 4, kanazawa: 4, tainan: 3, peru: 3 },
    carvings: { egypt: 4, jordan: 4, peru: 4, gyeongju: 3, yogyakarta: 3 },
    modern_art: { slovenia: 4, norway: 4, kanazawa: 3, tainan: 3 }
  }
};

// 3. Application State
let currentStep = 0;
let userAnswers = [];

// 4. Initialization and DOM Load Hook
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  const tabButtons = document.querySelectorAll(".nav-tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");
      switchTab(targetTab);
    });
  });

  // Render Initial View State
  switchTab("explore");
  renderHeroCollage();
  renderDiscoverFeed();
  renderSavedList();

  // Bind Event Listeners
  document.getElementById("btn-start-quiz").addEventListener("click", () => {
    switchTab("quiz");
    resetQuiz();
  });
  document.getElementById("btn-prev-question").addEventListener("click", prevQuestion);
  document.getElementById("btn-next-question").addEventListener("click", nextQuestion);
  document.getElementById("btn-restart-quiz").addEventListener("click", resetQuiz);
  
  const searchInput = document.getElementById("discover-search");
  searchInput.addEventListener("input", filterDiscoverFeed);
  
  const filterChips = document.querySelectorAll(".filter-chip");
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      filterDiscoverFeed();
    });
  });

  // Close modals when clicking close icons
  document.querySelectorAll(".modal-close-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const modal = e.target.closest(".modal-overlay");
      if (modal) modal.classList.remove("open");
    });
  });
}

// 5. Navigation & Tab Switching
function switchTab(tabId) {
  document.querySelectorAll(".nav-tab-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tabId) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.querySelectorAll(".content-section").forEach(sec => {
    if (sec.id === `section-${tabId}`) {
      sec.classList.add("active");
    } else {
      sec.classList.remove("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// 6. Dynamic Hero Collage Generator (Mini Polaroids)
function renderHeroCollage() {
  const container = document.getElementById("hero-collage-container");
  if (!container) return;
  container.innerHTML = "";

  DESTINATIONS.forEach((dest, index) => {
    const rotation = (index % 3 === 0) ? (index - 6) : (index % 2 === 0) ? (6 - index) : (index - 4);
    const scale = 0.9 + (index % 3) * 0.05;

    const polaroid = document.createElement("div");
    polaroid.className = "hero-mini-polaroid";
    polaroid.style.transform = `rotate(${rotation}deg) scale(${scale})`;
    polaroid.setAttribute("onclick", `openDetailModal('${dest.id}')`);
    
    polaroid.innerHTML = `
      <div class="polaroid-photo" style="background-image: url('${dest.imageUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')">
        <div class="polaroid-stamp">${dest.flag}</div>
      </div>
      <div class="polaroid-label">${dest.name}</div>
    `;
    container.appendChild(polaroid);
  });
}

// 3D Card Hover Tilt Interactive Effect
function applyTiltEffect() {
  const cards = document.querySelectorAll(".discover-card, .result-item-card, .planner-saved-card");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      // Slight tilt rotation offsets (maximum 8 degrees)
      const rotateX = ((centerY - y) / centerY) * 8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateY(-4px)`;
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// 7. Discover Feed (Pinterest Board) Rendering
function renderDiscoverFeed() {
  const container = document.getElementById("discover-grid");
  container.innerHTML = "";

  DESTINATIONS.forEach(dest => {
    const isSaved = checkIsSaved(dest.id);
    const card = document.createElement("div");
    card.className = "discover-card";
    card.setAttribute("data-id", dest.id);
    
    card.innerHTML = `
      <div class="card-image-wrapper" style="background-image: url('${dest.imageUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')">
        <div class="card-washi-tape"></div>
        <div class="card-stamp">${dest.flag}</div>
        <div class="card-sticker-tag">${dest.country}</div>
        
        <!-- Overlapping mini polaroid photo representing local food/culture -->
        <div class="card-overlay-polaroid">
          <div class="overlay-polaroid-img" style="background-image: url('${dest.foodUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')"></div>
          <div class="overlay-polaroid-caption">local taste</div>
        </div>
      </div>
      <div class="card-body">
        <h3 class="card-title">${dest.name}</h3>
        <p class="card-desc">${dest.culturalSignificance.substring(0, 85)}...</p>
        <div class="card-footer">
          <button class="btn-view-detail" onclick="openDetailModal('${dest.id}')">Explore Journal</button>
          <button class="card-save-icon ${isSaved ? 'saved' : ''}" onclick="toggleSaveDestination(event, '${dest.id}')">
            ${isSaved ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });

  applyTiltEffect(); // Apply premium 3D tilt effects
}

// Filter Discover Grid based on search query and active category chip
function filterDiscoverFeed() {
  const query = document.getElementById("discover-search").value.toLowerCase();
  const activeFilter = document.querySelector(".filter-chip.active").getAttribute("data-filter");
  
  const cards = document.querySelectorAll("#discover-grid .discover-card");
  
  cards.forEach(card => {
    const destId = card.getAttribute("data-id");
    const dest = DESTINATIONS.find(d => d.id === destId);
    if (!dest) return;

    const matchesSearch = dest.name.toLowerCase().includes(query) || 
                          dest.country.toLowerCase().includes(query) || 
                          dest.culturalSignificance.toLowerCase().includes(query);
    
    let matchesFilter = true;
    if (activeFilter !== "all") {
      matchesFilter = dest.tags[activeFilter] === true;
    }

    if (matchesSearch && matchesFilter) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

// 8. Interactive Quiz Engine
function resetQuiz() {
  currentStep = 0;
  userAnswers = new Array(QUIZ_QUESTIONS.length).fill(null);
  
  document.getElementById("quiz-results-card").style.display = "none";
  document.getElementById("quiz-active-deck").style.display = "block";
  
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qData = QUIZ_QUESTIONS[currentStep];
  
  document.getElementById("quiz-question-title").textContent = qData.question;
  document.getElementById("quiz-step-indicator").textContent = `Question ${currentStep + 1} of ${QUIZ_QUESTIONS.length}`;
  
  const progressPercent = ((currentStep) / QUIZ_QUESTIONS.length) * 100;
  document.getElementById("quiz-progress").style.width = `${progressPercent}%`;

  const answersGrid = document.getElementById("quiz-answers-grid");
  answersGrid.innerHTML = "";

  qData.options.forEach(opt => {
    const isSelected = userAnswers[currentStep] === opt.value;
    const btn = document.createElement("button");
    btn.className = `quiz-option-card ${isSelected ? 'selected' : ''}`;
    btn.innerHTML = `
      <div class="option-check-circle"></div>
      <span class="option-text">${opt.text}</span>
    `;
    btn.addEventListener("click", () => {
      selectAnswer(opt.value);
    });
    answersGrid.appendChild(btn);
  });

  const prevBtn = document.getElementById("btn-prev-question");
  const nextBtn = document.getElementById("btn-next-question");
  
  if (currentStep === 0) {
    prevBtn.style.visibility = "hidden";
  } else {
    prevBtn.style.visibility = "visible";
  }

  if (userAnswers[currentStep] === null) {
    nextBtn.disabled = true;
    nextBtn.textContent = "Select an option";
  } else {
    nextBtn.disabled = false;
    nextBtn.textContent = currentStep === QUIZ_QUESTIONS.length - 1 ? "Get My Recommendations ✈️" : "Next Question →";
  }
}

function selectAnswer(val) {
  userAnswers[currentStep] = val;
  renderQuizQuestion();

  if (currentStep < QUIZ_QUESTIONS.length - 1) {
    setTimeout(() => {
      currentStep++;
      renderQuizQuestion();
    }, 300);
  }
}

function prevQuestion() {
  if (currentStep > 0) {
    currentStep--;
    renderQuizQuestion();
  }
}

function nextQuestion() {
  if (currentStep < QUIZ_QUESTIONS.length - 1) {
    currentStep++;
    renderQuizQuestion();
  } else {
    calculateResults();
  }
}

// 9. Matching Logic and Explanation Generator
function calculateResults() {
  const scores = {};
  DESTINATIONS.forEach(dest => {
    scores[dest.id] = 0;
  });

  userAnswers.forEach((ansValue, questionIdx) => {
    const questionMatrix = SCORING_MATRIX[questionIdx];
    if (questionMatrix && questionMatrix[ansValue]) {
      const destinationWeights = questionMatrix[ansValue];
      for (const destId in destinationWeights) {
        if (scores.hasOwnProperty(destId)) {
          scores[destId] += destinationWeights[destId];
        }
      }
    }
  });

  const resultsData = DESTINATIONS.map(dest => {
    let score = scores[dest.id];
    return {
      dest: dest,
      score: score
    };
  });

  resultsData.sort((a, b) => b.score - a.score);

  const maxScore = resultsData[0].score || 1;
  resultsData.forEach(item => {
    item.matchPercentage = Math.round((item.score / maxScore) * 35 + 63);
    if (item.matchPercentage > 99) item.matchPercentage = 99;
  });

  document.getElementById("quiz-active-deck").style.display = "none";
  document.getElementById("quiz-results-card").style.display = "block";
  document.getElementById("quiz-progress").style.width = "100%";

  renderResultsUI(resultsData.slice(0, 3));
}

function renderResultsUI(topMatches) {
  const container = document.getElementById("quiz-results-list");
  container.innerHTML = "";

  topMatches.forEach((match, index) => {
    const dest = match.dest;
    const whyNote = generateWhyNote(dest, userAnswers);
    const isSaved = checkIsSaved(dest.id);

    const matchEl = document.createElement("div");
    matchEl.className = "result-item-card";
    
    // Header uses photograph URL styled as an illustrated Boarding Pass with a tear-off stub
    matchEl.innerHTML = `
      <div class="result-card-header" style="background-image: linear-gradient(rgba(30,27,24,0.5), rgba(30,27,24,0.5)), url('${dest.imageUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')">
        <div class="boarding-pass-main">
          <div class="result-badge">boarding pass</div>
          <div class="result-match-pct">${match.matchPercentage}% match</div>
          <h3 class="result-title">${dest.flag} ${dest.name}, ${dest.country}</h3>
          
          <div class="boarding-pass-flight-info">
            <div class="info-item">
              <span class="info-label">FLIGHT</span>
              <strong class="info-val">CE-${match.matchPercentage}</strong>
            </div>
            <div class="info-item">
              <span class="info-label">SEAT</span>
              <strong class="info-val">JOURNAL-${index + 1}A</strong>
            </div>
            <div class="info-item">
              <span class="info-label">CLASS</span>
              <strong class="info-val">DISCOVERY</strong>
            </div>
            <div class="info-item">
              <span class="info-label">GATE</span>
              <strong class="info-val">2026</strong>
            </div>
          </div>
        </div>
        <div class="boarding-pass-stub">
          <div class="stub-header">STUB</div>
          <div class="stub-pct">${match.matchPercentage}%</div>
          <div class="stub-dest">${dest.name}</div>
          <div class="stub-seat">SEAT ${index + 1}A</div>
          <div class="stub-barcode">||||| | |||| | |||</div>
        </div>
      </div>
      <div class="result-card-body">
        <p class="result-intro">${dest.culturalSignificance}</p>
        
        <div class="why-this-place-container">
          <div class="why-title">📝 why this place?</div>
          <p class="why-content">${whyNote}</p>
        </div>

        <div class="result-details-grid">
          <div class="detail-illustration-card">
            <strong>🍲 Traditional Food:</strong>
            <p>${dest.traditionalFood}</p>
            <div class="polaroid-frame polaroid-mini">
              <div class="polaroid-img" style="background-image: url('${dest.foodUrl}')"></div>
              <div class="polaroid-caption">local food</div>
            </div>
          </div>
          <div class="detail-illustration-card">
            <strong>🏺 Arts & Crafts:</strong>
            <p>${dest.artCraft}</p>
            <div class="polaroid-frame polaroid-mini">
              <div class="polaroid-img" style="background-image: url('${dest.craftUrl}')"></div>
              <div class="polaroid-caption">artisan craft</div>
            </div>
          </div>
          <div class="detail-illustration-card">
            <strong>💃 Traditional Dance:</strong>
            <p>${dest.dances}</p>
          </div>
          <div class="detail-illustration-card">
            <strong>🏛️ Monuments:</strong>
            <p>${dest.monuments}</p>
            <div class="polaroid-frame polaroid-mini">
              <div class="polaroid-img" style="background-image: url('${dest.monumentUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')"></div>
              <div class="polaroid-caption">historic site</div>
            </div>
          </div>
        </div>

        <div class="result-actions">
          <button class="btn-view-detail" onclick="openDetailModal('${dest.id}')">Explore Journal</button>
          <button class="save-btn-secondary ${isSaved ? 'saved' : ''}" onclick="toggleSaveDestination(event, '${dest.id}'); refreshResultsUI('${dest.id}', this)">
            ${isSaved ? 'Saved in Journal ❤️' : 'Save to My Journal 🤍'}
          </button>
        </div>

        <!-- Perforated ticket stamp representation -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 3px dashed var(--color-ink); padding-top: 20px; margin-top: 25px; opacity: 0.85;">
          <div style="font-size: 0.8rem; font-weight: 800; color: #4B5563; text-transform: uppercase; letter-spacing: 0.5px;">explorer passport code: 2026-gen-${Math.floor(1000 + Math.random() * 9000)}</div>
          <div style="font-family: 'Syne', sans-serif; letter-spacing: 3px; font-weight: 800; font-size: 1.15rem; color: var(--color-ink); opacity: 0.45;">||||| || |||| || ||| |||</div>
        </div>
      </div>
    `;
    container.appendChild(matchEl);
  });

  applyTiltEffect(); // Apply tilt effect to results
}

function refreshResultsUI(destId, btnElement) {
  const isSaved = checkIsSaved(destId);
  if (isSaved) {
    btnElement.classList.add("saved");
    btnElement.innerHTML = "Saved in Journal ❤️";
  } else {
    btnElement.classList.remove("saved");
    btnElement.innerHTML = "Save to My Journal 🤍";
  }
}

function generateWhyNote(dest, answers) {
  const interestVal = answers[0];
  const styleVal = answers[1];
  const climateVal = answers[2];
  const budgetVal = answers[3];
  const immersionVal = answers[4];

  let points = [];

  if (dest.tags[interestVal]) {
    const interestOpt = QUIZ_QUESTIONS[0].options.find(o => o.value === interestVal);
    const label = interestOpt ? interestOpt.text.replace(/^[^\s]+\s/, "") : "interests";
    points.push(`your interest in <strong>${label}</strong>`);
  }

  if (dest.tags[styleVal]) {
    const styleOpt = QUIZ_QUESTIONS[1].options.find(o => o.value === styleVal);
    const label = styleOpt ? styleOpt.text.replace(/^[^\s]+\s/, "") : "travel style";
    points.push(`a <strong>${label}</strong> travel experience`);
  }

  if (dest.climate === climateVal) {
    const climateOpt = QUIZ_QUESTIONS[2].options.find(o => o.value === climateVal);
    const label = climateOpt ? climateOpt.text.replace(/^[^\s]+\s/, "") : "climate";
    points.push(`a <strong>${label}</strong> environment`);
  }

  if (dest.budgetLevel === budgetVal) {
    points.push(`your <strong>${budgetVal === 'low' ? 'budget-friendly' : budgetVal === 'medium' ? 'mid-range' : 'premium'}</strong> budget choice`);
  }

  if (points.length === 0) {
    return `${dest.name} offers incredible cultural richness that matches your quest for unique world secrets.`;
  }

  if (points.length === 1) {
    return `This hidden gem perfectly aligns with ${points[0]}.`;
  } else if (points.length === 2) {
    return `We matched this because it matches ${points[0]} and aligns with ${points[1]}.`;
  } else {
    const last = points.pop();
    return `This fits your journey beautifully because it caters to ${points.join(", ")}, and fits ${last}.`;
  }
}

// 10. LocalStorage Travel Journal and Planner
function getSavedDestinations() {
  const data = localStorage.getItem("culture_explorer_saved");
  return data ? JSON.parse(data) : [];
}

function saveDestinationList(list) {
  localStorage.setItem("culture_explorer_saved", JSON.stringify(list));
}

function checkIsSaved(destId) {
  const saved = getSavedDestinations();
  return saved.some(item => item.id === destId);
}

function toggleSaveDestination(event, destId) {
  if (event) event.stopPropagation();
  
  let saved = getSavedDestinations();
  const index = saved.findIndex(item => item.id === destId);
  let isSaved = false;

  if (index > -1) {
    saved.splice(index, 1);
    isSaved = false;
  } else {
    saved.push({ id: destId, notes: "", startDate: "", endDate: "" });
    isSaved = true;
  }

  saveDestinationList(saved);
  
  renderDiscoverFeed();
  renderSavedList();

  showToast(isSaved ? "Saved to your journal! 📓" : "Removed from your journal.");
}

function saveNotesAndDates(destId, notes, startDate, endDate) {
  let saved = getSavedDestinations();
  const item = saved.find(i => i.id === destId);
  if (item) {
    item.notes = notes;
    item.startDate = startDate;
    item.endDate = endDate;
    saveDestinationList(saved);
    showToast("Travel logs saved! 💾");
  }
}

// 11. Planner Rendering & Side-by-Side Comparison
function renderSavedList() {
  const container = document.getElementById("planner-saved-list");
  const saved = getSavedDestinations();

  if (saved.length === 0) {
    container.innerHTML = `
      <div class="empty-planner-state">
        <p>Your travel journal is empty. Take the quiz or browse destinations to save your favorite gems! 🤍</p>
        <button class="nav-tab-btn active" style="margin-top: 15px;" onclick="switchTab('explore')">Browse Discoveries</button>
      </div>
    `;
    document.getElementById("comparison-trigger-box").style.display = "none";
    return;
  }

  if (saved.length >= 2) {
    document.getElementById("comparison-trigger-box").style.display = "block";
    populateCompareSelects(saved);
  } else {
    document.getElementById("comparison-trigger-box").style.display = "none";
  }

  container.innerHTML = "";
  saved.forEach(savedItem => {
    const dest = DESTINATIONS.find(d => d.id === savedItem.id);
    if (!dest) return;

    const plannerCard = document.createElement("div");
    plannerCard.className = "planner-saved-card";
    
    // Header uses photograph URL styled with a soft vignette overlay
    plannerCard.innerHTML = `
      <div class="planner-card-header" style="background-image: linear-gradient(rgba(30,27,24,0.4), rgba(30,27,24,0.4)), url('${dest.imageUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')">
        <h3>${dest.flag} ${dest.name}, ${dest.country}</h3>
        <button class="planner-delete-btn" onclick="toggleSaveDestination(null, '${dest.id}')">🗑️ Remove</button>
      </div>
      <div class="planner-card-body">
        <div class="planner-dates-row">
          <div class="date-field">
            <label>Departing:</label>
            <input type="date" class="planner-date-input" id="start-${dest.id}" value="${savedItem.startDate || ''}" onchange="updatePlannerItem('${dest.id}')">
          </div>
          <div class="date-field">
            <label>Returning:</label>
            <input type="date" class="planner-date-input" id="end-${dest.id}" value="${savedItem.endDate || ''}" onchange="updatePlannerItem('${dest.id}')">
          </div>
        </div>
        
        <div class="planner-notes-row">
          <label>My Itinerary Notes & Discoveries:</label>
          <textarea class="planner-textarea" id="notes-${dest.id}" placeholder="Write foods to taste, monuments to photograph, and custom packing details..." onchange="updatePlannerItem('${dest.id}')">${savedItem.notes || ''}</textarea>
        </div>
        
        <div class="planner-footer">
          <button class="btn-view-detail" onclick="openDetailModal('${dest.id}')">View Full Cultural Info</button>
          <span class="save-status-indicator" id="status-${dest.id}">Auto-saved to browser</span>
        </div>
      </div>
    `;
    container.appendChild(plannerCard);
  });

  applyTiltEffect(); // Apply tilt effect to planner entries
}

function updatePlannerItem(destId) {
  const notes = document.getElementById(`notes-${destId}`).value;
  const startDate = document.getElementById(`start-${destId}`).value;
  const endDate = document.getElementById(`end-${destId}`).value;
  
  saveNotesAndDates(destId, notes, startDate, endDate);
  
  const indicator = document.getElementById(`status-${destId}`);
  indicator.textContent = "Saved! 💾";
  indicator.style.color = "#10B981";
  setTimeout(() => {
    indicator.textContent = "Auto-saved to browser";
    indicator.style.color = "";
  }, 2000);
}

function populateCompareSelects(savedItems) {
  const selectA = document.getElementById("compare-select-a");
  const selectB = document.getElementById("compare-select-b");
  
  selectA.innerHTML = "";
  selectB.innerHTML = "";

  savedItems.forEach((item, index) => {
    const dest = DESTINATIONS.find(d => d.id === item.id);
    if (!dest) return;

    const optA = document.createElement("option");
    optA.value = dest.id;
    optA.textContent = `${dest.flag} ${dest.name}`;
    if (index === 0) optA.selected = true;

    const optB = document.createElement("option");
    optB.value = dest.id;
    optB.textContent = `${dest.flag} ${dest.name}`;
    if (index === 1 || (index === 0 && savedItems.length === 1)) optB.selected = true;

    selectA.appendChild(optA);
    selectB.appendChild(optB);
  });
}

function triggerComparison() {
  const destIdA = document.getElementById("compare-select-a").value;
  const destIdB = document.getElementById("compare-select-b").value;

  if (destIdA === destIdB) {
    showToast("Please pick two different destinations to compare!");
    return;
  }

  const destA = DESTINATIONS.find(d => d.id === destIdA);
  const destB = DESTINATIONS.find(d => d.id === destIdB);

  if (!destA || !destB) return;

  const compareBody = document.getElementById("compare-modal-body");
  
  compareBody.innerHTML = `
    <table class="compare-table">
      <thead>
        <tr>
          <th>Cultural Feature</th>
          <th style="background-image: linear-gradient(rgba(30,27,24,0.45), rgba(30,27,24,0.45)), url('${destA.imageUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}'); background-size: cover; background-position: center; color: white; border-radius: 8px 8px 0 0; min-height: 120px; padding: 25px 15px;">
            <div style="font-size: 2rem;">${destA.flag}</div>
            <strong>${destA.name}</strong><br>${destA.country}
          </th>
          <th style="background-image: linear-gradient(rgba(30,27,24,0.45), rgba(30,27,24,0.45)), url('${destB.imageUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}'); background-size: cover; background-position: center; color: white; border-radius: 8px 8px 0 0; min-height: 120px; padding: 25px 15px;">
            <div style="font-size: 2rem;">${destB.flag}</div>
            <strong>${destB.name}</strong><br>${destB.country}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>💰 Est. Budget</strong></td>
          <td><span class="badge badge-budget">${destA.budgetLevel.toUpperCase()}</span></td>
          <td><span class="badge badge-budget">${destB.budgetLevel.toUpperCase()}</span></td>
        </tr>
        <tr>
          <td><strong>🌤️ Climate Style</strong></td>
          <td><span class="badge badge-climate">${destA.climate.toUpperCase()}</span></td>
          <td><span class="badge badge-climate">${destB.climate.toUpperCase()}</span></td>
        </tr>
        <tr>
          <td><strong>🏛️ Cultural Significance</strong></td>
          <td class="table-text-cell">${destA.culturalSignificance}</td>
          <td class="table-text-cell">${destB.culturalSignificance}</td>
        </tr>
        <tr>
          <td><strong>🍲 Traditional Food</strong></td>
          <td class="table-text-cell">
            ${destA.traditionalFood}
            <div class="compare-photo-preview" style="background-image: url('${destA.foodUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')"></div>
          </td>
          <td class="table-text-cell">
            ${destB.traditionalFood}
            <div class="compare-photo-preview" style="background-image: url('${destB.foodUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')"></div>
          </td>
        </tr>
        <tr>
          <td><strong>🎨 Arts & Crafts</strong></td>
          <td class="table-text-cell">
            ${destA.artCraft}
            <div class="compare-photo-preview" style="background-image: url('${destA.craftUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')"></div>
          </td>
          <td class="table-text-cell">
            ${destB.artCraft}
            <div class="compare-photo-preview" style="background-image: url('${destB.craftUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')"></div>
          </td>
        </tr>
        <tr>
          <td><strong>💃 Traditional Dance</strong></td>
          <td class="table-text-cell">${destA.dances}</td>
          <td class="table-text-cell">${destB.dances}</td>
        </tr>
        <tr>
          <td><strong>🗼 Historical Monuments</strong></td>
          <td class="table-text-cell">
            ${destA.monuments}
            <div class="compare-photo-preview" style="background-image: url('${destA.monumentUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')"></div>
          </td>
          <td class="table-text-cell">
            ${destB.monuments}
            <div class="compare-photo-preview" style="background-image: url('${destB.monumentUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')"></div>
          </td>
        </tr>
        <tr>
          <td><strong>🥾 Immersive Activities</strong></td>
          <td>
            <ul class="compare-activity-list">
              ${destA.activities.map(a => `<li>✨ ${a}</li>`).join("")}
            </ul>
          </td>
          <td>
            <ul class="compare-activity-list">
              ${destB.activities.map(a => `<li>✨ ${a}</li>`).join("")}
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  `;

  document.getElementById("modal-compare").classList.add("open");
}

// 12. Detail Modal Presentation
function openDetailModal(destId) {
  const dest = DESTINATIONS.find(d => d.id === destId);
  if (!dest) return;

  const isSaved = checkIsSaved(dest.id);
  const detailBody = document.getElementById("detail-modal-body");

  detailBody.innerHTML = `
    <div class="modal-journal-layout">
      <div class="journal-header-banner" style="background-image: linear-gradient(rgba(30,27,24,0.4), rgba(30,27,24,0.4)), url('${dest.imageUrl}'), url('${FALLBACK_IMAGE}'), url('${SVG_FALLBACK}')">
        <!-- SVG Curved Circular Immigration postmark -->
        <div class="stamp-postmark">
          <svg viewBox="0 0 100 100" class="stamp-svg">
            <path id="stamp-path-${dest.id}" fill="none" stroke="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            <circle cx="50" cy="50" r="39" fill="none" stroke="var(--accent-terracotta)" stroke-width="1.2" stroke-dasharray="3,2" />
            <circle cx="50" cy="50" r="33" fill="none" stroke="var(--accent-terracotta)" stroke-width="0.8" />
            <text fill="var(--accent-terracotta)" font-size="6.5" font-weight="900" letter-spacing="0.5">
              <textPath href="#stamp-path-${dest.id}" startOffset="50%" text-anchor="middle">
                ★ CULTURAL IMMIGRATION DEPT ★
              </textPath>
            </text>
            <text x="50" y="56" fill="var(--accent-terracotta)" font-size="20" text-anchor="middle" font-family="var(--font-editorial)" font-weight="900">
              ${dest.flag}
            </text>
          </svg>
        </div>
        
        <div class="banner-country-label">${dest.country}</div>
        <h2>${dest.name}</h2>
      </div>
      
      <div class="journal-content-grid">
        <div class="journal-left-page">
          <div class="journal-section-block">
            <h3>📜 Cultural Significance</h3>
            <p>${dest.culturalSignificance}</p>
          </div>
          
          <div class="journal-section-block">
            <h3>🍲 Food Culture Heritage</h3>
            <p>${dest.traditionalFood}</p>
            <div class="inline-photo-stack">
              <div class="polaroid-frame">
                <div class="polaroid-img" style="background-image: url('${dest.foodUrl}')"></div>
                <div class="polaroid-caption">traditional food</div>
              </div>
            </div>
          </div>

          <div class="journal-section-block">
            <h3>🎨 Ancestral Arts & Crafts</h3>
            <p>${dest.artCraft}</p>
            <div class="inline-photo-stack">
              <div class="polaroid-frame">
                <div class="polaroid-img" style="background-image: url('${dest.craftUrl}')"></div>
                <div class="polaroid-caption">artisan craft</div>
              </div>
            </div>
          </div>
        </div>
        <div class="journal-right-page">
          <div class="journal-section-block">
            <h3>💃 Traditional Ritual Dances</h3>
            <p>${dest.dances}</p>
            <div class="inline-photo-stack">
              <div class="polaroid-frame">
                <div class="polaroid-img" style="background-image: url('${dest.cultureUrl}')"></div>
                <div class="polaroid-caption">cultural dance</div>
              </div>
            </div>
          </div>

          <div class="journal-section-block">
            <h3>🏛️ Monuments & Historic Sites</h3>
            <p>${dest.monuments}</p>
            <div class="inline-photo-stack">
              <div class="polaroid-frame">
                <div class="polaroid-img" style="background-image: url('${dest.monumentUrl}')">
                <div class="polaroid-caption">historical highlight</div>
              </div>
            </div>
          </div>

          <div class="journal-section-block">
            <h3>🎒 Immersive Recommended Activities</h3>
            <ul class="journal-activity-list">
              ${dest.activities.map(act => `<li>🗺️ ${act}</li>`).join("")}
            </ul>
          </div>
          
          <div class="journal-meta-row">
            <div><strong>Budget:</strong> <span class="badge badge-budget">${dest.budgetLevel.toUpperCase()}</span></div>
            <div><strong>Climate:</strong> <span class="badge badge-climate">${dest.climate.toUpperCase()}</span></div>
          </div>
        </div>
      </div>
      
      <div class="journal-footer-row">
        <button class="save-btn-secondary ${isSaved ? 'saved' : ''}" onclick="toggleSaveDestination(event, '${dest.id}'); updateModalSaveBtn(this, '${dest.id}')">
          ${isSaved ? 'Saved in Journal ❤️' : 'Save to My Journal 🤍'}
        </button>
      </div>
    </div>
  `;

  document.getElementById("modal-detail").classList.add("open");
}

function updateModalSaveBtn(btn, destId) {
  const isSaved = checkIsSaved(destId);
  if (isSaved) {
    btn.classList.add("saved");
    btn.innerHTML = "Saved in Journal ❤️";
  } else {
    btn.classList.remove("saved");
    btn.innerHTML = "Save to My Journal 🤍";
  }
}

// Helper: Toast Notifications
function showToast(msg) {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = "toast-message";
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 100);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}
