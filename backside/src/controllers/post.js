const database = require("./database.js");

const posts = {
  async getAll() {
    const dbo = await database.getDbo();

    return await dbo.collection("posts").find().toArray();
  },

  async search(good) {
    const dbo = await database.getDbo();

    const { _id } = good;

    return await dbo
      .collection("posts")
      .find({ _id: new ObjectId(_id) })
      .toArray();
  },

  async create(good) {
    const dbo = await database.getDbo();

    delete good._id;
    delete good.id;

    return (await dbo.collection("posts").insertOne(good)).ops[0];
  },

  async update(good) {
    const dbo = await database.getDbo();

    const { _id } = good;

    delete good._id;
    delete good.id;

    return await dbo
      .collection("posts")
      .findOneAndUpdate(
        { _id: new ObjectId(_id) },
        { $set: good },
        { returnNewDocument: true }
      );
  },

  async delete(good) {
    const dbo = await database.getDbo();

    const { _id } = good;

    await dbo.collection("posts").deleteOne({ _id: new ObjectId(_id) });
  },
};

module.exports = posts;
