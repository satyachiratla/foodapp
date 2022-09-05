const Orders = require('../DataBase/ordersSchema')

exports.postorders = async (req, res, next) => {
    const { user, orderedItems } = req.body;

    try {
        const newData = new Orders({ user, orderedItems });
        await newData.save();
        return res.json(await Orders.find());
    } catch(err) {
        console.log(err.message);
    }
}