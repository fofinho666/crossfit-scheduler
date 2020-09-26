const saveCookies = async (mongoClient, cookies) => {
  await mongoClient.connect();
  const database = mongoClient.db('agenda');
  const collection = database.collection('cookies');

  await collection.deleteMany({});
  result = await collection.insertMany(cookies);
  await mongoClient.close();

  return result
}

const loadCookies = async (mongoClient) => {
  await mongoClient.connect();
  const database = mongoClient.db('agenda');
  const collection = database.collection('cookies');

  const cursor = collection.find({}, {projection: {_id: 0}});
  result = await cursor.toArray();
  await mongoClient.close();

  return result
}

module.exports = {
  saveCookies,
  loadCookies
}
