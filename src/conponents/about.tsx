import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import fetch from "node-fetch";

type Props = {
  id: String;
};

function Page({ id }: Props) {
  console.log(id);
  return <div>{id}</div>;
}

// This gets called on every request
export async function getServerSideProps() {
  console.log("ssr");
  const router = useRouter();
  const key = {
    headers: { "X-API-KEY": "9b30e206-4b28-4453-91f5-5d39d40d15a3" },
  };
  let offset: number;
  offset = (+router.query.p - 1) * 10;

  // Fetch data from external API
  const res = await fetch(
    "https://ponsuke.microcms.io/api/v1/diary/",
    key
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  // Pass data to the page via props
  return { props: { id: data.id } };
}

export default Page;
