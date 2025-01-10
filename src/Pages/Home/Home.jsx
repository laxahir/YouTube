import React, { useState } from 'react'
import Sidebar from '../../Component/Sidebar'
import Feed from '../../Component/Feed'

function Home({ sidebar }) {

  const [category, setCategory] = useState(0);

  return (
    <>
      <Sidebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`${sidebar ? "" : "-ml-32 "}`}>
        <Feed category={category} />
      </div>
    </>
  )
}

export default Home
