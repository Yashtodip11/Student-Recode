// src/Components/StudentList.js
import React from 'react';

function StudentList({ students, onEdit, onDelete }) {
  return (
    <div>
      <h2>Student List</h2>
      <table border="1" width="100%" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Notes</th>
             <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No students found</td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
                <td>{student.notes}</td>
                <td>{student.age}</td>
                <td>
                  <button 
                    onClick={() => onEdit(student)} 
                    style={{ 
                      backgroundColor: '#007bff', 
                      color: '#fff', 
                      border: 'none', 
                      padding: '5px 10px', 
                      cursor: 'pointer',
                      borderRadius: '4px'
                    }}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => onDelete(student.id)} 
                    style={{ 
                      backgroundColor: '#dc3545', 
                      color: '#fff', 
                      border: 'none', 
                      padding: '5px 10px', 
                      marginLeft: '10px', 
                      cursor: 'pointer',
                      borderRadius: '4px'
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;