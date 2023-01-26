import React from 'react'
import {PhoneIcon, MapPinIcon, EnvelopeIcon, WrenchIcon} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
//

type Inputs = {
    name: string;
    email: string;
    number: string;
    subject: string;
    message: String;
  };

type Props = {}

function ContactMe({}: Props) {
    const { register, handleSubmit,} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
      window.location.href = 'mailto:email${formData.subject}';
    }

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
         <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Contact 
            </h3>

            <div className="flex flex-col space-y-1">
                <h4 className="text-4xl font-semibold text-center">I have got what you need
                <span className="decoration-[#f7ab0a]/50 underline">Lets chat</span>
                
              </h4>
                
                

                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">+123456789</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">WebMagic@magicweb.com</p>
                    </div>

                    <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">EveryWhere</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                    <WrenchIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
                    <p className="text-2xl">I am setting up forms as we speak!</p>
                    </div>
                </div>
            
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                    <div className="flex space-x-2">
                        <input {...register("name")} placeholder="Name" className="contactInput" type="text" disabled />

                        <input {...register("email")} placeholder="Email" className="contactInput" type="email" disabled />
                    </div>
                    <input {...register("number")} placeholder="Phone number" className="contactInput" type="number" disabled />

                    <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" disabled />

                    <textarea {...register("message")} placeholder="Message" className="contactInput" disabled />
                    <button type="submit" className="bg-[#f7ab0a] py-5 px-10 rounded-sm text-black font-bold text-lg animate-pulse" disabled>Submit</button>
                </form>
            </div>
            </div>
       
        
        
        
  );
}

export default ContactMe