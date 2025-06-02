import React, { useState, useEffect } from 'react';

function StudentForm({ onSave, editStudent }) {
  const [form, setForm] = useState({ name: '', age: '', grade: '', notes: '' });

  useEffect(() => {
    if (editStudent) setForm(editStudent);
  }, [editStudent]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name.trim()) {
      alert("Student Name is required");
      return;
    }
    onSave({ ...form });
    setForm({ name: '', age: '', grade: '', notes: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name *" value={form.name} onChange={handleChange} required />
      <input name="age" placeholder="Age" value={form.age} onChange={handleChange} />
      <input name="grade" placeholder="Grade" value={form.grade} onChange={handleChange} />
      <input name="notes" placeholder="Notes" value={form.notes} onChange={handleChange} />
      <button type="submit">{editStudent ? "Update" : "Add"} Student</button>
    </form>
  );
}

export default StudentForm;