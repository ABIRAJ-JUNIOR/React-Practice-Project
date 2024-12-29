import PropTypes from "prop-types";

export const Student = (props) => {
  return (
    <>
        <div>Student</div>
        <table>
            <thead>
                <th>Name</th>
                <th>Age</th>
                <th>IsMarried</th>
            </thead>
            <tbody>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.isMarried ? "true" : "false"}</td>
            </tbody>
        </table>
    </>
  )
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired, 
    isMarried: PropTypes.bool.isRequired, 
};
