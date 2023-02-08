import React from 'react'
import { Link } from 'react-router-dom'

function loe() {
  return (
    <div>
        <Link className="loe" to="/sub/py/loe/exp1">Experiment 1</Link><br/><br/>
        <Link className="loe" to="/sub/py/loe/exp2">Experiment 2</Link><br/><br/>
        <Link className="loe" to="/sub/py/loe/exp3">Experiment 3</Link><br/><br/>
        <Link className="loe" to="/sub/py/loe/exp4">Experiment 4</Link><br/><br/>
        <Link className="loe" to="/sub/py/loe/exp5">Experiment 5</Link><br/><br/>
        <Link className="loe" to="/sub/py/loe/exp6">Experiment 6</Link><br/><br/>
    </div>
  )
}

export default loe