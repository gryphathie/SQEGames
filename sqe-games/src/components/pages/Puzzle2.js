import React, { useState } from 'react';
import { Container, Table, Form } from 'react-bootstrap';

function Puzzle2() {
  const [data, setData] = useState([
    { id: 1, name: 'The logo of our company is blur' },
    { id: 2, name: 'Checkout button is not working for some users' },
    { id: 3, name: 'Typo error on the footer page' },
    { id: 4, name: 'Our Prod app is not accesible to any user' }
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const severityOptions = ['--Select--', 'Critical', 'High', 'Medium', 'Low'];
  const priorityOptions = ['--Select--', 'P1', 'P2', 'P3', 'P4'];

  const handleCellChange = (id, field, value) => {
    const newData = data.map(row => {
      if (row.id === id) {
        return { ...row, [field]: value };
      }
      return row;
    });
    setData(newData);
  };

  const sortData = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Puzzle 2</h2>
      <p className="text-center">Instructions: Add the correct severity and priority to the bugs.</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => sortData('name')} style={{ cursor: 'pointer' }}>
              Bug {sortConfig.key === 'name' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
            <th onClick={() => sortData('severity')} style={{ cursor: 'pointer' }}>
              Severity {sortConfig.key === 'severity' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
            <th onClick={() => sortData('priority')} style={{ cursor: 'pointer' }}>
              Priority {sortConfig.key === 'priority' && (sortConfig.direction === 'ascending' ? '↑' : '↓')}
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>
                <Form.Select 
                  value={row.severity}
                  onChange={(e) => handleCellChange(row.id, 'severity', e.target.value)}
                >
                  {severityOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Form.Select>
              </td>
              <td>
                <Form.Select 
                  value={row.priority}
                  onChange={(e) => handleCellChange(row.id, 'priority', e.target.value)}
                >
                  {priorityOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Form.Select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {data.length > 0 && data[0].severity === 'Low' && data[0].priority === 'P4' && 
      data[1].severity === 'High' && data[1].priority === 'P2' && 
      data[2].severity === 'Medium' && data[2].priority === 'P3' && 
      data[3].severity === 'Critical' && data[3].priority === 'P1' && (
        <div className="mt-3 text-center text-success">
          <h4>Correct! your clue for this puzzle is: "3"</h4>
        </div>
      )}
    </Container>
  );
}

export default Puzzle2;
