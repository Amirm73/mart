import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";

export default function page(props: any) {
  const router = useRouter();

  return (
    <h1>
      {router.query.users_id} userName : {props.post.username}
    </h1>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const post = await axios.get(
    "https://jsonplaceholder.typicode.com/users" + "/" + context.query.users_id
  );
  return {
    props: {
      post: post.data,
    },
  };
};
