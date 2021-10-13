const Section = ({ id, children }) => {
  return (
    <div id={id} className="content-section bg-red-500">
      {children}
    </div>
  );
};

export default Section;
