import useInView from "../hooks/useInView";

const Section: React.FC = () => {
  const [ref, show] = useInView();

  return (
    <section
      ref={ref}
      className={`fade-up ${show ? "show" : ""}`}
    >
      <h1>Section TSX</h1>
    </section>
  );
};

export default Section;