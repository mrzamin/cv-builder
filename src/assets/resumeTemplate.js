import { v4 as uuidv4 } from "uuid";

export let resumeTemplate = [
  //Contact Info placeholder:
  {
    name: "Benjamin Franklin",
    email: "benjaminfranklin@ff.com",
    website: "benjaminfranklin.com",
    location: "Philadelphia",
  },

  // Education placeholder:
  [
    {
      id: uuidv4(),
      degree: "Voracious Reading",
      school: "Boston Latin School",
      graduationDate: "1716-10",

      details:
        "Until the age of 10, I attended Boston Latin School but did not graduate. I continued my education through voracious reading.",
    },
    {
      id: uuidv4(),
      degree: "Newspaper Apprenticeship",
      school: "Printing Trade",
      graduationDate: "1720-10",
      details:
        "I worked for my father until the age of 12, then I started an apprenticeship under my brother, James, in the printing trade. ",
    },
  ],

  //Work Experience placeholder:
  [
    {
      title: "Assistant Candlemaker",
      employer: "Candle-Making Business",
      responsibilities:
        "My first job as a boy was as a candlemaker for my dad's candle-making business, a job that bored me.",
      start: "1718-05",
      end: "1718-12",
    },
    {
      title: "Inventor",
      employer: "Self-Employed",
      responsibilities:
        "My work as an inventor rested mainly in electrical theory, a passion exemplified by my famous kite experiment.",
      start: "1729-09",
      end: "1742-03",
    },
    {
      title: "Writer",
      employer: "Self-Employed",
      responsibilities: `Throughout my adult life I was busy writing letters, pamphlets, and other literature, some of the most notable being "Silence Dogood" and "Poor Richard's Almanac."`,
      start: "1730-08",
      end: "1790-01",
    },
  ],

  //Skills placeholder:
  [
    { name: "Writing", id: uuidv4() },
    { name: "Editing", id: uuidv4() },
    { name: "Printing", id: uuidv4() },
    { name: "Diplomacy", id: uuidv4() },
    { name: "Public Service", id: uuidv4() },
    { name: "Business", id: uuidv4() },
    { name: "Statesmanship", id: uuidv4() },
    { name: "Science", id: uuidv4() },
    { name: "Innovation", id: uuidv4() },
    { name: "Management", id: uuidv4() },
  ],
];
