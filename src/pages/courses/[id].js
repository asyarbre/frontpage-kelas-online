import Head from "next/head";
import Link from "next/link";

import courses from "src/constants/api/courses";

function DetailsCourse({ data }) {
  console.log("Detail Course", data);
  return (
    <>
      <Head>
        <title>Details Course</title>
      </Head>
      <section
        className="pt-10 relati overflow-hidden"
        style={{ height: 660 }}
      ></section>
    </>
  );
}

DetailsCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await courses.detail(id);
    return { data: data };
  } catch (error) {
    return error;
  }
};

export default DetailsCourse;
