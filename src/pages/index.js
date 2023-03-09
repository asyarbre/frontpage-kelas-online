import axios from "../configs/axios";
import Header from "../parts/Header";
import Hero from "../parts/Hero";
import Clients from "../parts/Clients";
import ListCourses from "../parts/ListCourses";
import ListCategories from "../parts/ListCategories";
import Footer from "../parts/Footer";

function Home({data}) {
  return (
    <>
      <main>
        <section className="header-clipping pt-10">
          <div className="container mx-auto">
            <Header />
            <Hero />
          </div>
        </section>
        <section className="container mx-auto pt-24">
          <Clients />
        </section>
        <section className="container mx-auto pt-24">
          <ListCourses data={data} />
        </section>
        <section className="container mx-auto pt-24">
          <ListCategories />
        </section>
        <section className="mt-24 bg-indigo-900 py-12">
          <Footer />
        </section>
      </main>
    </>
  );
}

// getinitialprops to get data from server url is /courses
Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return {data: data.data.data};
  }
  catch (error) {
    return error;
  }
};


export default Home;
