// StudentItem.js
import React from 'react';

function StudentItem({ student, onEdit, onDelete }) {
  return (
    <div className="student-item">
      <strong>{student.name}</strong> | Age: {student.age} | Grade: {student.grade}
      <br />
      Notes: {student.notes}
      <br />
      <button onClick={() => onEdit(student)}>Edit</button>
      <button onClick={() => onDelete(student.id)}>Delete</button>
    </div>
  );
}

export default StudentItem;
