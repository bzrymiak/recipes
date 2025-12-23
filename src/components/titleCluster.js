import React from 'react'

function titleCluster({ title, meal, serv, prep, time}) {
  return (
    <div className="flex flex-col gap-8">
       <div>
            <h2 className='recipe-name'>{title ?? "Recipe"}</h2>
            <h4 className='text-brown caption'>{meal ?? "misc. category"}</h4>
        </div>

        <div className="bg-myBeige p-5 gap-3 flex flex-wrap flex-row justify-between">
            <div>
                <h5 className='text-brown'>Servings</h5>
                <p>{serv ?? "?"}</p>
            </div>

             <div>
                <h5 className='text-brown'>Prep Time</h5>
                <p>{prep ?? "?"}</p>
            </div>

             <div>
                <h5 className='text-brown'>Total Time</h5>
                <p>{time ?? "?"}</p>
            </div>
            
        </div>

    </div>
  )
}

export default titleCluster