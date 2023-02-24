import axios from "../configs/axios";

function Home(props) {
  return (
    <h1 className="text-3xl font-bold underline text-blue-400">Hello world!</h1>
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
