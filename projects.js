/*
  PROJECTS
  ========
  Every project is one row on the homepage, in the order listed here.

  To add a project, copy one block { ... }, paste it where you want the row,
  and fill it in:

    title:  shown above the row and at the top of the yellow caption box
    text:   the caption, shown under the title when the title is clicked.
            It runs as one long line: line breaks typed here are ignored.
            For a break, write <br> (or <br><br> for a gap).
            Links can be written as <a href="https://...">text</a>
    images: file names inside the images folder, left to right (1 to 10).
            To put a web link in a thin box instead of an image, write
            { link: "https://...", text: "what to show" } in its place, e.g.
            images: ["found-1.jpg", { link: "https://vimeo.com/1080774194", text: "vimeo.com/1080774194" }, "found-2.jpg"],
            (leave out text: to show the full address)
            To show one image smaller, write { src: "file.jpg", size: 60 } in its
            place, where size is the percentage of its normal size, e.g.
            images: ["found-1.jpg", { src: "found-2.jpg", size: 60 }, "found-3.jpg"],

  To hide a project without deleting it, add  hidden: true,  inside its
  block, e.g.
    {
      hidden: true,
      title: "NYABF",
      ...
    },
  Remove that line (or change it to false) to show it again.

  To stop a project's images from enlarging when clicked, add
  enlarge: false,  inside its block (next to title:, like hidden: above).
  For just one image, write { src: "file.jpg", enlarge: false } in its place
  (this can be combined with size:, e.g. { src: "file.jpg", size: 60, enlarge: false }).

  Remember the comma after each closing }.
*/

const projects = [
  {
    title: "On Kawara: Pure Consciousness for Sonsbeek Art Projects",
    text: `Pure Consciousness is an ongoing project by the late conceptual artist On Kawara. Each year, 7 of Kawara’s Date Paintings are hung in a primary school for 1–2 months. As no one outside the chosen classroom can see the paintings in person, a small booklet is commissioned by his estate each year to document the event.
    A special presentation of the 31st edition of Pure Consciousness was featured in the 2026 Sonsbeek art festival. 

<br><br>Booklet and exhibition design Inez de Rijke. Documentation Marijon Gemmeke. Booklet printed by Raddraaier SSP, exhibition prints by Riwi Collotype. Exhibition furniture by Jelle van den Brink and Inez de Rijke.`,

    images: ["sonsbeek-1.jpg", "sonsbeek-2.jpg", "sonsbeek-3.jpg", "sonsbeek-4.jpg", { src: "sonsbeek-5.jpg", size: 90 }, "sonsbeek-6.jpg", "sonsbeek-7.jpg", "sonsbeek-8.jpg", "sonsbeek-9.jpg"],
  },
  {
    title: "Windowpane",
    text: `Identity and curation of Windowpane, a small gallery, and publisher of artistic and literary postcard editions. More information about Windowpane can be found at <a href="https://www.windowpane.eu">www.windowpane.eu</a>. Images 3 and 10 by Josh Croll.`,
    images: [{ link: "https://www.windowpane.eu", text: "www.windowpane.eu" }, "windowpane-1.jpg", "windowpane-2.jpg", "windowpane-3.jpg", "windowpane-4.jpg", "windowpane-5.jpg", "windowpane-6.jpg", "windowpane-7.jpg", "windowpane-8.jpg", "windowpane-9.jpg", "windowpane-10.jpg", "windowpane-11.jpg", "windowpane-12.jpg",],
  },
  {
    title: "Bookmark Book",
    text: `In The Carrier Bag Theory of Fiction, K. Le Guin proposes that authors should seek collective histories (gatherers) over solo-heroes (hunters). Bookmark Book explores this theory through physical form by inviting you tear out each page as you finish reading it. The pages and their teaching can be endlessly and randomly shared via dissemination into new books as bookmarks. Documentation Josh Croll. Printed by no-kiss, Amsterdam, 2025.`,
    images: [{ src: "bookmark-1.jpg", size: 90 }, "bookmark-2.jpg", "bookmark-3.jpg"],
  },
  {
   enlarge: false,
    title: "Forefront",
    text: `Identity for Forefront, an arts organisation operating in vacant shop spaces.`,
    images: ["Forefront-1.png", "forefront-2.jpg", "forefront-3.jpg", { link: "https://www.forefront.place", text: "www.forefront.place" }, { src: "forefront-4.gif", size: 80 }, { src: "forefront-5.jpg", size: 80 }, "forefront-6.jpeg", { src:  "forefront-7.jpg", size: 90 }, { src: "forefront-9.jpg", size: 90 }],
  },
  {
    title: "A Box, Some Boxes",
    text: `An exhibition by Inez de Rijke. 29th May–5th May 2026. The BOX, Werkplaats Typografie, Tweede Leeghwaterstraat 5b, 1018 RA, Amsterdam NL.`,
    images: ["box-1.jpg", "box-2.jpg", "box-3.jpg", "box-4.jpg", "box-5.jpg", "box-6.jpg", "box-7.jpg"],
  },
  {
    enlarge: false,
    title: "Angel Bureau",
    text: `2026`,
    images: ["angels-1.jpg"],
  },
  {
    enlarge: false,
    title: "Visit Arnhem, LA Art Book Fair, with Augustinas Milkus",
    text: `An advertising campaign project for the students of Werkplaats Typografie about Arnhem, the Dutch city where the school is based. First exhibited during Printed Matter's LA Art Book Fair.`,
    images: ["laabf-1.gif", "laabf-1.jpg", "laabf-2.jpg", "laabf-3.jpg", "laabf-4.jpg", "laabf-5.jpg", "laabf-6.jpg", "laabf-7.jpg", "laabf-8.jpg"],
  },
  {
    title: "Ilana Blumberg",
    text: `Collection photography + invite design for London-based knitwear designer Ilana Blumberg.`,
    images: ["ilana-1.jpg", "ilana-2.jpg", "ilana-3.jpg", "ilana-4.jpg", "ilana-5.jpg"],
  },
    {
    enlarge: false,
    title: "My Critical Friend",
    text: `2026`,
    images: ["criticalfriend-1.jpg",],
  },
  {
    enlarge: false,
    title: "May I request the pleasure of your company, New York Art Book Fair",
    text: `A4 Paper areoplane invitation, 2026. Contribution to the Werkplaats Typografie project by Jana Sofie Liebe and Johanna Gratzer for Printed Matter.`,
    images: [{src: "nyabf-1.jpg", size:90 }, {src: "nyabf-2.jpg", size:90 }, "nyabf-2.gif",],
  },
      {
    title: "Meat Love",
    text: `Layout and type design for 'Meat Love', 2023, an edition of the DISCOURSE publishing series by MACK Publishers.`,
    images: ["meatlove-1.jpg", "meatlove-2.jpg", "meatlove-3.jpg", "meatlove-4.jpg", "meatlove-5.jpg", "meatlove-6.jpg"],
  },
  {
    title: "Fré Cohen Plaque",
    text: `An enamel street plaque to commemorate Fré Cohen, a pioneering 20th-century Dutch graphic designer, whom lived and worked at this address. Printed by Wlilems Classics BV, 2026.`,
    images: ["plaque-1.jpg", "plaque-2.jpg", "plaque-3.jpg"],
  },

  {
    title: "Tanko",
    text: `Label concept and logo for Amsterdam-based knitwear brand, made in 2025. Rather than requiring any sewn-in textile, each garment is embedded with a row of black and white perpendicular stripes. The print logo shares the same visual signature. Image campaign shot by Josh Croll.`,
    images: [{src: "tanko-1.jpg", size:90 }, "tanko-2.jpg", "tanko-3.jpg", "tanko-4.jpg"],
  },
  {
    hidden: true,
    title: "Collages",
    text: ``,
    images: ["collage-1.jpg", "collage-2.jpg", "collage-3.jpg"],
  },
  {
    hidden: true,
    title: "TRIPHON",
    text: `Photographer's book, focusing on the theme of loneliness. Gate folds are used to reveal and chart the development of an intimate friendship, and separate the two image formats (med. format and snapshot). Printed by Pantheon Drukkers in 2025.`,
    images: ["triphon-1.jpg", "triphon-2.jpg", "triphon-3.jpg", "triphon-4.jpg", "triphon-5.jpg", "triphon-6.jpg"],
  },
  {
    title: "Found, Acquired",
    text: `The 'Birdman' is a Taíno sculpture of a Zemí (deity or ancestral spirit), made in Jamaica between c.1029—1156. It is one of very few surviving Taíno objects from this period. This is a film about the bird, premiered at Eye Film Museum in Amsterdam, 2025, as part of the group show 'Take a deep breath: It is what it is while it is, smile.'`,
images: [{ link: "https://vimeo.com/1080774194", text: "vimeo.com/1080774194" }, "found-1.jpg", "found-2.jpg", "found-3.jpg", "found-4.jpg", "found-5.jpg"],
     },
       {
    title: "Answerable, with Luca Hallam",
    text: `2026`,
    images: ["Answerable-1.jpg"],
  },
  {
    title: "The Soirée Network",
    text: `2025`,
    images: ["soiree.jpg",],
  },
  {
    title: "Misc",
    text: ``,
    images: ["misc-1.jpg", "collage-1.jpg", "misc-2.jpg", "misc-3.jpg", "collage-2.jpg", "misc-4.jpg", "misc-5.jpg", "collage-3.jpg", "misc-6.jpg", "misc-7.jpg", "misc-8.jpg", "misc-9.jpg"],
  },
];
