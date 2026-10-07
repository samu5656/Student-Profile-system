function StudentProfile({ name, department, year }) {
  return (
    <div className="student-profile">
      <p>
        <strong>Student Name:</strong> {name}
      </p>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>
    </div>
  );
}

export default StudentProfile;