import React from 'react'
import TitleCluster from '@/components/titleCluster'
import Button from '@/components/button'

function page() {
  return (
    <div className="px">
       <div className='py mb-8'>
        <Button title="Return to Search" cta="./"/>
       </div>

      <div className='grid md:grid-cols-3'>
        <div className='flex flex-col gap-12'>
          <TitleCluster title="Marry Me Chicken" meal="dinner" serv="4" prep="10 mins" time="40 mins"/>

          <div>
            <h4>Ingredients</h4>

            <ul>
              <li>
          <input type="checkbox" id="item1" name="groceries" value="milk"/>
          <label for="item1">Milk</label>
      </li>
      <li>
          <input type="checkbox" id="item2" name="groceries" value="eggs"/>
          <label for="item2">Eggs</label>
      </li>
      <li>
          <input type="checkbox" id="item3" name="groceries" value="bread"/>
          <label for="item3">Bread</label>
      </li>
    </ul>
          </div>
        </div>
       

      </div>

      
    </div>
  )
}

export default page