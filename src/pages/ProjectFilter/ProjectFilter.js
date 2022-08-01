const filterList = [
  "ALL",
  "MINE",
  "DEVELOPMENT",
  "DESIGN",
  "FINANCE",
  "DEEPLEARNING",
  "MACHINELEANRING",
  "FRONTEND",
  "BACKEND",
  "FULLSTACK",
];

const ProjectFilter = ({ currentFilter, changeFilter }) => {
  const handleClick = (newFilter) => {
    changeFilter(newFilter);
  };
  return (
    <div className="project-filter">
      <nav>
        {filterList.map((filter) => (
          <button
          
            key={filter}
            onClick={() => handleClick(filter)}
            className={currentFilter === filter ? "active" : ""}
          >
            {filter}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;
