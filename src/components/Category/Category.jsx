import PropTypes from "prop-types";
const Category = ({ category }) => {
  const { image_url, job_type, available } = category;
  return (
    <div className="bg-[#f2f2f2] p-5 lg:w-60 text-left mb-3">
      <div className="size-10 mb-2">
        <img src={image_url} alt="" />
      </div>
      <p>{job_type}</p>
      <p>{available}</p>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object.isRequired,
};

export default Category;
