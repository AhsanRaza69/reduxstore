import React from 'react'

const Hicons = () => {

    const img =[
        {
            imges:"https://img.freepik.com/premium-vector/bakery-chef-logo-wheat-rice-agriculture-logo_7888-344.jpg?w=2000"
        },
        {
            imges:"https://img.freepik.com/premium-vector/bakery-chef-logo-wheat-rice-agriculture-logo_7888-344.jpg?w=2000"
        },
        {
            imges:"https://img.freepik.com/premium-vector/bakery-chef-logo-wheat-rice-agriculture-logo_7888-344.jpg?w=2000"
        },
        {
            imges:"https://img.freepik.com/premium-vector/bakery-chef-logo-wheat-rice-agriculture-logo_7888-344.jpg?w=2000"
        },
    ]

  return (
    <div className='flex  bg-white gap-3 overflow-hidden justify-evenly px-4 py-2'>
      {  img.map((prod,ind)=>(
        <div key={ind} className='hover:transition-transform hover:scale-110'>
            <img className='h-[ 200px] w-[200px]' src={prod.imges} alt="" />

        </div>


        ))}
        <img src="" alt="" />
    </div>
  )
}

export default Hicons