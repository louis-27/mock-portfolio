import Section from '../components/Section';

const Contact = () => {
  return (
    <Section id="contact">
      <div className="flex flex-col items-center p-4">
        <h1 className="text-4xl text-center mb-4">Contact Us</h1>
        <a href="#">
          <button className="bg-green-500 text-white p-4 font-semibold rounded-md">WhatsApp</button>
        </a>
      </div>
    </Section>
  );
};

export default Contact;
