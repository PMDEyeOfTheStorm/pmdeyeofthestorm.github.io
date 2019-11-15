const locations = {
    "New Haven": {
        type: "town",
        position: {x: 276, y: 268},
        description: "Once residing on the East coast, New Haven moved to its present location following the beginning of the Storm. Sheltered by mountains, the townspeople work to rebuild without the aid of a sea port.\nNew Haven's townfolk are a genreally optimistic bunch. However, with the destruction of their old town, they have become more business-like. In their minds, there is little time to waste, and Pokemon are expected to make themselves useful.",
    },
    "Lazalum": {
        type: "town",
        position: {x: 148, y: 270},
        description: "Always a coastal city, Lazalum's sea trade isn't its only attraction. The floodplains to its South provide vaulable farmland, and a connection to the Southern coast.\nA colorful place, walking the streets of Lazalum will allow you to see all kinds of individuals. Desert nomads, floodplain farmers, and seafaring merchants are just a few of the archetypes present.\nDespite its varying demographics, Lazalum manages to stay organized. It's only weakness is its lack of unity, as there is little to call upon other than its citizens in a time of crisis.",
    },
    "Pravus": {
        type: "town",
        position: {x: 220, y: 239},
        description: "Like New Haven, Pravus protects itself from the Storm with mountains. It acts as a resting point for those traveling the desert, finding growth from such commerce.\nPravus's Pokemon have little purpose to their names. They live for their own reasons, and are not concerned with denying outlaws or nomads entry. It's inherent lawlessness is counterbalanced by the mutual unspoken codes of honor, upheld by all inhabitants.\nAlmost an opposite of Lazalum, Pravus's only laws and organization comes from its people. The closest thing to a ",
    },
    "Towering Orchard": {
        type: "dungeon",
        position: {x: 240, y: 278},
        description: "Despite efforts to mark the colossal trees, travelers always seem to find themselves in the Mystery Dungeon in the heart of the woods. Some Pokemon have taken to building homes in the trees, trees that could easily fit a Dragonite through the width of their trunk.",
    },
    "Sinkhole": {
        type: "poi",
        position: {x: 240, y: 242},
        description: "A sinkhole in the middle of the desert. While its largest is most notable, this is actually a series of sinkholes, many of which claim victims unawares. However, stories of returning victims are not uncommon. The sinkholes have to lead somewhere, after all.",
    },
    "Heaven's Peak": {
        type: "dungeon",
        position: {x: 299, y: 226},
        description: "As adventurers ascend the mountain, their climb only increases in difficulty as they reach the Mystery Dungeon near the peak. Caves and cliffsides are the only refuge from the frigid temperatures, airborn Phantoms, and treacherous falls.",
    },
    "Perilous Rapids": {
        type: "dungeon",
        position: {x: 171, y: 285},
        description: "An otherwise easy and direct pass through the mountains, this Mystery Dungeon extends this part of the river to be impossibly long. Due to the violent nature of the rapids teeming with Phantoms, travellers often abandon boats in favor of climbing along either of the rockfaces.",
    },
    "Mirage Meadow": {
        type: "dungeon",
        position: {x: 181, y: 306},
        description: "It's easy to get lost in the empty southern half of the floodplains. Those who do will find themselves at the mercy of this Mystery Dungeon before they realize it.",
    },
    "Annular Highlands": {
        type: "dungeon",
        position: {x: 242, y: 294},
        description: "An otherwise ordinary handful of plateaus, the Annular Highlands never seem to end as adventurers ascend its flats. The Mystery Dungeon always ends at the top, serving as a trial for all those who would dare to traverse it.",
    },
    "Endless Mesa": {
        type: "dungeon",
        position: {x: 271, y: 296},
        description: "Endless Mesa is not actually endless. It just feels like it when one moment you're travelling East and the next you're in a Mystery Dungeon. Because the Dungeon itself is merely an inconvenience, some outlaws take to hiding among the Mesa to escape the law and prey upon travellers.",
    },
    "Subterranean Shore": {
        type: "dungeon",
        position: {x: 308, y: 307},
        description: "The blue hue of its rock makes Subterranaen Shore's entrance hard to miss. Off the beaten path, it's traversed primarily for its access to the Underground. Despite this, the Dungeon is not for the unprepared. Suffocating water and darkness await their victims.",
    },
    "Lighthouse": {
        type: "poi",
        position: {x: 138, y: 305},
        description: "Settled on Lazalum's border, the Lighthouse is more than just a tower. It's a symbol of Lazalum, and is recognizable by all seafaring voyagers.",
    },
    "Floodplains": {
        type: "region",
        position: {x: 162, y: 295},
        description: "The floodplains serve as a welcome sancutary for agriculture. Despite its comforts, the plains have their dangers. The repititious nature of the pains has lead some into Mystery Dungeons before they realize it.",
    },
    "Flats": {
        type: "region",
        position: {x: 267, y: 305},
        description: "This range of plateaus at the southern coast of the Storm Continent are rife with oddities and Mystery Dungeons. Despite this, its location often makes traversing it unavoidable. Many escorts are valued simply for their knowledge of the region,",
    },
};

const characters = [
    {
        name: "Owen",
        icon: "luxio",
        location: "mountain",
    },
    {
        name: "Wasabi",
        icon: "flareon",
        location: "mountain",
    },
    {
        name: "Cynder",
        icon: "cyndaquil",
        location: "mountain",
    },
    {
        name: "Rondell",
        icon: "zorua",
        location: "forest",
    },
];