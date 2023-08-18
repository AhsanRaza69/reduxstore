 import React from 'react'
 import { BiLogoFacebook,BiLogoInstagram,BiLogoPinterest,BiLogoVisa } from "react-icons/bi";
import { CiTwitter } from "react-icons/ci";
 
 const AboutCheif = () => {
    const cheifs =[
        {
            name:"Esther Howard",
            img:"https://img.freepik.com/free-photo/portrait-smiling-male-baker-preparing-bread-bakery_23-2147888425.jpg?w=740&t=st=1690202647~exp=1690203247~hmac=e43734cb7b19e95e2446ad27fe5b0a905f80bc305487026722728b0470806a79",
            Rank:"Chef cook - Founder"
        },
        {
            name:"Kristin Watson",
            img:"https://img.freepik.com/premium-photo/african-american-man-wearing-apron-baking_255757-3821.jpg?size=626&ext=jpg",
            Rank:"Chef cook"
        },
        {
            name:"Esther Howard,",
            img:"https://img.freepik.com/free-photo/cheerful-young-man-baker-standing-bakery-holding-bread_171337-16117.jpg?w=740&t=st=1690202586~exp=1690203186~hmac=1c7155e5dd5b1cb9fc06e66d2fb7501789d9b3535781626f49a47a7962fbe7b9  ",
            Rank:"Chef cook - Founder"
        },
    ]
   return (
    <div className='my-16 px-14 '>
        <h2 className='  text-3xl md:text-4xl text-center my-12'>CUSTOMER REVIEWS</h2>
        <div className=' grid  md:grid-cols-2 lg:grid-cols-3'>

        {
            cheifs.map(({name,img,Rank},ind)=>{
                return(
                    <div key={ind} className='flex justify-center my-12 items-center flex-col gap-2'>
                        <img src={img} className=' rounded-full w-[300px] mb-4 h-[290px]' alt="" />
                        <h2 className=' text-2xl '>{name}</h2>
                        <p className='  text-sm font-medium text-amber-900'>{Rank}</p>
                        <div className=' text-gray-400 mt-4 mx-auto md:mx-0 flex gap-4 text-3xl '>
                                <span className='hover:text-amber-950'><BiLogoFacebook/></span>
                                <span className='hover:text-amber-950'><CiTwitter/></span>
                                <span className='hover:text-amber-950'><BiLogoPinterest/></span>
                                <span className='hover:text-amber-950'><BiLogoInstagram/></span>
                        
                         </div>
                    </div>  
                )
            })
        } 
        </div>
    </div>
   )
    }


   export default AboutCheif