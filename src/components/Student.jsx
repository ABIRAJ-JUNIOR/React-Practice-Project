import PropTypes from "prop-types";

export const Student = (props) => {
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>IsMarried</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{props.name}</td>
                    <td>{props.age}</td>
                    <td>{props.isMarried ? "true" : "false"}</td>
                </tr>
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

Student.defaultProps = {
    name: "Name",
    age: 0,
    isMarried: false,
}