const pizzas = new Array(9).fill(1).map((item, index) => {
  return {
    id: index,
    name: `Pepperoni love ${index + 1}`,
    image: "/images/pizza.png",
    ingredients: "Pepperoni, Mozzarella, Tomato sauce",
    price: `1.0${index}`,
    unit: "slice",
  };
});

const burgers = new Array(9).fill(1).map((item, index) => {
  return {
    id: index,
    name: `Bacon jammer ${index + 1}`,
    image: "/images/burger.png",
    ingredients: "bacon, iceberg, mayo",
    price: `3.5${index}`,
  };
});

const salads = new Array(9).fill(1).map((item, index) => {
  return {
    id: index,
    name: `Fruit salad ${index + 1}`,
    image: "/images/salad.png",
    ingredients: "Mango, Orange, Passion fruit",
    price: `6.3${index}`,
  };
});

const drinks = new Array(9).fill(1).map((item, index) => {
  return {
    id: index,
    name: `Sanguine refresh ${index + 1}`,
    image: "/images/juice.png",
    ingredients: "Sanguine juice, Orange juice, Mint",
    price: `2.5${index}`,
  };
});

export const allData = {
  pizza: {
    data: pizzas,
    pageInfo: {
      title: "Pizza",
      image: "/images/pizza.svg",
    },
  },
  burger: {
    data: burgers,
    pageInfo: {
      title: "Burger",
      image: "/images/hamburger.svg",
    },
  },
  salad: {
    data: salads,
    pageInfo: {
      title: "Salad",
      image: "/images/salad.svg",
    },
  },
  drink: {
    data: drinks,
    pageInfo: {
      title: "Juice",
      image: "/images/orange-juice.svg",
    },
  },
};
