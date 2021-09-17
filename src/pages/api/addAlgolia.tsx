import algoliasearch from "algoliasearch";

export default async (req, res) => {
  const query = req.query;
  const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_ADMIN_KEY}`);
  const index = client.initIndex("ponsuke_work_old");
  // console.log(req.body);
  let body;
  if (req.headers["content-type"] == "application/json") body = req.body || "null";
  console.log(body.id);

  let hits = [];

  if (
    req.method === "POST"
    && query.auth == "2J5vi1mT8sud"
  ) {
    /**** Process a POST request ****/
    console.log("post");
    // console.log(body.api);
    const newContents = body.contents.new.publishValue;

    const objects = [
      {
        UpdatedDate: newContents.updatedAt,
        title: newContents.title || "",
        subTitle: newContents.subTitle || "",
        main: newContents.main || "",
        images: [],
        movies: [],
        id: newContents.id || -1,
      },
    ];

    console.log(objects);

    // データがalgoliaに存在するか確認
    index
      .browseObjects({
        query: "", // Empty query will match all records
        attributesToRetrieve: ["id"],
        batch: (batch) => {
          hits = hits.concat(batch);
        },
      })
      .then(() => {
        console.log("hits");
        let hit = hits.find((hit) => hit.id === body.id);
        console.log(hit);
        if (!hit) {
          console.log("save");
          /******  algoliaに書き込む ******/
          index
            .saveObjects(objects, { autoGenerateObjectIDIfNotExist: true })
            .then(({ objectIDs }) => {
              console.log(objectIDs);
            });
        }
      })
      .catch((error) => {
        console.error("error");
        console.error(error);
      });
  } else {
    // Handle any other HTTP method
  }

  res.status(200).json({ message: `your auth is ${query.auth} `, post: req.body, query: query });
};
