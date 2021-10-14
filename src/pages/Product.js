import Section from '../components/Section';

const Products = () => {
  return (
    <Section id="products">
      <div className="flex flex-col items-center p-4">
        <h1 className="text-4xl text-center mb-4">Our Works</h1>
        <div className="bg-gray-300" style={{ width: '36rem', height: '24rem' }} />
      </div>
    </Section>
  );
};

export default Products;
