const Meals = require("../DataBase/mealsSchema");

exports.getmeals = async (req, res, next) => {
  try {
    const meals = await Meals.find();
    return res.json(meals);
  } catch (err) {
    console.log(err.message);
  }
};

exports.postmeals = async (req, res, next) => {
  const { name, description, price } = req.body;

  try {
    const newData = new Meals({ name, description, price });
    await newData.save();
    return res.json(await Meals.find());
  } catch (err) {
    console.log(err.message);
  }
};
