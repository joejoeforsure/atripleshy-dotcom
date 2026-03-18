// All published at-bats, in reverse chronological order (newest first).
// Add a new entry here each time you publish a new at-bat.

export type Hit = {
  title: string;
  excerpt: string;
  image?: string;
};

export type AtBat = {
  number: number;
  name: string;
  description: string;
  date: string;
  single: Hit;
  double: Hit;
  homerun: Hit & { mediaType: "Song" | "Video" };
};

export const pastAtBats: AtBat[] = [
  {
    number: 1,
    name: "The Great Hate of Florida",
    description:
      "How a culture of \"me first\" and a flood of retiring boomers aren't saving the Sunshine State — they're hollowing it out.",
    date: "March 2026",
    single: {
      title: "You Didn't Move Here to Be a Neighbor",
      excerpt:
        "Florida didn't go wrong because of hurricanes or heat. It went wrong because too many people arrived wanting the benefits of a place without any obligation to it.",
    },
    double: {
      title: "The View from the Gate",
      excerpt:
        "A gated community in Sarasota County, photographed from the public road they fought to have narrowed.",
    },
    homerun: {
      title: "Sunshine State of Mind",
      excerpt: "A song about arriving somewhere beautiful and making it a little worse.",
      mediaType: "Song",
    },
  },
];

export function getAtBat(id: number): AtBat | undefined {
  return pastAtBats.find((ab) => ab.number === id);
}
