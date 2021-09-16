import algoliasearch from "algoliasearch";

export default async (req, res) => {
  const query = req.query;
  const client = algoliasearch(`${process.env.ALGOLIA_APP_ID}`, `${process.env.ALGOLIA_ADMIN_KEY}`);
  const index = client.initIndex("ponsuke_work_old");
  console.log(req.body);
  let body;
  if (req.headers["content-type"] == "application/json") body = JSON.parse(req.body || "null");
  console.log(body);

  const test = async (id) => {
    await fetch(process.env.SS_POST_URL, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "hoge=" + id,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  let hits = [];

  if (
    req.method === "POST"
    // && query.auth == "2J5vi1mT8sud"
  ) {
    // Process a POST request
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
        filters: "id=" + body.id,
        attributesToRetrieve: ["id"],
        batch: (batch) => {
          hits = hits.concat(batch);
        },
      })
      .then(() => {
        console.log("hits");
        console.log(hits);
        if (hits.length == 0) {
          /******  algoliaに書き込む ******/
          index
            .saveObjects(objects, { autoGenerateObjectIDIfNotExist: true })
            .then(({ objectIDs }) => {
              console.log(objectIDs);
            });
        }
        // test(body.id);
      });
  } else {
    // Handle any other HTTP method
  }

  res.status(200).json({ message: `your auth is ${query.auth} `, post: req.body, query: query });
};
