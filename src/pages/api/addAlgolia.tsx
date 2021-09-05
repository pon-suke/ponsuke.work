import algoliasearch from "algoliasearch";

export default (req, res) => {
  const query = req.query;
  const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_ADMIN_KEY}`);
  const index = client.initIndex("ponsuke_work_old");
  const body = req.body;

  let hits = [];

  if (
    req.method === "POST"
    // && query.auth == "2J5vi1mT8sud"
  ) {
    // Process a POST request
    console.log("post");
    console.log(JSON.stringify(req.body));
    const newContents = body.contents.new.publishValue;

    const objects = [
      {
        UpdatedDate: newContents.updatedAt,
        title: newContents.title,
        subTitle: newContents.subTitle,
        main: newContents.main,
        images: [],
        movies: [],
        id: newContents.id,
      },
    ];

    // データがalgoliaに存在するか確認
    index
      .browseObjects({
        query: "", // Empty query will match all records
        filters: "id=" + body.id,
        attributesToRetrieve: ["id"],
        batch: (batch) => {
          hits = hits.concat(batch);
        },
      })
      .then(() => {
        console.log(hits);
        if (hits.length == 0) {
          /******  algoliaに書き込む ******/
          index
            .saveObjects(objects, { autoGenerateObjectIDIfNotExist: true })
            .then(({ objectIDs }) => {
              console.log(objectIDs);
            });
        }
      });
  } else {
    // Handle any other HTTP method
  }

  res
    .status(200)
    .json({ message: `you requested for ${query.auth} `, post: req.body, query: query });
};
