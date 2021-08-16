export default async function example(req, res) {
  console.log(req.headers.host);
  await fetch(process.env.SS_POST_URL, {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "ipAddress=" + req.headers.host,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  res.status(200).json({ status: "ok" });
}
