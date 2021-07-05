import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chicken Biryani",
    description: "6 Pieces with Onions",
    price: 180,
  },
  {
    id: "m2",
    name: "Dum Biryani",
    description: "6 Pieces and One Joint",
    price: 200,
  },
  {
    id: "m3",
    name: "UlavaCharu Biryani",
    description: "Idi Mana Dagara Ledhu le!",
    price: 250,
  },
  {
    id: "m4",
    name: "Joints",
    description: "Oka Nimmakaya Istham anthey",
    price: 70,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
