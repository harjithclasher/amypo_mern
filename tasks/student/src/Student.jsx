
const Student = (props) => {
  return (
    <div className="m-3">
        <h5>Student Name: {props.name}</h5>
        <p>Department: {props.dept}</p>
        <p>CGPA: {props.cgpa}</p>
        {props.cgpa>=8?"Excellent":"Needs Improvement"}
     </div>
  );
};

export default Student;
