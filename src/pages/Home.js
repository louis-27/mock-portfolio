import Section from '../components/Section';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <Section id="home">
      <Nav fgColor="black" bgColor="white" sticky={false} />
      <div className="flex justify-between items-center p-4">
        <div className="w-1/3">
          <h1 className="text-4xl mb-4">Company Name</h1>
          <p className="font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <img src="home.jpg" className="w-1/2" />
        {/* <a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by vectorjuice - www.freepik.com</a> */}
      </div>
    </Section>
  );
};

export default Home;
