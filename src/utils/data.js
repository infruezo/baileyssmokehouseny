import { normalDate } from "./dateUtils";

// smokehouse gallery images
import SmokehouseGallery1 from "../images/smokehouse/gallery/image-1.jpg";
import SmokehouseGallery2 from "../images/smokehouse/gallery/image-2.jpg";
import SmokehouseGallery3 from "../images/smokehouse/gallery/image-3.jpg";
import SmokehouseGallery4 from "../images/smokehouse/gallery/image-4.jpg";
import SmokehouseGallery5 from "../images/smokehouse/gallery/image-5.jpg";
import SmokehouseGallery6 from "../images/smokehouse/gallery/image-6.jpg";
import SmokehouseGallery7 from "../images/smokehouse/gallery/image-7.jpg";
import SmokehouseGallery8 from "../images/smokehouse/gallery/image-8.jpg";
import SmokehouseGallery9 from "../images/smokehouse/gallery/image-9.jpg";
import SmokehouseGallery10 from "../images/smokehouse/gallery/image-10.jpg";
import SmokehouseGallery11 from "../images/smokehouse/gallery/image-11.jpg";
import SmokehouseGallery12 from "../images/smokehouse/gallery/image-12.jpg";
import SmokehouseGallery13 from "../images/smokehouse/gallery/image-13.jpg";
import SmokehouseGallery14 from "../images/smokehouse/gallery/image-14.jpg";
import SmokehouseGallery15 from "../images/smokehouse/gallery/image-15.jpg";
import SmokehouseGallery16 from "../images/smokehouse/gallery/image-16.jpg";
import SmokehouseGallery17 from "../images/smokehouse/gallery/image-17.jpg";
import SmokehouseGallery18 from "../images/smokehouse/gallery/image-18.jpg";
import SmokehouseGallery19 from "../images/smokehouse/gallery/image-19.jpg";
import SmokehouseGallery20 from "../images/smokehouse/gallery/image-20.jpg";
import SmokehouseGallery21 from "../images/smokehouse/gallery/image-21.jpg";
import SmokehouseGallery22 from "../images/smokehouse/gallery/image-22.jpg";
import SmokehouseGallery23 from "../images/smokehouse/gallery/image-23.jpg";
import SmokehouseGallery24 from "../images/smokehouse/gallery/image-24.jpg";
import SmokehouseGallery25 from "../images/smokehouse/gallery/image-25.jpg";
import SmokehouseGallery26 from "../images/smokehouse/gallery/image-26.jpg";
import SmokehouseGallery27 from "../images/smokehouse/gallery/image-27.jpg";
import SmokehouseGallery28 from "../images/smokehouse/gallery/image-28.jpg";
import SmokehouseGallery29 from "../images/smokehouse/gallery/image-29.jpg";
import SmokehouseGallery30 from "../images/smokehouse/gallery/image-30.jpg";

// smokehouse menus import
import TakeoutMenu1 from "../images/smokehouse/menus/takeout-menu-1.jpg";
import TakeoutMenu2 from "../images/smokehouse/menus/takeout-menu-2.jpg";
import TakeoutMenu3 from "../images/smokehouse/menus/takeout-menu-3.jpg";
import TakeoutMenu4 from "../images/smokehouse/menus/takeout-menu-4.jpg";
import PartyMenu1 from "../images/smokehouse/menus/party-menu-1.jpg";
import OffsitePartyMenu1 from "../images/smokehouse/menus/offsite-party-menu-1.jpeg";
import CateringMenu1 from "../images/smokehouse/menus/catering-menu-1.jpg";

export const EateryTestimonials = [
  {
    testimonial:
      "Love Bailey’s- our go – to place on a weekly basis – delicious barbecue, attentive staff and service, great atmosphere!! Had the downstairs room for my birthday and it was a fantastic party – everyone loved it – keep up the great work!!! Also love the Bailey’s catered food at the many K of C parties and events!!",

    author: "Eileen Corry Griffith",
  },
  {
    testimonial:
      "HANDS DOWN THE BEST!!! I had baileys cater my wedding yesterday and I absolutely couldn’t be any happier. Paul took such great care of us through the first day we came to him all the way to the very last minute of our weddding day. he treated us like family and was so professional and so well experienced. he took time out of his busy work day to come help set up the day before, along with handling and solving all my wedding issues. EVERY SINGLE PERSON SAID HOW GREAT THE FOOD WAS",

    author: "Jessie Mikel Jaymes",
  },
  {
    testimonial:
      "Yummy dinner for hungry fam… Mac n cheese, baby back ribs; pulled short ribs, smoked sausage, pulled pork, with sides of corn souffle and smoked beans.",
    author: "Regina Marie Aragon Espino",
  },
  {
    testimonial:
      "I had been to Bailey’s several years ago, and the one thing I remembered was that the food was great. I brought my boyfriend here last night, for the first time, and let’s just say, he was not disappointed. We started with the MAC and cheese, pulled pork egg rolls, as an appetizer- . The spare ribs were by far the best ribs I’ve ever had. Pulled pork sandwich was great, my only suggestion would be putting it on a softer roll. Nonetheless, it was still very tasty. Our waitress was excellent- friendly, attentive and had great recommendations. All in all, if you want some good BBQ, go to Baileys!",
    author: "Maria von Heine-Geldern",
  },
  {
    testimonial:
      "I brought my wife kids and mother here for dinner, It was Saturday night and the place was packed. They got us in relatively quick and the food was phenomenal. Look forward to going back. Having one of my children’s birthday parties in August at our house and going to get it catered by Bailey’s.",
    author: "Peter Clemente",
  },
];

//********************************************************************************************************** */
// SMOKEHOUSE DATA
//********************************************************************************************************** */
//days 0-6, starting sunday
export const SmokehouseEvents = [
  {
    id: "Saturday-Night-Magic-Featuring-JP-Laramee-2022",
    image: "/events/JP_Laramee.jpg",
    title: "Saturday Night Magic featuring JP Laramee",
    category: "Entertainment",
    text: "",
    startDate: normalDate(2022, 1, 1),
    endDate: normalDate(2022, 12, 31),
    days: [6],
  },
  {
    id: "Dead-Mile-Dance-2022-09-30",
    image: "/events/Dead_Mile_Dance.jpeg",
    title: "Dead Mile Dance",
    category: "Live Music",
    text: "",
    startDate: normalDate(2022, 9, 30),
    endDate: normalDate(2022, 9, 30),
    days: [5],
  },
  {
    id: "Kickin-Nash-2022-10-01",
    image: "/events/Kickin_Nash.jpeg",
    title: "Kickin Nash",
    category: "Live Music",
    text: "",
    startDate: normalDate(2022, 10, 1),
    endDate: normalDate(2022, 10, 1),
    days: [6],
  },
  {
    id: "Oktoberfest-2022",
    image: "/events/Oktoberfest.jpeg",
    title: "Oktoberfest",
    category: "Entertainment",
    text: "",
    startDate: normalDate(2022, 9, 29),
    endDate: normalDate(2022, 10, 2),
    days: [0, 4, 5, 6],
  },
];

export const SmokehouseMenutabs = [
  {
    id: 1,
    tabTitle: "TAKEOUT/MAIN RESTAURANT",
    title: "",
    content: [
      {
        original: TakeoutMenu1,
      },
      {
        original: TakeoutMenu2,
      },
      {
        original: TakeoutMenu3,
      },
      {
        original: TakeoutMenu4,
      },
    ],
  },
  {
    id: 2,
    tabTitle: "PARTY",
    title: "",
    content: { original: PartyMenu1 },
  },
  {
    id: 3,
    tabTitle: "OFF-SITE PARTY",
    title: "",
    content: { original: OffsitePartyMenu1 },
  },
  {
    id: 4,
    tabTitle: "CATERING",
    title: "",
    content: { original: CateringMenu1 },
  },
];

export const SmokehouseCateringMenus = [
  {
    id: 1,
    tabTitle: "OFF-SITE PARTY",
    title: "",
    content: { original: OffsitePartyMenu1 },
  },
  {
    id: 2,
    tabTitle: "CATERING",
    title: "",
    content: { original: CateringMenu1 },
  },
];

export const SmokehouseTakeoutMenu = [
  {
    original: TakeoutMenu1,
  },
  {
    original: TakeoutMenu2,
  },
  {
    original: TakeoutMenu3,
  },
  {
    original: TakeoutMenu4,
  },
];

export const SmokehouseEateryCateringTakeout = [
  {
    id: 1,
    tabTitle: "TAKEOUT",
    title: "",
    content: [
      {
        original: TakeoutMenu1,
      },
      {
        original: TakeoutMenu2,
      },
      {
        original: TakeoutMenu3,
      },
      {
        original: TakeoutMenu4,
      },
    ],
  },
  {
    id: 2,
    tabTitle: "OFF-SITE PARTY",
    title: "",
    content: { original: OffsitePartyMenu1 },
  },
  {
    id: 3,
    tabTitle: "CATERING",
    title: "",
    content: { original: CateringMenu1 },
  },
];

// smokehouse gallery array
export const smokehousePhotos = [
  SmokehouseGallery1,
  SmokehouseGallery2,
  SmokehouseGallery3,
  SmokehouseGallery4,
  SmokehouseGallery5,
  SmokehouseGallery6,
  SmokehouseGallery7,
  SmokehouseGallery8,
  SmokehouseGallery9,
  SmokehouseGallery10,
  SmokehouseGallery11,
  SmokehouseGallery12,
  SmokehouseGallery13,
  SmokehouseGallery14,
  SmokehouseGallery15,
  SmokehouseGallery16,
  SmokehouseGallery17,
  SmokehouseGallery18,
  SmokehouseGallery19,
  SmokehouseGallery20,
  SmokehouseGallery21,
  SmokehouseGallery22,
  SmokehouseGallery23,
  SmokehouseGallery24,
  SmokehouseGallery25,
  SmokehouseGallery26,
  SmokehouseGallery27,
  SmokehouseGallery28,
  SmokehouseGallery29,
  SmokehouseGallery30,
];
