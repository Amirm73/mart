import Head from "next/head";
import Image from "next/image";

import styled from "styled-components";

import { Homepage } from "$/lib/ui";
import { useGetPosts } from "$/lib/hooks/react-query-hooks/query/useGetPosts";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getPostsController } from "$/lib/api/controllers/query/getPostsController";

export default function Home() {
  //   const getPostsQuery = useGetPosts();
  //   return <Wrapper>{getPostsQuery.isLoading ? "loading.." : "hello"}</Wrapper>;
  // }
  // const Wrapper = styled.div`
  //   width: 10rem;
  //   height: 10rem;
  //   background: yellow;
  // `;
  // export const getServerSideProps: GetServerSideProps = async (context) => {
  //   const queryClient = new QueryClient();
  //   await queryClient.prefetchQuery(["posts"], getPostsController);
  //   return {
  //     props: {
  //       dehydratedState: dehydrate(queryClient),
  //     },
  //   };

  return (
    <>
      <Homepage />
    </>
  );
}
