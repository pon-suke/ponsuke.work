import algoliasearch from "algoliasearch";

export default (req, res) => {
  const query = req.query;
  const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_ADMIN_KEY}`);
  const index = client.initIndex("ponsuke_work_old");

  let hits = [];

  if (req.method === "POST") {
    // Process a POST request
    console.log("post");
    console.log(req.body);
  } else {
    // Handle any other HTTP method
  }

  // データがalgoliaに存在するか確認
  index
    .browseObjects({
      query: "", // Empty query will match all records
      filters: "id=42",
      attributesToRetrieve: ["id"],
      batch: (batch) => {
        hits = hits.concat(batch);
      },
    })
    .then(() => console.log(hits));

  const objects = [
    {
      UpdatedDate: "2021-08-15T15:37:37.691Z",
      title: "青でいいらしい",
      subTitle: "〜日記〜",
      main: "main",
      images: [],
      movies: [],
      id: 193,
    },
  ];

  // algoliaに書き込む
  // index.saveObjects(objects, { autoGenerateObjectIDIfNotExist: true }).then(({ objectIDs }) => {
  //   console.log(objectIDs);
  // });

  res
    .status(200)
    .json({ message: `you requested for ${query.auth} `, post: req.body, query: query });
};
