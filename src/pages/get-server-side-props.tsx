import React from "react";
import Link from "next/link";
// import fetch from "node-fetch";

type Props = {
  id: String;
  createdAt: String;
  updatedAt: String;
  publishedAt: String;
  revisedAt: String;
  title: String;
  subtitle: String;
  thumbnail: {
    url: String;
    height: number;
    width: number;
  };
  main: String;
};

function Index(props) {
  let blog = props.blog;
  //   console.log(props);
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const param = context.query;
  let offset = ((param.p ? param.p : 1) - 1) * 10;
  console.log("offset" + offset);
  const key = {
    headers: { "X-API-KEY": "9b30e206-4b28-4453-91f5-5d39d40d15a3" },
  };
  const data = await fetch(
    "https://ponsuke.microcms.io/api/v1/diary?offset=" + offset,
    key
  )
    .then((res) => res.json())
    .catch(() => null);

  if (!data || data.contents.lengh) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      blog: data.contents,
      params: context.query,
    },
  };
}

export default Index;
