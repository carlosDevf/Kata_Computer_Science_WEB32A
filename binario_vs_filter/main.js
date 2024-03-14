// Una funcion que te regrese el arrelog de elementos que concidan con la busqueda
const productos =  [
    {
      "id": 361,
      "name": "Toxic Rick",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Rick's toxic side",
      "gender": "Male",
      "origin": {
        "name": "Detoxifier",
        "url": "https://rickandmortyapi.com/api/location/64"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/27"
      ],
      "url": "https://rickandmortyapi.com/api/character/361",
      "created": "2018-01-10T18:20:41.703Z"
    },
    {
      "id": 362,
      "name": "Traflorkian",
      "status": "Alive",
      "species": "Alien",
      "type": "Traflorkian",
      "gender": "unknown",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/362.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/362",
      "created": "2018-01-10T18:52:08.927Z"
    },
    {
      "id": 363,
      "name": "Trandor",
      "status": "Alive",
      "species": "Alien",
      "type": "Krootabulan",
      "gender": "Male",
      "origin": {
        "name": "Krootabulon",
        "url": "https://rickandmortyapi.com/api/location/45"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/363.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/30"
      ],
      "url": "https://rickandmortyapi.com/api/character/363",
      "created": "2018-01-10T18:54:36.578Z"
    },
    {
      "id": 364,
      "name": "Tree Person",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Teenyverse inhabitant",
      "gender": "unknown",
      "origin": {
        "name": "Kyle's Teenyverse",
        "url": "https://rickandmortyapi.com/api/location/50"
      },
      "location": {
        "name": "Kyle's Teenyverse",
        "url": "https://rickandmortyapi.com/api/location/50"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/364.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/17"
      ],
      "url": "https://rickandmortyapi.com/api/character/364",
      "created": "2018-01-10T18:57:50.033Z"
    },
    {
      "id": 365,
      "name": "Tricia Lange",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/365.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/46"
      ],
      "url": "https://rickandmortyapi.com/api/character/365",
      "created": "2018-01-10T18:59:31.842Z"
    },
    {
      "id": 366,
      "name": "Trunk Morty",
      "status": "Alive",
      "species": "Humanoid",
      "type": "Trunk-Person",
      "gender": "Male",
      "origin": {
        "name": "Trunk World",
        "url": "https://rickandmortyapi.com/api/location/65"
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/366.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/28"
      ],
      "url": "https://rickandmortyapi.com/api/character/366",
      "created": "2018-01-10T19:03:13.558Z"
    },
    {
      "id": 367,
      "name": "Trunk Man",
      "status": "Alive",
      "species": "Humanoid",
      "type": "Trunk-Person",
      "gender": "Male",
      "origin": {
        "name": "Trunk World",
        "url": "https://rickandmortyapi.com/api/location/65"
      },
      "location": {
        "name": "Interdimensional Cable",
        "url": "https://rickandmortyapi.com/api/location/6"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/367.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/28"
      ],
      "url": "https://rickandmortyapi.com/api/character/367",
      "created": "2018-01-10T19:05:34.004Z"
    },
    {
      "id": 368,
      "name": "Truth Tortoise",
      "status": "unknown",
      "species": "Mythological Creature",
      "type": "Omniscient being",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "unknown",
        "url": ""
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/368.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/29"
      ],
      "url": "https://rickandmortyapi.com/api/character/368",
      "created": "2018-01-10T19:14:35.885Z"
    },
    {
      "id": 369,
      "name": "Tusked Assassin",
      "status": "unknown",
      "species": "Alien",
      "type": "Tuskfish",
      "gender": "Male",
      "origin": {
        "name": "Resort Planet",
        "url": "https://rickandmortyapi.com/api/location/37"
      },
      "location": {
        "name": "Resort Planet",
        "url": "https://rickandmortyapi.com/api/location/37"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/369.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/26"
      ],
      "url": "https://rickandmortyapi.com/api/character/369",
      "created": "2018-01-10T19:17:00.093Z"
    },
    {
      "id": 370,
      "name": "Two Guys with Handlebar Mustaches",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Interdimensional Cable",
        "url": "https://rickandmortyapi.com/api/location/6"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/370.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/8"
      ],
      "url": "https://rickandmortyapi.com/api/character/370",
      "created": "2018-01-10T19:17:57.976Z"
    },
    {
      "id": 371,
      "name": "Tumblorkian",
      "status": "Alive",
      "species": "Alien",
      "type": "Tumblorkian",
      "gender": "Male",
      "origin": {
        "name": "Plopstar",
        "url": "https://rickandmortyapi.com/api/location/66"
      },
      "location": {
        "name": "Plopstar",
        "url": "https://rickandmortyapi.com/api/location/66"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/371.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/371",
      "created": "2018-01-10T19:18:44.560Z"
    },
    {
      "id": 372,
      "name": "Unity",
      "status": "Alive",
      "species": "Alien",
      "type": "Hivemind",
      "gender": "Genderless",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Unity's Planet",
        "url": "https://rickandmortyapi.com/api/location/28"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/372.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/14"
      ],
      "url": "https://rickandmortyapi.com/api/character/372",
      "created": "2018-01-10T19:20:50.211Z"
    },
    {
      "id": 373,
      "name": "Unmuscular Michael",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Interdimensional Cable",
        "url": "https://rickandmortyapi.com/api/location/6"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/373.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/8"
      ],
      "url": "https://rickandmortyapi.com/api/character/373",
      "created": "2018-01-10T19:22:04.075Z"
    },
    {
      "id": 374,
      "name": "Vampire Master",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Vampire",
      "gender": "Male",
      "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/374.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/374",
      "created": "2018-01-10T19:23:45.478Z"
    },
    {
      "id": 375,
      "name": "Vance Maximus",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/375.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/375",
      "created": "2018-01-10T19:26:00.957Z"
    },
    {
      "id": 376,
      "name": "Veronica Ann Bennet",
      "status": "Alive",
      "species": "Alien",
      "type": "Gazorpian",
      "gender": "Female",
      "origin": {
        "name": "Gazorpazorp",
        "url": "https://rickandmortyapi.com/api/location/40"
      },
      "location": {
        "name": "Gazorpazorp",
        "url": "https://rickandmortyapi.com/api/location/40"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/376.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/7"
      ],
      "url": "https://rickandmortyapi.com/api/character/376",
      "created": "2018-01-10T19:27:06.246Z"
    },
    {
      "id": 377,
      "name": "Voltematron",
      "status": "Dead",
      "species": "Alien",
      "type": "Parasite",
      "gender": "unknown",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/377.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/29"
      ],
      "url": "https://rickandmortyapi.com/api/character/377",
      "created": "2018-01-10T19:29:08.116Z"
    },
    {
      "id": 378,
      "name": "Wall Crawling Rick",
      "status": "unknown",
      "species": "Humanoid",
      "type": "Lizard-Person",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/378.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/22"
      ],
      "url": "https://rickandmortyapi.com/api/character/378",
      "created": "2018-01-10T19:33:30.804Z"
    },
    {
      "id": 379,
      "name": "Wedding Bartender",
      "status": "unknown",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Planet Squanch",
        "url": "https://rickandmortyapi.com/api/location/35"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/379.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/21"
      ],
      "url": "https://rickandmortyapi.com/api/character/379",
      "created": "2018-01-10T19:37:41.375Z"
    },
    {
      "id": 380,
      "name": "Unknown Rick",
      "status": "unknown",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "unknown",
        "url": ""
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/380.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/380",
      "created": "2018-01-10T19:44:22.262Z"
    },
  
    {
      "id": 381,
      "name": "Woman Rick",
      "status": "Alive",
      "species": "Alien",
      "type": "Chair",
      "gender": "Female",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "unknown",
        "url": ""
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10"
      ],
      "url": "https://rickandmortyapi.com/api/character/381",
      "created": "2018-01-10T19:46:00.622Z"
    },
    {
      "id": 382,
      "name": "Worldender",
      "status": "Dead",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/382.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/382",
      "created": "2018-01-10T19:47:55.859Z"
    },
    {
      "id": 383,
      "name": "Yaarb",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "St. Gloopy Noops Hospital",
        "url": "https://rickandmortyapi.com/api/location/16"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/383.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/383",
      "created": "2018-01-10T19:48:59.952Z"
    },
    {
      "id": 384,
      "name": "Yellow Headed Doctor",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "St. Gloopy Noops Hospital",
        "url": "https://rickandmortyapi.com/api/location/16"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/384.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/384",
      "created": "2018-01-10T19:50:19.351Z"
    },
    {
      "id": 385,
      "name": "Yellow Shirt Rick",
      "status": "unknown",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/385.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/22"
      ],
      "url": "https://rickandmortyapi.com/api/character/385",
      "created": "2018-01-10T19:51:18.996Z"
    },
    {
      "id": 386,
      "name": "Zarbadar Gloonch",
      "status": "Dead",
      "species": "Alien",
      "type": "Drumbloxian",
      "gender": "Female",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/386.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/386",
      "created": "2018-01-10T19:52:40.898Z"
    },
    {
      "id": 387,
      "name": "Zarbadar's Mytholog",
      "status": "unknown",
      "species": "Mythological Creature",
      "type": "Mytholog",
      "gender": "Female",
      "origin": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "location": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/387.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/387",
      "created": "2018-01-10T19:54:17.951Z"
    },
    {
      "id": 388,
      "name": "Zeep Xanflorp",
      "status": "Alive",
      "species": "Humanoid",
      "type": "Microverse inhabitant",
      "gender": "Male",
      "origin": {
        "name": "Rick's Battery Microverse",
        "url": "https://rickandmortyapi.com/api/location/24"
      },
      "location": {
        "name": "Rick's Battery Microverse",
        "url": "https://rickandmortyapi.com/api/location/24"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/388.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/17"
      ],
      "url": "https://rickandmortyapi.com/api/character/388",
      "created": "2018-01-10T19:56:57.790Z"
    },
    {
      "id": 389,
      "name": "Zeta Alpha Rick",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Rick's Memories",
        "url": "https://rickandmortyapi.com/api/location/126"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/389",
      "created": "2018-01-10T19:57:41.191Z"
    },
    {
      "id": 390,
      "name": "Zick Zack",
      "status": "Dead",
      "species": "Alien",
      "type": "Floop Floopian",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/390.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/29"
      ],
      "url": "https://rickandmortyapi.com/api/character/390",
      "created": "2018-01-10T20:00:05.681Z"
    },
    {
      "id": 391,
      "name": "Uncle Steve",
      "status": "Dead",
      "species": "Alien",
      "type": "Parasite",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/391.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/15"
      ],
      "url": "https://rickandmortyapi.com/api/character/391",
      "created": "2018-01-14T13:34:50.096Z"
    },
    {
      "id": 392,
      "name": "Bearded Morty",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/392.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/392",
      "created": "2018-01-14T14:48:05.977Z"
    },
    {
      "id": 393,
      "name": "Roy",
      "status": "Alive",
      "species": "Human",
      "type": "Game",
      "gender": "Male",
      "origin": {
        "name": "Roy: A Life Well Lived",
        "url": "https://rickandmortyapi.com/api/location/32"
      },
      "location": {
        "name": "Roy: A Life Well Lived",
        "url": "https://rickandmortyapi.com/api/location/32"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/393.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13"
      ],
      "url": "https://rickandmortyapi.com/api/character/393",
      "created": "2018-01-20T19:15:27.239Z"
    },
    {
      "id": 394,
      "name": "Davin",
      "status": "Dead",
      "species": "Cronenberg",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/6"
      ],
      "url": "https://rickandmortyapi.com/api/character/394",
      "created": "2018-01-20T19:48:42.201Z"
    },
    {
      "id": 395,
      "name": "Greebybobe",
      "status": "Alive",
      "species": "Alien",
      "type": "Greebybobe",
      "gender": "unknown",
      "origin": {
        "name": "Girvonesk",
        "url": "https://rickandmortyapi.com/api/location/68"
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/395",
      "created": "2018-04-15T16:46:31.715Z"
    },
    {
      "id": 396,
      "name": "Scary Teacher",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Monster",
      "gender": "Male",
      "origin": {
        "name": "Mr. Goldenfold's dream",
        "url": "https://rickandmortyapi.com/api/location/18"
      },
      "location": {
        "name": "Mr. Goldenfold's dream",
        "url": "https://rickandmortyapi.com/api/location/18"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/396.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/396",
      "created": "2018-04-15T17:10:07.639Z"
    },
    {
      "id": 397,
      "name": "Fido",
      "status": "Alive",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male",
      "origin": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "location": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/397.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/397",
      "created": "2018-04-15T17:15:28.777Z"
    },
    {
      "id": 398,
      "name": "Accountant dog",
      "status": "Alive",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male",
      "origin": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "location": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/398.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/398",
      "created": "2018-04-15T17:23:04.169Z"
    },
    {
      "id": 399,
      "name": "Tiny-persons advocacy group lawyer",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Giant",
      "gender": "Male",
      "origin": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "location": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/399.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/5"
      ],
      "url": "https://rickandmortyapi.com/api/character/399",
      "created": "2018-04-15T17:34:02.076Z"
    },
    {
      "id": 400,
      "name": "Giant Judge",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Giant",
      "gender": "Male",
      "origin": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "location": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/5"
      ],
      "url": "https://rickandmortyapi.com/api/character/400",
      "created": "2018-04-15T17:36:11.295Z"
    },
  
    {
      "id": 381,
      "name": "Woman Rick",
      "status": "Alive",
      "species": "Alien",
      "type": "Chair",
      "gender": "Female",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "unknown",
        "url": ""
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10"
      ],
      "url": "https://rickandmortyapi.com/api/character/381",
      "created": "2018-01-10T19:46:00.622Z"
    },
    {
      "id": 382,
      "name": "Worldender",
      "status": "Dead",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/382.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/382",
      "created": "2018-01-10T19:47:55.859Z"
    },
    {
      "id": 383,
      "name": "Yaarb",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "St. Gloopy Noops Hospital",
        "url": "https://rickandmortyapi.com/api/location/16"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/383.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/383",
      "created": "2018-01-10T19:48:59.952Z"
    },
    {
      "id": 384,
      "name": "Yellow Headed Doctor",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "St. Gloopy Noops Hospital",
        "url": "https://rickandmortyapi.com/api/location/16"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/384.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/384",
      "created": "2018-01-10T19:50:19.351Z"
    },
    {
      "id": 385,
      "name": "Yellow Shirt Rick",
      "status": "unknown",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/385.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/22"
      ],
      "url": "https://rickandmortyapi.com/api/character/385",
      "created": "2018-01-10T19:51:18.996Z"
    },
    {
      "id": 386,
      "name": "Zarbadar Gloonch",
      "status": "Dead",
      "species": "Alien",
      "type": "Drumbloxian",
      "gender": "Female",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/386.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/386",
      "created": "2018-01-10T19:52:40.898Z"
    },
    {
      "id": 387,
      "name": "Zarbadar's Mytholog",
      "status": "unknown",
      "species": "Mythological Creature",
      "type": "Mytholog",
      "gender": "Female",
      "origin": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "location": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/387.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/387",
      "created": "2018-01-10T19:54:17.951Z"
    },
    {
      "id": 388,
      "name": "Zeep Xanflorp",
      "status": "Alive",
      "species": "Humanoid",
      "type": "Microverse inhabitant",
      "gender": "Male",
      "origin": {
        "name": "Rick's Battery Microverse",
        "url": "https://rickandmortyapi.com/api/location/24"
      },
      "location": {
        "name": "Rick's Battery Microverse",
        "url": "https://rickandmortyapi.com/api/location/24"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/388.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/17"
      ],
      "url": "https://rickandmortyapi.com/api/character/388",
      "created": "2018-01-10T19:56:57.790Z"
    },
    {
      "id": 389,
      "name": "Zeta Alpha Rick",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Rick's Memories",
        "url": "https://rickandmortyapi.com/api/location/126"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/389",
      "created": "2018-01-10T19:57:41.191Z"
    },
    {
      "id": 390,
      "name": "Zick Zack",
      "status": "Dead",
      "species": "Alien",
      "type": "Floop Floopian",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/390.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/29"
      ],
      "url": "https://rickandmortyapi.com/api/character/390",
      "created": "2018-01-10T20:00:05.681Z"
    },
    {
      "id": 391,
      "name": "Uncle Steve",
      "status": "Dead",
      "species": "Alien",
      "type": "Parasite",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/391.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/15"
      ],
      "url": "https://rickandmortyapi.com/api/character/391",
      "created": "2018-01-14T13:34:50.096Z"
    },
    {
      "id": 392,
      "name": "Bearded Morty",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/392.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/392",
      "created": "2018-01-14T14:48:05.977Z"
    },
    {
      "id": 393,
      "name": "Roy",
      "status": "Alive",
      "species": "Human",
      "type": "Game",
      "gender": "Male",
      "origin": {
        "name": "Roy: A Life Well Lived",
        "url": "https://rickandmortyapi.com/api/location/32"
      },
      "location": {
        "name": "Roy: A Life Well Lived",
        "url": "https://rickandmortyapi.com/api/location/32"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/393.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13"
      ],
      "url": "https://rickandmortyapi.com/api/character/393",
      "created": "2018-01-20T19:15:27.239Z"
    },
    {
      "id": 394,
      "name": "Davin",
      "status": "Dead",
      "species": "Cronenberg",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/6"
      ],
      "url": "https://rickandmortyapi.com/api/character/394",
      "created": "2018-01-20T19:48:42.201Z"
    },
    {
      "id": 395,
      "name": "Greebybobe",
      "status": "Alive",
      "species": "Alien",
      "type": "Greebybobe",
      "gender": "unknown",
      "origin": {
        "name": "Girvonesk",
        "url": "https://rickandmortyapi.com/api/location/68"
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/395",
      "created": "2018-04-15T16:46:31.715Z"
    },
    {
      "id": 396,
      "name": "Scary Teacher",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Monster",
      "gender": "Male",
      "origin": {
        "name": "Mr. Goldenfold's dream",
        "url": "https://rickandmortyapi.com/api/location/18"
      },
      "location": {
        "name": "Mr. Goldenfold's dream",
        "url": "https://rickandmortyapi.com/api/location/18"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/396.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/396",
      "created": "2018-04-15T17:10:07.639Z"
    },
    {
      "id": 397,
      "name": "Fido",
      "status": "Alive",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male",
      "origin": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "location": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/397.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/397",
      "created": "2018-04-15T17:15:28.777Z"
    },
    {
      "id": 398,
      "name": "Accountant dog",
      "status": "Alive",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male",
      "origin": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "location": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/398.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/398",
      "created": "2018-04-15T17:23:04.169Z"
    },
    {
      "id": 399,
      "name": "Tiny-persons advocacy group lawyer",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Giant",
      "gender": "Male",
      "origin": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "location": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/399.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/5"
      ],
      "url": "https://rickandmortyapi.com/api/character/399",
      "created": "2018-04-15T17:34:02.076Z"
    },
    {
      "id": 400,
      "name": "Giant Judge",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Giant",
      "gender": "Male",
      "origin": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "location": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/5"
      ],
      "url": "https://rickandmortyapi.com/api/character/400",
      "created": "2018-04-15T17:36:11.295Z"
    },
  
    {
      "id": 381,
      "name": "Woman Rick",
      "status": "Alive",
      "species": "Alien",
      "type": "Chair",
      "gender": "Female",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "unknown",
        "url": ""
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10"
      ],
      "url": "https://rickandmortyapi.com/api/character/381",
      "created": "2018-01-10T19:46:00.622Z"
    },
    {
      "id": 382,
      "name": "Worldender",
      "status": "Dead",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/382.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/382",
      "created": "2018-01-10T19:47:55.859Z"
    },
    {
      "id": 383,
      "name": "Yaarb",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "St. Gloopy Noops Hospital",
        "url": "https://rickandmortyapi.com/api/location/16"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/383.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/383",
      "created": "2018-01-10T19:48:59.952Z"
    },
    {
      "id": 384,
      "name": "Yellow Headed Doctor",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "St. Gloopy Noops Hospital",
        "url": "https://rickandmortyapi.com/api/location/16"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/384.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/384",
      "created": "2018-01-10T19:50:19.351Z"
    },
    {
      "id": 385,
      "name": "Yellow Shirt Rick",
      "status": "unknown",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/385.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/22"
      ],
      "url": "https://rickandmortyapi.com/api/character/385",
      "created": "2018-01-10T19:51:18.996Z"
    },
    {
      "id": 386,
      "name": "Zarbadar Gloonch",
      "status": "Dead",
      "species": "Alien",
      "type": "Drumbloxian",
      "gender": "Female",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/386.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/386",
      "created": "2018-01-10T19:52:40.898Z"
    },
    {
      "id": 387,
      "name": "Zarbadar's Mytholog",
      "status": "unknown",
      "species": "Mythological Creature",
      "type": "Mytholog",
      "gender": "Female",
      "origin": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "location": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/387.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/387",
      "created": "2018-01-10T19:54:17.951Z"
    },
    {
      "id": 388,
      "name": "Zeep Xanflorp",
      "status": "Alive",
      "species": "Humanoid",
      "type": "Microverse inhabitant",
      "gender": "Male",
      "origin": {
        "name": "Rick's Battery Microverse",
        "url": "https://rickandmortyapi.com/api/location/24"
      },
      "location": {
        "name": "Rick's Battery Microverse",
        "url": "https://rickandmortyapi.com/api/location/24"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/388.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/17"
      ],
      "url": "https://rickandmortyapi.com/api/character/388",
      "created": "2018-01-10T19:56:57.790Z"
    },
    {
      "id": 389,
      "name": "Zeta Alpha Rick",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Rick's Memories",
        "url": "https://rickandmortyapi.com/api/location/126"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/389",
      "created": "2018-01-10T19:57:41.191Z"
    },
    {
      "id": 390,
      "name": "Zick Zack",
      "status": "Dead",
      "species": "Alien",
      "type": "Floop Floopian",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/390.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/29"
      ],
      "url": "https://rickandmortyapi.com/api/character/390",
      "created": "2018-01-10T20:00:05.681Z"
    },
    {
      "id": 391,
      "name": "Uncle Steve",
      "status": "Dead",
      "species": "Alien",
      "type": "Parasite",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/391.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/15"
      ],
      "url": "https://rickandmortyapi.com/api/character/391",
      "created": "2018-01-14T13:34:50.096Z"
    },
    {
      "id": 392,
      "name": "Bearded Morty",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/392.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/392",
      "created": "2018-01-14T14:48:05.977Z"
    },
    {
      "id": 393,
      "name": "Roy",
      "status": "Alive",
      "species": "Human",
      "type": "Game",
      "gender": "Male",
      "origin": {
        "name": "Roy: A Life Well Lived",
        "url": "https://rickandmortyapi.com/api/location/32"
      },
      "location": {
        "name": "Roy: A Life Well Lived",
        "url": "https://rickandmortyapi.com/api/location/32"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/393.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13"
      ],
      "url": "https://rickandmortyapi.com/api/character/393",
      "created": "2018-01-20T19:15:27.239Z"
    },
    {
      "id": 394,
      "name": "Davin",
      "status": "Dead",
      "species": "Cronenberg",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/6"
      ],
      "url": "https://rickandmortyapi.com/api/character/394",
      "created": "2018-01-20T19:48:42.201Z"
    },
    {
      "id": 395,
      "name": "Greebybobe",
      "status": "Alive",
      "species": "Alien",
      "type": "Greebybobe",
      "gender": "unknown",
      "origin": {
        "name": "Girvonesk",
        "url": "https://rickandmortyapi.com/api/location/68"
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/395",
      "created": "2018-04-15T16:46:31.715Z"
    },
    {
      "id": 396,
      "name": "Scary Teacher",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Monster",
      "gender": "Male",
      "origin": {
        "name": "Mr. Goldenfold's dream",
        "url": "https://rickandmortyapi.com/api/location/18"
      },
      "location": {
        "name": "Mr. Goldenfold's dream",
        "url": "https://rickandmortyapi.com/api/location/18"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/396.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/396",
      "created": "2018-04-15T17:10:07.639Z"
    },
    {
      "id": 397,
      "name": "Fido",
      "status": "Alive",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male",
      "origin": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "location": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/397.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/397",
      "created": "2018-04-15T17:15:28.777Z"
    },
    {
      "id": 398,
      "name": "Accountant dog",
      "status": "Alive",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male",
      "origin": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "location": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/398.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/398",
      "created": "2018-04-15T17:23:04.169Z"
    },
    {
      "id": 399,
      "name": "Tiny-persons advocacy group lawyer",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Giant",
      "gender": "Male",
      "origin": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "location": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/399.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/5"
      ],
      "url": "https://rickandmortyapi.com/api/character/399",
      "created": "2018-04-15T17:34:02.076Z"
    },
    {
      "id": 400,
      "name": "Giant Judge",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Giant",
      "gender": "Male",
      "origin": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "location": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/5"
      ],
      "url": "https://rickandmortyapi.com/api/character/400",
      "created": "2018-04-15T17:36:11.295Z"
    },
  
    {
      "id": 381,
      "name": "Woman Rick",
      "status": "Alive",
      "species": "Alien",
      "type": "Chair",
      "gender": "Female",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "unknown",
        "url": ""
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10"
      ],
      "url": "https://rickandmortyapi.com/api/character/381",
      "created": "2018-01-10T19:46:00.622Z"
    },
    {
      "id": 382,
      "name": "Worldender",
      "status": "Dead",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/382.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/382",
      "created": "2018-01-10T19:47:55.859Z"
    },
    {
      "id": 383,
      "name": "Yaarb",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "St. Gloopy Noops Hospital",
        "url": "https://rickandmortyapi.com/api/location/16"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/383.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/383",
      "created": "2018-01-10T19:48:59.952Z"
    },
    {
      "id": 384,
      "name": "Yellow Headed Doctor",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "St. Gloopy Noops Hospital",
        "url": "https://rickandmortyapi.com/api/location/16"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/384.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/384",
      "created": "2018-01-10T19:50:19.351Z"
    },
    {
      "id": 385,
      "name": "Yellow Shirt Rick",
      "status": "unknown",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/385.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/22"
      ],
      "url": "https://rickandmortyapi.com/api/character/385",
      "created": "2018-01-10T19:51:18.996Z"
    },
    {
      "id": 386,
      "name": "Zarbadar Gloonch",
      "status": "Dead",
      "species": "Alien",
      "type": "Drumbloxian",
      "gender": "Female",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/386.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/386",
      "created": "2018-01-10T19:52:40.898Z"
    },
    {
      "id": 387,
      "name": "Zarbadar's Mytholog",
      "status": "unknown",
      "species": "Mythological Creature",
      "type": "Mytholog",
      "gender": "Female",
      "origin": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "location": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/387.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/387",
      "created": "2018-01-10T19:54:17.951Z"
    },
    {
      "id": 388,
      "name": "Zeep Xanflorp",
      "status": "Alive",
      "species": "Humanoid",
      "type": "Microverse inhabitant",
      "gender": "Male",
      "origin": {
        "name": "Rick's Battery Microverse",
        "url": "https://rickandmortyapi.com/api/location/24"
      },
      "location": {
        "name": "Rick's Battery Microverse",
        "url": "https://rickandmortyapi.com/api/location/24"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/388.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/17"
      ],
      "url": "https://rickandmortyapi.com/api/character/388",
      "created": "2018-01-10T19:56:57.790Z"
    },
    {
      "id": 389,
      "name": "Zeta Alpha Rick",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Rick's Memories",
        "url": "https://rickandmortyapi.com/api/location/126"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/389",
      "created": "2018-01-10T19:57:41.191Z"
    },
    {
      "id": 390,
      "name": "Zick Zack",
      "status": "Dead",
      "species": "Alien",
      "type": "Floop Floopian",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/390.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/29"
      ],
      "url": "https://rickandmortyapi.com/api/character/390",
      "created": "2018-01-10T20:00:05.681Z"
    },
    {
      "id": 391,
      "name": "Uncle Steve",
      "status": "Dead",
      "species": "Alien",
      "type": "Parasite",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/391.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/15"
      ],
      "url": "https://rickandmortyapi.com/api/character/391",
      "created": "2018-01-14T13:34:50.096Z"
    },
    {
      "id": 392,
      "name": "Bearded Morty",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/392.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/392",
      "created": "2018-01-14T14:48:05.977Z"
    },
    {
      "id": 393,
      "name": "Roy",
      "status": "Alive",
      "species": "Human",
      "type": "Game",
      "gender": "Male",
      "origin": {
        "name": "Roy: A Life Well Lived",
        "url": "https://rickandmortyapi.com/api/location/32"
      },
      "location": {
        "name": "Roy: A Life Well Lived",
        "url": "https://rickandmortyapi.com/api/location/32"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/393.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13"
      ],
      "url": "https://rickandmortyapi.com/api/character/393",
      "created": "2018-01-20T19:15:27.239Z"
    },
    {
      "id": 394,
      "name": "Davin",
      "status": "Dead",
      "species": "Cronenberg",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/6"
      ],
      "url": "https://rickandmortyapi.com/api/character/394",
      "created": "2018-01-20T19:48:42.201Z"
    },
    {
      "id": 395,
      "name": "Greebybobe",
      "status": "Alive",
      "species": "Alien",
      "type": "Greebybobe",
      "gender": "unknown",
      "origin": {
        "name": "Girvonesk",
        "url": "https://rickandmortyapi.com/api/location/68"
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/395",
      "created": "2018-04-15T16:46:31.715Z"
    },
    {
      "id": 396,
      "name": "Scary Teacher",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Monster",
      "gender": "Male",
      "origin": {
        "name": "Mr. Goldenfold's dream",
        "url": "https://rickandmortyapi.com/api/location/18"
      },
      "location": {
        "name": "Mr. Goldenfold's dream",
        "url": "https://rickandmortyapi.com/api/location/18"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/396.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/396",
      "created": "2018-04-15T17:10:07.639Z"
    },
    {
      "id": 397,
      "name": "Fido",
      "status": "Alive",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male",
      "origin": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "location": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/397.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/397",
      "created": "2018-04-15T17:15:28.777Z"
    },
    {
      "id": 398,
      "name": "Accountant dog",
      "status": "Alive",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male",
      "origin": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "location": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/398.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/398",
      "created": "2018-04-15T17:23:04.169Z"
    },
    {
      "id": 399,
      "name": "Tiny-persons advocacy group lawyer",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Giant",
      "gender": "Male",
      "origin": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "location": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/399.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/5"
      ],
      "url": "https://rickandmortyapi.com/api/character/399",
      "created": "2018-04-15T17:34:02.076Z"
    },
    {
      "id": 400,
      "name": "Giant Judge",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Giant",
      "gender": "Male",
      "origin": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "location": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/5"
      ],
      "url": "https://rickandmortyapi.com/api/character/400",
      "created": "2018-04-15T17:36:11.295Z"
    },
  
    {
      "id": 381,
      "name": "Woman Rick",
      "status": "Alive",
      "species": "Alien",
      "type": "Chair",
      "gender": "Female",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "unknown",
        "url": ""
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10"
      ],
      "url": "https://rickandmortyapi.com/api/character/381",
      "created": "2018-01-10T19:46:00.622Z"
    },
    {
      "id": 382,
      "name": "Worldender",
      "status": "Dead",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/382.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/382",
      "created": "2018-01-10T19:47:55.859Z"
    },
    {
      "id": 383,
      "name": "Yaarb",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "St. Gloopy Noops Hospital",
        "url": "https://rickandmortyapi.com/api/location/16"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/383.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/383",
      "created": "2018-01-10T19:48:59.952Z"
    },
    {
      "id": 384,
      "name": "Yellow Headed Doctor",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "St. Gloopy Noops Hospital",
        "url": "https://rickandmortyapi.com/api/location/16"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/384.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/19"
      ],
      "url": "https://rickandmortyapi.com/api/character/384",
      "created": "2018-01-10T19:50:19.351Z"
    },
    {
      "id": 385,
      "name": "Yellow Shirt Rick",
      "status": "unknown",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/385.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/22"
      ],
      "url": "https://rickandmortyapi.com/api/character/385",
      "created": "2018-01-10T19:51:18.996Z"
    },
    {
      "id": 386,
      "name": "Zarbadar Gloonch",
      "status": "Dead",
      "species": "Alien",
      "type": "Drumbloxian",
      "gender": "Female",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/386.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/386",
      "created": "2018-01-10T19:52:40.898Z"
    },
    {
      "id": 387,
      "name": "Zarbadar's Mytholog",
      "status": "unknown",
      "species": "Mythological Creature",
      "type": "Mytholog",
      "gender": "Female",
      "origin": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "location": {
        "name": "Nuptia 4",
        "url": "https://rickandmortyapi.com/api/location/13"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/387.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/18"
      ],
      "url": "https://rickandmortyapi.com/api/character/387",
      "created": "2018-01-10T19:54:17.951Z"
    },
    {
      "id": 388,
      "name": "Zeep Xanflorp",
      "status": "Alive",
      "species": "Humanoid",
      "type": "Microverse inhabitant",
      "gender": "Male",
      "origin": {
        "name": "Rick's Battery Microverse",
        "url": "https://rickandmortyapi.com/api/location/24"
      },
      "location": {
        "name": "Rick's Battery Microverse",
        "url": "https://rickandmortyapi.com/api/location/24"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/388.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/17"
      ],
      "url": "https://rickandmortyapi.com/api/character/388",
      "created": "2018-01-10T19:56:57.790Z"
    },
    {
      "id": 389,
      "name": "Zeta Alpha Rick",
      "status": "Dead",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Rick's Memories",
        "url": "https://rickandmortyapi.com/api/location/126"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/389",
      "created": "2018-01-10T19:57:41.191Z"
    },
    {
      "id": 390,
      "name": "Zick Zack",
      "status": "Dead",
      "species": "Alien",
      "type": "Floop Floopian",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/390.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/29"
      ],
      "url": "https://rickandmortyapi.com/api/character/390",
      "created": "2018-01-10T20:00:05.681Z"
    },
    {
      "id": 391,
      "name": "Uncle Steve",
      "status": "Dead",
      "species": "Alien",
      "type": "Parasite",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/391.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/15"
      ],
      "url": "https://rickandmortyapi.com/api/character/391",
      "created": "2018-01-14T13:34:50.096Z"
    },
    {
      "id": 392,
      "name": "Bearded Morty",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "unknown",
        "url": ""
      },
      "location": {
        "name": "Citadel of Ricks",
        "url": "https://rickandmortyapi.com/api/location/3"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/392.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/51"
      ],
      "url": "https://rickandmortyapi.com/api/character/392",
      "created": "2018-01-14T14:48:05.977Z"
    },
    {
      "id": 393,
      "name": "Roy",
      "status": "Alive",
      "species": "Human",
      "type": "Game",
      "gender": "Male",
      "origin": {
        "name": "Roy: A Life Well Lived",
        "url": "https://rickandmortyapi.com/api/location/32"
      },
      "location": {
        "name": "Roy: A Life Well Lived",
        "url": "https://rickandmortyapi.com/api/location/32"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/393.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/13"
      ],
      "url": "https://rickandmortyapi.com/api/character/393",
      "created": "2018-01-20T19:15:27.239Z"
    },
    {
      "id": 394,
      "name": "Davin",
      "status": "Dead",
      "species": "Cronenberg",
      "type": "",
      "gender": "Male",
      "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/394.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/6"
      ],
      "url": "https://rickandmortyapi.com/api/character/394",
      "created": "2018-01-20T19:48:42.201Z"
    },
    {
      "id": 395,
      "name": "Greebybobe",
      "status": "Alive",
      "species": "Alien",
      "type": "Greebybobe",
      "gender": "unknown",
      "origin": {
        "name": "Girvonesk",
        "url": "https://rickandmortyapi.com/api/location/68"
      },
      "location": {
        "name": "Worldender's lair",
        "url": "https://rickandmortyapi.com/api/location/4"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/25"
      ],
      "url": "https://rickandmortyapi.com/api/character/395",
      "created": "2018-04-15T16:46:31.715Z"
    },
    {
      "id": 396,
      "name": "Scary Teacher",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Monster",
      "gender": "Male",
      "origin": {
        "name": "Mr. Goldenfold's dream",
        "url": "https://rickandmortyapi.com/api/location/18"
      },
      "location": {
        "name": "Mr. Goldenfold's dream",
        "url": "https://rickandmortyapi.com/api/location/18"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/396.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/396",
      "created": "2018-04-15T17:10:07.639Z"
    },
    {
      "id": 397,
      "name": "Fido",
      "status": "Alive",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male",
      "origin": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "location": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/397.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/397",
      "created": "2018-04-15T17:15:28.777Z"
    },
    {
      "id": 398,
      "name": "Accountant dog",
      "status": "Alive",
      "species": "Animal",
      "type": "Dog",
      "gender": "Male",
      "origin": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "location": {
        "name": "Snuffles' Dream",
        "url": "https://rickandmortyapi.com/api/location/70"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/398.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/2"
      ],
      "url": "https://rickandmortyapi.com/api/character/398",
      "created": "2018-04-15T17:23:04.169Z"
    },
    {
      "id": 399,
      "name": "Tiny-persons advocacy group lawyer",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Giant",
      "gender": "Male",
      "origin": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "location": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/399.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/5"
      ],
      "url": "https://rickandmortyapi.com/api/character/399",
      "created": "2018-04-15T17:34:02.076Z"
    },
    {
      "id": 400,
      "name": "Giant Judge",
      "status": "Alive",
      "species": "Mythological Creature",
      "type": "Giant",
      "gender": "Male",
      "origin": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "location": {
        "name": "Giant's Town",
        "url": "https://rickandmortyapi.com/api/location/14"
      },
      "image": "https://rickandmortyapi.com/api/character/avatar/400.jpeg",
      "episode": [
        "https://rickandmortyapi.com/api/episode/5"
      ],
      "url": "https://rickandmortyapi.com/api/character/400",
      "created": "2018-04-15T17:36:11.295Z"
    }  
  
  
  ]
console.log(productos.length)
// funcion retorna un arreglo
function encontrarInicio(productos, precioMinimo) {    
    let inicio = 0;
    let fin = productos.length - 1;    
    let respuesta = -1; // Empezamos asumiendo que no hay coincidencias

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        console.log(medio)
        if (productos[medio].id >= precioMinimo) {
            respuesta = medio; // Encontramos un candidato, seguimos buscando hacia la izquierda
            fin = medio - 1;
        } else {
            inicio = medio + 1;
        }
    }

    return respuesta;
}

function encontrarFin(productos, precioMaximo) {
    let inicio = 0;
    let fin = productos.length - 1;
    let respuesta = -1; // Empezamos asumiendo que no hay coincidencias

    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
        if (productos[medio].id <= precioMaximo) {
            respuesta = medio; // Encontramos un candidato, seguimos buscando hacia la derecha
            inicio = medio + 1;
        } else {
            fin = medio - 1;
        }
    }

    return respuesta;
}

function busquedaBinariaPorRango(productos, precioMinimo, precioMaximo) {
    let inicio = encontrarInicio(productos, precioMinimo);
    let fin = encontrarFin(productos, precioMaximo);

    if (inicio === -1 || fin === -1 || inicio > fin) { // Verificación básica
        return []; // No se encontraron productos en el rango
    }
    //map
    return productos.slice(inicio, fin + 1); // +1 porque slice no incluye el elemento en el índice final
  // que pasa si hago un forEach on un for 
}


console.time("inicio")
const rangoProductos = busquedaBinariaPorRango(productos, 383, 400)
console.log(rangoProductos)
console.timeEnd("inicio")

console.time("confilter")
const rango = (productos, min, max) => productos.filter((value) => {
  return value.id >= min && value.id <= max
})
console.log(rango(productos, 383, 400))
console.timeEnd("confilter")
