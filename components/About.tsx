import React from 'react'
import { motion } from "framer-motion";
//https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/287646674_1624259231276218_7092134572011131332_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vzCsTaDXysQAX_6IabS&_nc_ht=scontent-lcy1-1.xx&oh=00_AfCA9RhDGCoXxktTT-1ts5gG52wu668tUHyGmyYuhvGO6A&oe=63CC21D8
type Props = {}

function about({}: Props) {
  return (
    <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 1.5, }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
              About
          </h3>

          <motion.img
              initial={{
                  x: -200,
                  opacity: 0
              }}
              transition={{
                  duration: 1.2,
              }}
              whileInView={{
                  x: 0,
                  opacity: 1
              }}
              src="https://scontent-lcy1-1.xx.fbcdn.net/v/t39.30808-6/326132824_568798175111823_5472597163376559209_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8emZ1IkZWHMAX-QuUCO&_nc_ht=scontent-lcy1-1.xx&oh=00_AfCH2I57PdyfS8kxjdfaTY-vY7ArGoZIm93JUA6HdAbcSw&oe=63CB6083 "
              className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-54 md:h-65 xl:w-[500px] xl:h-[600px]" />
     <div className="space-y-10 px-0 md:px-10">
              <h4 className="text-4xl font-semibold">Here is a <span className="underline decoration-[#f7ab0a]">little</span> background</h4>
              <p className="text-sm">My name is Eddie and I am a self taught Website Developer, I am still learning and so far enjoying this, I hope to hear from you and would love to take another project on. please take a look at my project's and skills below</p>
          </div>
     </motion.div>
    
  )
}

export default about