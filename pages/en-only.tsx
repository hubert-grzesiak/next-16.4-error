import type { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (locale !== "en") {
    return { notFound: true };
  }
  return { props: {} };
};

export default function EnOnly() {
  return <p>This page exists only in the en locale.</p>;
}
