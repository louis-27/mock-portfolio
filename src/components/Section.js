const Section = ({ id, children }) => {
  return (
    <div id={id} className="content-section">
      {children}
    </div>
  );
};

export default Section;
