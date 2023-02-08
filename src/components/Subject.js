import React from 'react';
import {Link} from 'react-router-dom'

function Subject() {
  return (
    <div>
      <h1>Subjects</h1>
      <Link className="sub" to="/sub/chem">Chemistry</Link><br/><br/>
      <Link className="sub" to="/sub/ai">Artificial Intelligence</Link><br/><br/>
      <Link className="sub" to="/sub/ds">Data Structures</Link><br/><br/>
      <Link className="sub" to="/sub/daa">Design and Analisys of Algorithms</Link><br/><br/>
      <Link className="sub" to="/sub/py">Python</Link><br/><br/>
      <Link className="sub" to="/sub/ps">Problem Solving</Link><br/><br/>
    </div>
  );
}

export default Subject;
