import algoliasearch from "algoliasearch";

export default async (req, res) => {
  const query = req.query;
  const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_ADMIN_KEY}`);
  const index = client.initIndex("ponsuke_work_old");
  // console.log(req.body);
  let body;
  if (req.headers["content-type"] == "application/json") body = req.body || "null";
  // console.log(body.id);

  let hits = [];

  if (req.method === "POST" && query.auth == "2J5vi1mT8sud") {
    /**** Process a POST request ****/
    console.log("post");
    // console.log(body.api);
    const newContents = body.contents.new.publishValue;

    const objects = [
      {
        UpdatedDate: newContents.updatedAt,
        title: newContents.title || "",
        subTitle: newContents.subTitle || "",
        main:
          newContents.main.replace("br", "\n").replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "") || "",
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
      .then(async () => {
        console.log("hits");
        let hit = hits.find((hit) => hit.id === body.id);
        console.log(hit);
        if (!hit) {
          console.log("save");
          /******  algoliaに書き込む ******/
          index
            .saveObjects(objects, { autoGenerateObjectIDIfNotExist: true })
            .then(async ({ objectIDs }) => {
              console.log(objectIDs);
              await res
                .status(200)
                .json({ query: query, post: req.body, hit: hit, objectIDs: objectIDs });
            });
        } else await res.status(200).json({ query: query, post: req.body, hits: hits });
      })
      .catch((error) => {
        console.error("error");
        console.error(error);
        res.status(418).json({ error: error });
      });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ mes: "not post" });
  }

  // res.status(200).json({ query: query, post: req.body, hits: hits });
};
