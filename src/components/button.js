import React from 'react'

function button({title, cta}) {
  return (
    <a href={cta} className="py-2 px-4 rounded-4xl border-myGrey border max-w-max bg-myBeige hover:bg-hover">
        {title}
    </a>
  )
}

export default button