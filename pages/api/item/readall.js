import connectDB from "../../../utils/database";
import { ItemModel } from "../../../utils/schemaModels";

const getAllItems = async (req, res) => {
  try {
    await connectDB(req, res);
    const allItems = await ItemModel.find();
    return res
      .status(200)
      .send({ message: "アイテム読み取り成功(オール)", allItems: allItems });
  } catch (err) {
    res.status(400).send({ message: "アイテム読み取り失敗(オール)" });
  }
};
export default getAllItems;
