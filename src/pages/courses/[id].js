import Head from "next/head";
import Link from "next/link";
import Youtube from "react-youtube";

import courses from "src/constants/api/courses";

function DetailsCourse({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Details Course</title>
      </Head>
      <section className="pt-10 relative overflow-hidden" style={{ height: 660 }}>
        {data?.chapters?.[0]?.lessons?.[0]?.video && (
          <div className="video-wrapper min-h-screen md:min-h-full">
            <Youtube
              videoId={data?.chapters?.[0]?.lessons?.[0]?.video}
              id={data?.chapters?.[0]?.lessons?.[0]?.video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoplay: 1,
                  controls: 0,
                  showinfo: 0,
                },
              }}
              onEnd={(event) => {
                event.target.playVideo();
              }}
            ></Youtube>
          </div>
        )}
      </section>
    </>
  );
}

DetailsCourse.getInitialProps = async (props) => {
  const { id } = props.query;
  try {
    const data = await courses.detail(id);
    return { data };
  } catch (error) {
    return error;
  }
};

export default DetailsCourse;
