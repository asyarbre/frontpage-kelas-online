import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Youtube from "react-youtube";
import { CSSTransition } from "react-transition-group";

import courses from "src/constants/api/courses";
import Header from "../../parts/Header";
import Footer from "@/parts/Footer";

import IconStudent from "../../../public/images/icon-student.svg";
import IconVideo from "../../../public/images/icon-video.svg";
import IconCertificate from "../../../public/images/icon-certificate.svg";

import Feature from "../../parts/Details/Feature";
import CoursePhoto from "@/parts/Details/CoursePhoto";
import formatThousand from "@/helpers/formatThousand";
import RenderPreview from "@/parts/Details/RenderPreview";
import HappyStundent from "@/parts/Details/HappyStundent";

function DetailsCourse({ data }) {
  console.log(data);

  const footer = useRef(null);
  const [isSticky, setisSticky] = useState(() => true);

  useEffect(() => {
    const stickyOffsetTop = footer.current.getBoundingClientRect().top;

    const stickyMetaToggler = () => {
      setisSticky(stickyOffsetTop >= window.pageYOffset + window.innerHeight);
    };

    window.addEventListener("scroll", stickyMetaToggler);
    return () => {
      window.removeEventListener("scroll", stickyMetaToggler);
    };
  }, []);
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

        <div>
          <CSSTransition
            in={isSticky}
            timeout={300}
            classNames="meta-price"
            unmountOnExit
          >
            <div className="meta-price w-full bg-white z-50 left-0 py-3">
              <div className="w-3/4 mx-auto">
                <div className="flex items-center">
                  <div className="w-full">
                    <h2 className="text-gray-600">Nama Kelas</h2>
                    <h3 className="text-2xl text-gray-900">
                      {data?.name ?? "Nama Kelas"}
                    </h3>
                  </div>
                  <h5 className="text-2xl text-teal-500 whitespace-nowrap mr-4">
                    {data?.type === "free" ? (
                      "Free"
                    ) : (
                      <span>Rp {formatThousand(data?.price ?? 0)}</span>
                    )}
                  </h5>
                  <a
                    href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-nowrap"
                  >
                    {data?.type === "free" ? "Enroll Now" : "Buy Now"}
                  </a>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className="w-3/4 mx-auto mt-8">
          <div className="w-3/4">
            <section>
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                About <span className="text-teal-500">Courses</span>
              </h6>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-3">
                {data?.description ?? "No Description Found"}
              </p>
            </section>

            <section className="mt-12">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Course <span className="text-teal-500">Photos</span>
              </h6>
              <div className="flex flex-wrap justify-start items-center -mx-4 mt-6">
                {data?.images?.length > 0 ? (
                  data?.images?.map?.((photo, index) => (
                    <CoursePhoto data={photo.image} key={index} />
                  ))
                ) : (
                  <div className="w-full text-center py-12">No Item Found</div>
                )}
              </div>
            </section>

            <section className="mt-12 w-2/3">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                You Will <span className="text-teal-500">Learn</span>
              </h6>
              {data?.chapters?.length > 0 ? (
                <RenderPreview previews={data.chapters}></RenderPreview>
              ) : (
                <div className="w-full text-center py-12">No Chapter Found</div>
              )}
            </section>

            <section className="mt-12">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Our <span className="text-teal-500">Instructor</span>
              </h6>

                <div className="flex items-center mt-4">
                  <Image className="w-20 rounded-full overflow-hidden" src={data?.mentor?.profile ?? ""} alt={data?.mentor.name} width={30} height={30}/>
                  <div className="ml-4">
                    <h2 className="text-lg text-gray-900">
                      {data?.mentor?.name ?? "Mentor Name"}
                    </h2>
                     <h3 className="text-sm text-gray-600">
                      {data?.mentor?.profession ?? "Mentor Profession"}
                     </h3>
                  </div>
                </div>
            </section>

            <section className="mt-12 w-6/12">
              <h6 className="font-medium text-gray-900 text-2xl mb-4">
                Happy <span className="text-teal-500">Students</span>
              </h6>
              {
                data.reviews?.map?.((testimonial, index) => {
                  return <HappyStundent data={testimonial} key={index} />
                })
              }
            </section>
          </div>
        </div>
      </section>
      <div style={{ height: 2000 }}></div>
      <section className="mt-24 bg-indigo-900 py-12" ref={footer}>
        <Footer />
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
