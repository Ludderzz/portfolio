import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function Experiencecard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                viewport={{once: true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
         src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/326094181_569242291721700_451785794995372643_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=a5ZZRstO6FQAX8wnIrs&_nc_ht=scontent-lcy1-1.xx&oh=00_AfBBaTyQp9OsRJ-Zm4iPSzzrnlSG9ib1J4ZF6KHEWKsThw&oe=63CBAE0C"
          alt="" />

          <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">CEO of webdev magic</h4>
            <p className="font-bold text-2xl mt-1">webdev Magic</p>
            <div className="flex space-x-2 my-2">
            {/*techused*/}
            {/*techused*/}
            {/*techused*/}
          </div>
            <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
<div>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>summary</li>
                <li>summary</li>
                <li>summary</li>
                <li>summary</li>
                <li>summary</li>
            </ul>
            </div>
       </div>
       
    </article>
    
    
  )
}

export default Experiencecard