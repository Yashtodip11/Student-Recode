import React, { useState, useEffect } from 'react';
import SearchBar from './MyComponent/SearchBar'
import FilterBar from './MyComponent/FilterBar'
import StudentList from './MyComponent/StudentList'
import StudentForm from './MyComponent/StudentForm';




function App() {
  const [students, setStudents] = useState(() => {
    return JSON.parse(localStorage.getItem('students')) || [];
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [gradeFilter, setGradeFilter] = useState('All');
  const [editStudent, setEditStudent] = useState(null);

  useEffect(() => {
    localStorage.setItem('students', JSON.stringify(students));
  }, [students]);

  const addOrUpdateStudent = (student) => {
    if (editStudent) {
      setStudents(students.map(s => s.id === student.id ? student : s));
      setEditStudent(null);
    } else {
      setStudents([...students, { ...student, id: Date.now() }]);
    }
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student record?")) {
      setStudents(students.filter(s => s.id !== id));
    }
  };

  const filtered = students.filter(s => {
    const matchGrade = gradeFilter === 'All' || s.grade === gradeFilter;
    const matchSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        s.notes.toLowerCase().includes(searchQuery.toLowerCase());
    return matchGrade && matchSearch;
  });

  return (
    <div className="container">
      <h1>Student Record Dashboard</h1>
      <StudentForm onSave={addOrUpdateStudent} editStudent={editStudent} />
      <SearchBar onSearch={setSearchQuery} />
      <FilterBar onFilter={setGradeFilter} />
      <StudentList students={filtered} onEdit={setEditStudent} onDelete={deleteStudent} />
    </div>
  );
}

export default App;