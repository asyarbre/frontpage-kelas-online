import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import courses from "@/constants/api/courses";

import Header from "@/parts/Header";
import Footer from "@/parts/Footer";
import ListCourses from "@/parts/ListCourses";

function Courses({ data }) {
  const [Search, setSearch] = useState(() => "");
  const [SearchFocus, setSearchFocus] = useState(() => false);
  const [SearchResponse, setSearchResponse] = useState(() => ({
    isLoading: false,
    isError: false,
    data: [],
  }));

  const selectWrapper = useRef(null);

  function clickOutside(event) {
    if (selectWrapper && !selectWrapper.current.contains(event.target)) {
      setSearchFocus("");
    }
  }

  let timeoutSearch = useRef(null);
  function handleSearch(event) {
    event.persist();
    clearTimeout(timeoutSearch.current);
    timeoutSearch.current = setTimeout(() => {
      setSearchResponse({ isLoading: true, isError: false, data: null });
      courses
        .all({ params: { q: event.target.value } })
        .then((res) => {
          setSearchResponse({
            isLoading: false,
            isError: false,
            data: res.data,
          });
        })
        .catch((err) => {
          setSearchResponse({
            isLoading: false,
            isError: true,
            data: null,
          });
        });
    }, 1000);

    setSearch(event.target.value);
  }

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Ajarin | Kursus Online</title>
      </Head>

      <section className="pt-10 z-30 relative" style={{ height: 360 }}>
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75"></div>
        <div
          className="meta-title absolute bottom-0 object-fill z-0 w-full flex justify-center items-center"
          style={{ marginBottom: "-25px" }}
        >
          <div className="">
            <h3 className="text-6xl text-center text-teal-500 font-semibold">
              Library
            </h3>
            <h4 className="text-lg text-center text-white">
              Jangan mau kalah update dengan yang lainnya. <br /> Yuk, belajar.
            </h4>
            <div className="flex flex-col relative" ref={selectWrapper}>
              <input
                id="q"
                type="text"
                onChange={handleSearch}
                onFocus={() => setSearchFocus(!SearchFocus)}
                onBlur={() => setSearchFocus(!SearchFocus)}
                value={Search}
                placeholder={SearchFocus ? "Ketik minimal 3 huruf" : "Search"}
                className="bg-white focus:outline-none transition-all duration-200 focus:border-teal-500 border border-gray-600 px-4 py-3 w-full mt-6"
              />
              {Search.length >= 3 && (
                <div
                  className="flex flex-col absolute py-2 px-4 bg-white border border-gray-600 w-full"
                  style={{ top: 75 }}
                >
                  {SearchResponse.isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      {SearchResponse.isError && "Something went wrong"}
                      {SearchResponse.data?.length > 0
                        ? SearchResponse?.data?.map((item, index) => {
                            console.log(item);
                            return (
                              <div
                                key={index}
                                className="flex items-center -mx-4 py-2 cursor-pointer hover:bg-gray-200 relative"
                              >
                                <div
                                  className="w-auto px-4"
                                  style={{ width: 150 }}
                                >
                                  <Image
                                    src={item?.thumbnail ?? ""}
                                    width={200}
                                    height={150}
                                    alt={item?.name ?? "Course Name"}
                                  />
                                </div>
                                <div className="w-full px-4">
                                  <h6 className="text-gray-600 text-lg font-medium">
                                    {item?.name ?? "Course Name"}
                                  </h6>
                                  <p className="text-gray-600">
                                    {item?.level ?? "Level"}
                                  </p>
                                  <Link
                                    href="/courses/[id]"
                                    as={`/courses/${item.id}`}
                                    className="link-wrapped"
                                  />
                                </div>
                              </div>
                            );
                          })
                        : "No Course Found"}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header />
        </div>
      </section>
      <section className="container mx-auto pt-24">
        <ListCourses data={data} />
      </section>
      <section className="mt-24 bg-indigo-900 py-12">
        <Footer />
      </section>
    </>
  );
}

Courses.getInitialProps = async () => {
  try {
    const data = await courses.all();

    return { data: data.data };
  } catch (error) {}
};

export default Courses;
