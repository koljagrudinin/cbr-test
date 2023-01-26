import { IPlanetRowDto } from "../model/planet.row.dto";

export interface IFilteredDataResponseDto<T> {
  count: number;
  next: number | null;
  previous: number | null;
  results: T[]
}

export const serverResponse: IFilteredDataResponseDto<IPlanetRowDto> = {
  count: 51,
  next: null,
  previous: null,
  results: [
    {
      "name": "Alderaan",
      "rotation_period": "24",
      "orbital_period": "364",
      "diameter": "12500",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grasslands, mountains",
      "surface_water": "40",
      "population": "2000000000",
      "residents": [
        "https://swapi.co/api/people/5/",
        "https://swapi.co/api/people/68/",
        "https://swapi.co/api/people/81/"
      ],
      "films": [
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T11:35:48.479000Z",
      "edited": "2014-12-20T20:58:18.420000Z",
      "url": "https://swapi.co/api/planets/2/"
    },
    {
      "name": "Yavin IV",
      "rotation_period": "24",
      "orbital_period": "4818",
      "diameter": "10200",
      "climate": "temperate, tropical",
      "gravity": "1 standard",
      "terrain": "jungle, rainforests",
      "surface_water": "8",
      "population": "1000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-10T11:37:19.144000Z",
      "edited": "2014-12-20T20:58:18.421000Z",
      "url": "https://swapi.co/api/planets/3/"
    },
    {
      "name": "Hoth",
      "rotation_period": "23",
      "orbital_period": "549",
      "diameter": "7200",
      "climate": "frozen",
      "gravity": "1.1 standard",
      "terrain": "tundra, ice caves, mountain ranges",
      "surface_water": "100",
      "population": "unknown",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/2/"
      ],
      "created": "2014-12-10T11:39:13.934000Z",
      "edited": "2014-12-20T20:58:18.423000Z",
      "url": "https://swapi.co/api/planets/4/"
    },
    {
      "name": "Dagobah",
      "rotation_period": "23",
      "orbital_period": "341",
      "diameter": "8900",
      "climate": "murky",
      "gravity": "N/A",
      "terrain": "swamp, jungles",
      "surface_water": "8",
      "population": "unknown",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/2/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
      ],
      "created": "2014-12-10T11:42:22.590000Z",
      "edited": "2014-12-20T20:58:18.425000Z",
      "url": "https://swapi.co/api/planets/5/"
    },
    {
      "name": "Bespin",
      "rotation_period": "12",
      "orbital_period": "5110",
      "diameter": "118000",
      "climate": "temperate",
      "gravity": "1.5 (surface), 1 standard (Cloud City)",
      "terrain": "gas giant",
      "surface_water": "0",
      "population": "6000000",
      "residents": [
        "https://swapi.co/api/people/26/"
      ],
      "films": [
        "https://swapi.co/api/films/2/"
      ],
      "created": "2014-12-10T11:43:55.240000Z",
      "edited": "2014-12-20T20:58:18.427000Z",
      "url": "https://swapi.co/api/planets/6/"
    },
    {
      "name": "Endor",
      "rotation_period": "18",
      "orbital_period": "402",
      "diameter": "4900",
      "climate": "temperate",
      "gravity": "0.85 standard",
      "terrain": "forests, mountains, lakes",
      "surface_water": "8",
      "population": "30000000",
      "residents": [
        "https://swapi.co/api/people/30/"
      ],
      "films": [
        "https://swapi.co/api/films/3/"
      ],
      "created": "2014-12-10T11:50:29.349000Z",
      "edited": "2014-12-20T20:58:18.429000Z",
      "url": "https://swapi.co/api/planets/7/"
    },
    {
      "name": "Naboo",
      "rotation_period": "26",
      "orbital_period": "312",
      "diameter": "12120",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grassy hills, swamps, forests, mountains",
      "surface_water": "12",
      "population": "4500000000",
      "residents": [
        "https://swapi.co/api/people/3/",
        "https://swapi.co/api/people/21/",
        "https://swapi.co/api/people/36/",
        "https://swapi.co/api/people/37/",
        "https://swapi.co/api/people/38/",
        "https://swapi.co/api/people/39/",
        "https://swapi.co/api/people/42/",
        "https://swapi.co/api/people/60/",
        "https://swapi.co/api/people/61/",
        "https://swapi.co/api/people/66/",
        "https://swapi.co/api/people/35/"
      ],
      "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
      ],
      "created": "2014-12-10T11:52:31.066000Z",
      "edited": "2014-12-20T20:58:18.430000Z",
      "url": "https://swapi.co/api/planets/8/"
    },
    {
      "name": "Coruscant",
      "rotation_period": "24",
      "orbital_period": "368",
      "diameter": "12240",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "cityscape, mountains",
      "surface_water": "unknown",
      "population": "1000000000000",
      "residents": [
        "https://swapi.co/api/people/34/",
        "https://swapi.co/api/people/55/",
        "https://swapi.co/api/people/74/"
      ],
      "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/"
      ],
      "created": "2014-12-10T11:54:13.921000Z",
      "edited": "2014-12-20T20:58:18.432000Z",
      "url": "https://swapi.co/api/planets/9/"
    },
    {
      "name": "Kamino",
      "rotation_period": "27",
      "orbital_period": "463",
      "diameter": "19720",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "ocean",
      "surface_water": "100",
      "population": "1000000000",
      "residents": [
        "https://swapi.co/api/people/22/",
        "https://swapi.co/api/people/72/",
        "https://swapi.co/api/people/73/"
      ],
      "films": [
        "https://swapi.co/api/films/5/"
      ],
      "created": "2014-12-10T12:45:06.577000Z",
      "edited": "2014-12-20T20:58:18.434000Z",
      "url": "https://swapi.co/api/planets/10/"
    },
    {
      "name": "Geonosis",
      "rotation_period": "30",
      "orbital_period": "256",
      "diameter": "11370",
      "climate": "temperate, arid",
      "gravity": "0.9 standard",
      "terrain": "rock, desert, mountain, barren",
      "surface_water": "5",
      "population": "100000000000",
      "residents": [
        "https://swapi.co/api/people/63/"
      ],
      "films": [
        "https://swapi.co/api/films/5/"
      ],
      "created": "2014-12-10T12:47:22.350000Z",
      "edited": "2014-12-20T20:58:18.437000Z",
      "url": "https://swapi.co/api/planets/11/"
    },
    {
      "name": "Utapau",
      "rotation_period": "27",
      "orbital_period": "351",
      "diameter": "12900",
      "climate": "temperate, arid, windy",
      "gravity": "1 standard",
      "terrain": "scrublands, savanna, canyons, sinkholes",
      "surface_water": "0.9",
      "population": "95000000",
      "residents": [
        "https://swapi.co/api/people/83/"
      ],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T12:49:01.491000Z",
      "edited": "2014-12-20T20:58:18.439000Z",
      "url": "https://swapi.co/api/planets/12/"
    },
    {
      "name": "Mustafar",
      "rotation_period": "36",
      "orbital_period": "412",
      "diameter": "4200",
      "climate": "hot",
      "gravity": "1 standard",
      "terrain": "volcanoes, lava rivers, mountains, caves",
      "surface_water": "0",
      "population": "20000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T12:50:16.526000Z",
      "edited": "2014-12-20T20:58:18.440000Z",
      "url": "https://swapi.co/api/planets/13/"
    },
    {
      "name": "Kashyyyk",
      "rotation_period": "26",
      "orbital_period": "381",
      "diameter": "12765",
      "climate": "tropical",
      "gravity": "1 standard",
      "terrain": "jungle, forests, lakes, rivers",
      "surface_water": "60",
      "population": "45000000",
      "residents": [
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/80/"
      ],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:32:00.124000Z",
      "edited": "2014-12-20T20:58:18.442000Z",
      "url": "https://swapi.co/api/planets/14/"
    },
    {
      "name": "Polis Massa",
      "rotation_period": "24",
      "orbital_period": "590",
      "diameter": "0",
      "climate": "artificial temperate ",
      "gravity": "0.56 standard",
      "terrain": "airless asteroid",
      "surface_water": "0",
      "population": "1000000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:33:46.405000Z",
      "edited": "2014-12-20T20:58:18.444000Z",
      "url": "https://swapi.co/api/planets/15/"
    },
    {
      "name": "Mygeeto",
      "rotation_period": "12",
      "orbital_period": "167",
      "diameter": "10088",
      "climate": "frigid",
      "gravity": "1 standard",
      "terrain": "glaciers, mountains, ice canyons",
      "surface_water": "unknown",
      "population": "19000000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:43:39.139000Z",
      "edited": "2014-12-20T20:58:18.446000Z",
      "url": "https://swapi.co/api/planets/16/"
    },
    {
      "name": "Felucia",
      "rotation_period": "34",
      "orbital_period": "231",
      "diameter": "9100",
      "climate": "hot, humid",
      "gravity": "0.75 standard",
      "terrain": "fungus forests",
      "surface_water": "unknown",
      "population": "8500000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:44:50.397000Z",
      "edited": "2014-12-20T20:58:18.447000Z",
      "url": "https://swapi.co/api/planets/17/"
    },
    {
      "name": "Cato Neimoidia",
      "rotation_period": "25",
      "orbital_period": "278",
      "diameter": "0",
      "climate": "temperate, moist",
      "gravity": "1 standard",
      "terrain": "mountains, fields, forests, rock arches",
      "surface_water": "unknown",
      "population": "10000000",
      "residents": [
        "https://swapi.co/api/people/33/"
      ],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:46:28.704000Z",
      "edited": "2014-12-20T20:58:18.449000Z",
      "url": "https://swapi.co/api/planets/18/"
    },
    {
      "name": "Saleucami",
      "rotation_period": "26",
      "orbital_period": "392",
      "diameter": "14920",
      "climate": "hot",
      "gravity": "unknown",
      "terrain": "caves, desert, mountains, volcanoes",
      "surface_water": "unknown",
      "population": "1400000000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:47:46.874000Z",
      "edited": "2014-12-20T20:58:18.450000Z",
      "url": "https://swapi.co/api/planets/19/"
    },
    {
      "name": "Stewjon",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "0",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grass",
      "surface_water": "unknown",
      "population": "unknown",
      "residents": [
        "https://swapi.co/api/people/10/"
      ],
      "films": [],
      "created": "2014-12-10T16:16:26.566000Z",
      "edited": "2014-12-20T20:58:18.452000Z",
      "url": "https://swapi.co/api/planets/20/"
    },
    {
      "name": "Eriadu",
      "rotation_period": "24",
      "orbital_period": "360",
      "diameter": "13490",
      "climate": "polluted",
      "gravity": "1 standard",
      "terrain": "cityscape",
      "surface_water": "unknown",
      "population": "22000000000",
      "residents": [
        "https://swapi.co/api/people/12/"
      ],
      "films": [],
      "created": "2014-12-10T16:26:54.384000Z",
      "edited": "2014-12-20T20:58:18.454000Z",
      "url": "https://swapi.co/api/planets/21/"
    },
    {
      "name": "Utapau",
      "rotation_period": "27",
      "orbital_period": "351",
      "diameter": "12900",
      "climate": "temperate, arid, windy",
      "gravity": "1 standard",
      "terrain": "scrublands, savanna, canyons, sinkholes",
      "surface_water": "0.9",
      "population": "95000000",
      "residents": [
        "https://swapi.co/api/people/83/"
      ],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T12:49:01.491000Z",
      "edited": "2014-12-20T20:58:18.439000Z",
      "url": "https://swapi.co/api/planets/12/"
    },
    {
      "name": "Mustafar",
      "rotation_period": "36",
      "orbital_period": "412",
      "diameter": "4200",
      "climate": "hot",
      "gravity": "1 standard",
      "terrain": "volcanoes, lava rivers, mountains, caves",
      "surface_water": "0",
      "population": "20000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T12:50:16.526000Z",
      "edited": "2014-12-20T20:58:18.440000Z",
      "url": "https://swapi.co/api/planets/13/"
    },
    {
      "name": "Kashyyyk",
      "rotation_period": "26",
      "orbital_period": "381",
      "diameter": "12765",
      "climate": "tropical",
      "gravity": "1 standard",
      "terrain": "jungle, forests, lakes, rivers",
      "surface_water": "60",
      "population": "45000000",
      "residents": [
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/80/"
      ],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:32:00.124000Z",
      "edited": "2014-12-20T20:58:18.442000Z",
      "url": "https://swapi.co/api/planets/14/"
    },
    {
      "name": "Polis Massa",
      "rotation_period": "24",
      "orbital_period": "590",
      "diameter": "0",
      "climate": "artificial temperate ",
      "gravity": "0.56 standard",
      "terrain": "airless asteroid",
      "surface_water": "0",
      "population": "1000000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:33:46.405000Z",
      "edited": "2014-12-20T20:58:18.444000Z",
      "url": "https://swapi.co/api/planets/15/"
    },
    {
      "name": "Mygeeto",
      "rotation_period": "12",
      "orbital_period": "167",
      "diameter": "10088",
      "climate": "frigid",
      "gravity": "1 standard",
      "terrain": "glaciers, mountains, ice canyons",
      "surface_water": "unknown",
      "population": "19000000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:43:39.139000Z",
      "edited": "2014-12-20T20:58:18.446000Z",
      "url": "https://swapi.co/api/planets/16/"
    },
    {
      "name": "Felucia",
      "rotation_period": "34",
      "orbital_period": "231",
      "diameter": "9100",
      "climate": "hot, humid",
      "gravity": "0.75 standard",
      "terrain": "fungus forests",
      "surface_water": "unknown",
      "population": "8500000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:44:50.397000Z",
      "edited": "2014-12-20T20:58:18.447000Z",
      "url": "https://swapi.co/api/planets/17/"
    },
    {
      "name": "Cato Neimoidia",
      "rotation_period": "25",
      "orbital_period": "278",
      "diameter": "0",
      "climate": "temperate, moist",
      "gravity": "1 standard",
      "terrain": "mountains, fields, forests, rock arches",
      "surface_water": "unknown",
      "population": "10000000",
      "residents": [
        "https://swapi.co/api/people/33/"
      ],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:46:28.704000Z",
      "edited": "2014-12-20T20:58:18.449000Z",
      "url": "https://swapi.co/api/planets/18/"
    },
    {
      "name": "Saleucami",
      "rotation_period": "26",
      "orbital_period": "392",
      "diameter": "14920",
      "climate": "hot",
      "gravity": "unknown",
      "terrain": "caves, desert, mountains, volcanoes",
      "surface_water": "unknown",
      "population": "1400000000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:47:46.874000Z",
      "edited": "2014-12-20T20:58:18.450000Z",
      "url": "https://swapi.co/api/planets/19/"
    },
    {
      "name": "Stewjon",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "0",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grass",
      "surface_water": "unknown",
      "population": "unknown",
      "residents": [
        "https://swapi.co/api/people/10/"
      ],
      "films": [],
      "created": "2014-12-10T16:16:26.566000Z",
      "edited": "2014-12-20T20:58:18.452000Z",
      "url": "https://swapi.co/api/planets/20/"
    },
    {
      "name": "Eriadu",
      "rotation_period": "24",
      "orbital_period": "360",
      "diameter": "13490",
      "climate": "polluted",
      "gravity": "1 standard",
      "terrain": "cityscape",
      "surface_water": "unknown",
      "population": "22000000000",
      "residents": [
        "https://swapi.co/api/people/12/"
      ],
      "films": [],
      "created": "2014-12-10T16:26:54.384000Z",
      "edited": "2014-12-20T20:58:18.454000Z",
      "url": "https://swapi.co/api/planets/21/"
    },
    {
      "name": "Utapau",
      "rotation_period": "27",
      "orbital_period": "351",
      "diameter": "12900",
      "climate": "temperate, arid, windy",
      "gravity": "1 standard",
      "terrain": "scrublands, savanna, canyons, sinkholes",
      "surface_water": "0.9",
      "population": "95000000",
      "residents": [
        "https://swapi.co/api/people/83/"
      ],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T12:49:01.491000Z",
      "edited": "2014-12-20T20:58:18.439000Z",
      "url": "https://swapi.co/api/planets/12/"
    },
    {
      "name": "Mustafar",
      "rotation_period": "36",
      "orbital_period": "412",
      "diameter": "4200",
      "climate": "hot",
      "gravity": "1 standard",
      "terrain": "volcanoes, lava rivers, mountains, caves",
      "surface_water": "0",
      "population": "20000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T12:50:16.526000Z",
      "edited": "2014-12-20T20:58:18.440000Z",
      "url": "https://swapi.co/api/planets/13/"
    },
    {
      "name": "Kashyyyk",
      "rotation_period": "26",
      "orbital_period": "381",
      "diameter": "12765",
      "climate": "tropical",
      "gravity": "1 standard",
      "terrain": "jungle, forests, lakes, rivers",
      "surface_water": "60",
      "population": "45000000",
      "residents": [
        "https://swapi.co/api/people/13/",
        "https://swapi.co/api/people/80/"
      ],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:32:00.124000Z",
      "edited": "2014-12-20T20:58:18.442000Z",
      "url": "https://swapi.co/api/planets/14/"
    },
    {
      "name": "Polis Massa",
      "rotation_period": "24",
      "orbital_period": "590",
      "diameter": "0",
      "climate": "artificial temperate ",
      "gravity": "0.56 standard",
      "terrain": "airless asteroid",
      "surface_water": "0",
      "population": "1000000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:33:46.405000Z",
      "edited": "2014-12-20T20:58:18.444000Z",
      "url": "https://swapi.co/api/planets/15/"
    },
    {
      "name": "Mygeeto",
      "rotation_period": "12",
      "orbital_period": "167",
      "diameter": "10088",
      "climate": "frigid",
      "gravity": "1 standard",
      "terrain": "glaciers, mountains, ice canyons",
      "surface_water": "unknown",
      "population": "19000000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:43:39.139000Z",
      "edited": "2014-12-20T20:58:18.446000Z",
      "url": "https://swapi.co/api/planets/16/"
    },
    {
      "name": "Felucia",
      "rotation_period": "34",
      "orbital_period": "231",
      "diameter": "9100",
      "climate": "hot, humid",
      "gravity": "0.75 standard",
      "terrain": "fungus forests",
      "surface_water": "unknown",
      "population": "8500000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:44:50.397000Z",
      "edited": "2014-12-20T20:58:18.447000Z",
      "url": "https://swapi.co/api/planets/17/"
    },
    {
      "name": "Cato Neimoidia",
      "rotation_period": "25",
      "orbital_period": "278",
      "diameter": "0",
      "climate": "temperate, moist",
      "gravity": "1 standard",
      "terrain": "mountains, fields, forests, rock arches",
      "surface_water": "unknown",
      "population": "10000000",
      "residents": [
        "https://swapi.co/api/people/33/"
      ],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:46:28.704000Z",
      "edited": "2014-12-20T20:58:18.449000Z",
      "url": "https://swapi.co/api/planets/18/"
    },
    {
      "name": "Saleucami",
      "rotation_period": "26",
      "orbital_period": "392",
      "diameter": "14920",
      "climate": "hot",
      "gravity": "unknown",
      "terrain": "caves, desert, mountains, volcanoes",
      "surface_water": "unknown",
      "population": "1400000000",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/6/"
      ],
      "created": "2014-12-10T13:47:46.874000Z",
      "edited": "2014-12-20T20:58:18.450000Z",
      "url": "https://swapi.co/api/planets/19/"
    },
    {
      "name": "Stewjon",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "0",
      "climate": "temperate",
      "gravity": "1 standard",
      "terrain": "grass",
      "surface_water": "unknown",
      "population": "unknown",
      "residents": [
        "https://swapi.co/api/people/10/"
      ],
      "films": [],
      "created": "2014-12-10T16:16:26.566000Z",
      "edited": "2014-12-20T20:58:18.452000Z",
      "url": "https://swapi.co/api/planets/20/"
    },
    {
      "name": "Eriadu",
      "rotation_period": "24",
      "orbital_period": "360",
      "diameter": "13490",
      "climate": "polluted",
      "gravity": "1 standard",
      "terrain": "cityscape",
      "surface_water": "unknown",
      "population": "22000000000",
      "residents": [
        "https://swapi.co/api/people/12/"
      ],
      "films": [],
      "created": "2014-12-10T16:26:54.384000Z",
      "edited": "2014-12-20T20:58:18.454000Z",
      "url": "https://swapi.co/api/planets/21/"
    },
    {
      "name": "Serenno",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "unknown",
      "climate": "unknown",
      "gravity": "unknown",
      "terrain": "rainforests, rivers, mountains",
      "surface_water": "unknown",
      "population": "unknown",
      "residents": [
        "https://swapi.co/api/people/67/"
      ],
      "films": [],
      "created": "2014-12-20T16:52:13.357000Z",
      "edited": "2014-12-20T20:58:18.510000Z",
      "url": "https://swapi.co/api/planets/52/"
    },
    {
      "name": "Concord Dawn",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "unknown",
      "climate": "unknown",
      "gravity": "unknown",
      "terrain": "jungles, forests, deserts",
      "surface_water": "unknown",
      "population": "unknown",
      "residents": [
        "https://swapi.co/api/people/69/"
      ],
      "films": [],
      "created": "2014-12-20T16:54:39.909000Z",
      "edited": "2014-12-20T20:58:18.512000Z",
      "url": "https://swapi.co/api/planets/53/"
    },
    {
      "name": "Zolan",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "unknown",
      "climate": "unknown",
      "gravity": "unknown",
      "terrain": "unknown",
      "surface_water": "unknown",
      "population": "unknown",
      "residents": [
        "https://swapi.co/api/people/70/"
      ],
      "films": [],
      "created": "2014-12-20T16:56:37.250000Z",
      "edited": "2014-12-20T20:58:18.514000Z",
      "url": "https://swapi.co/api/planets/54/"
    },
    {
      "name": "Ojom",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "unknown",
      "climate": "frigid",
      "gravity": "unknown",
      "terrain": "oceans, glaciers",
      "surface_water": "100",
      "population": "500000000",
      "residents": [
        "https://swapi.co/api/people/71/"
      ],
      "films": [],
      "created": "2014-12-20T17:27:41.286000Z",
      "edited": "2014-12-20T20:58:18.516000Z",
      "url": "https://swapi.co/api/planets/55/"
    },
    {
      "name": "Skako",
      "rotation_period": "27",
      "orbital_period": "384",
      "diameter": "unknown",
      "climate": "temperate",
      "gravity": "1",
      "terrain": "urban, vines",
      "surface_water": "unknown",
      "population": "500000000000",
      "residents": [
        "https://swapi.co/api/people/76/"
      ],
      "films": [],
      "created": "2014-12-20T17:50:47.864000Z",
      "edited": "2014-12-20T20:58:18.517000Z",
      "url": "https://swapi.co/api/planets/56/"
    },
    {
      "name": "Muunilinst",
      "rotation_period": "28",
      "orbital_period": "412",
      "diameter": "13800",
      "climate": "temperate",
      "gravity": "1",
      "terrain": "plains, forests, hills, mountains",
      "surface_water": "25",
      "population": "5000000000",
      "residents": [
        "https://swapi.co/api/people/77/"
      ],
      "films": [],
      "created": "2014-12-20T17:57:47.420000Z",
      "edited": "2014-12-20T20:58:18.519000Z",
      "url": "https://swapi.co/api/planets/57/"
    },
    {
      "name": "Shili",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "unknown",
      "climate": "temperate",
      "gravity": "1",
      "terrain": "cities, savannahs, seas, plains",
      "surface_water": "unknown",
      "population": "unknown",
      "residents": [
        "https://swapi.co/api/people/78/"
      ],
      "films": [],
      "created": "2014-12-20T18:43:14.049000Z",
      "edited": "2014-12-20T20:58:18.521000Z",
      "url": "https://swapi.co/api/planets/58/"
    },
    {
      "name": "Kalee",
      "rotation_period": "23",
      "orbital_period": "378",
      "diameter": "13850",
      "climate": "arid, temperate, tropical",
      "gravity": "1",
      "terrain": "rainforests, cliffs, canyons, seas",
      "surface_water": "unknown",
      "population": "4000000000",
      "residents": [
        "https://swapi.co/api/people/79/"
      ],
      "films": [],
      "created": "2014-12-20T19:43:51.278000Z",
      "edited": "2014-12-20T20:58:18.523000Z",
      "url": "https://swapi.co/api/planets/59/"
    },
    {
      "name": "Umbara",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "unknown",
      "climate": "unknown",
      "gravity": "unknown",
      "terrain": "unknown",
      "surface_water": "unknown",
      "population": "unknown",
      "residents": [
        "https://swapi.co/api/people/82/"
      ],
      "films": [],
      "created": "2014-12-20T20:18:36.256000Z",
      "edited": "2014-12-20T20:58:18.525000Z",
      "url": "https://swapi.co/api/planets/60/"
    },
    {
      "name": "Tatooine",
      "rotation_period": "23",
      "orbital_period": "304",
      "diameter": "10465",
      "climate": "arid",
      "gravity": "1 standard",
      "terrain": "desert",
      "surface_water": "1",
      "population": "200000",
      "residents": [
        "https://swapi.co/api/people/1/",
        "https://swapi.co/api/people/2/",
        "https://swapi.co/api/people/4/",
        "https://swapi.co/api/people/6/",
        "https://swapi.co/api/people/7/",
        "https://swapi.co/api/people/8/",
        "https://swapi.co/api/people/9/",
        "https://swapi.co/api/people/11/",
        "https://swapi.co/api/people/43/",
        "https://swapi.co/api/people/62/"
      ],
      "films": [
        "https://swapi.co/api/films/5/",
        "https://swapi.co/api/films/4/",
        "https://swapi.co/api/films/6/",
        "https://swapi.co/api/films/3/",
        "https://swapi.co/api/films/1/"
      ],
      "created": "2014-12-09T13:50:49.641000Z",
      "edited": "2014-12-21T20:48:04.175778Z",
      "url": "https://swapi.co/api/planets/1/"
    },
    {
      "name": "Jakku",
      "rotation_period": "unknown",
      "orbital_period": "unknown",
      "diameter": "unknown",
      "climate": "unknown",
      "gravity": "unknown",
      "terrain": "deserts",
      "surface_water": "unknown",
      "population": "unknown",
      "residents": [],
      "films": [
        "https://swapi.co/api/films/7/"
      ],
      "created": "2015-04-17T06:55:57.556495Z",
      "edited": "2015-04-17T06:55:57.556551Z",
      "url": "https://swapi.co/api/planets/61/"
    }
  ]
}