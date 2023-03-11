import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Youtube from "react-youtube";

import courses from "src/constants/api/courses";
import Header from "../../parts/Header";

import IconStudent from "../../../public/images/icon-student.svg";
import IconVideo from "../../../public/images/icon-video.svg";
import IconCertificate from "../../../public/images/icon-certificate.svg";

import Feature from "../../parts/Details/Feature";

function DetailsCourse({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title>Details Course</title>
      </Head>
      <section
        className="pt-10 relative overflow-hidden"
        style={{ height: 660 }}
      >
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
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
        <div className="meta-title absolute inset-0 object-fill z-0 w-full flex justify-center items-center">
          <div className="text-center">
            <h3 className="text-lg text-white">Kelas Online: </h3>
            <h4 className="text-3xl md:text-6xl text-teal-500 font-semibold">
              {data?.name ?? "Nama Kelas"}
            </h4>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header />
        </div>
      </section>

      <section className="container mx-auto pt-24 relative">
        <div className="absolute top-0 w-full transform -translate-y-1/2">
          <div className="w-3/4 mx-auto">
            <div className="flex justify-between">
              <Feature
                data={{
                  icon: <Image src={IconStudent} alt="icon" />,
                  meta: "Student",
                  value: data?.total_student ?? 0,
                }}
              />
              <Feature
                data={{
                  icon: <Image src={IconVideo} alt="icon" />,
                  meta: "Video",
                  value: data?.total_videos ?? 0,
                }}
              />
              <Feature
                data={{
                  icon: <Image src={IconCertificate} alt="icon" />,
                  meta: "Certificate",
                  value:
                    data?.certificate === 1 ? "Tersedia" : "Tidak Tersedia",
                }}
              />
            </div>
          </div>
        </div>
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
