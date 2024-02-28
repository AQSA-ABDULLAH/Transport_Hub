// This is just a data file to map over not a component to render.
export const data = [
  {
    img: "./assets/image/membership/image1.png",
    heading: "bootcamp programme",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sapiente.",
    pricing: false,
    prices: [
      { duration: "Monthly", price: "45" },
      { duration: "Yearly", price: "432" },
    ],
  },
  {
    img: "./assets/image/membership/image2.png",
    heading: "personal training",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero doloremque ipsam repellendus id officiis rem..",
    pricing: true,
    prices: [
      {
        duration: "4 weeks personal training program",
        price: "216",
      },
      {
        duration: "6 weeks personal training program",
        price: "286",
      },
      {
        duration: "8 weeks personal training program",
        price: "360",
      },
    ],
  },
  {
    img: "./assets/image/membership/image3.png",
    heading: "one off personal training",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium incidunt rem assumenda ratione! Adipisci doloremque enim nobis",
    pricing: true,
    prices: [{ duration: "1 day session", price: "25" }],
  },
];
