import React from "react";
import header2 from './ASSETS/header2.png'
import wrapper from './ASSETS/wrapper.png'
import youtube from './ASSETS/youtube.png'
import { motion } from "framer-motion";
import bruhz from './ASSETS/bruhzz2.png'
import bruhsheading2 from './ASSETS/bruh story.png'
import bruhsheading3 from './ASSETS/bruhheading3.png'

const Franchising = () => {

    return (
        <section className="bg-gradient-to-tr from-dark_purple via-dark_purple to-yellow-400 pb-8 ">
            
            <img src={header2} alt="" className="mx-auto  w-4/5 relative -top-64"/>

            <img src={wrapper} alt="header" className="w-full relative -top-97"/>

            <article className="relative bottom-100 left-98 w-96">
                <h2 className="font-bold text-4xl mb-4">BRUH'S HOT CHICKEN IS A GROWING FAST CASUAL BRAND SPREAD ACROSS AMERICA</h2>
                <ul className="list-disc">
                    <li className="mb-4">franchiser to franchisee direct support and rebate purchase program  </li>
                    <li className="mb-4">every bruhs location uses 43% less packaging  waste then traditional fast food concepts </li>
                    <li className="mb-4">new age fried chicken concept with explosive growth and in the fast causal category</li>
                    <li className="mb-4">small footprint gohst kitchen, qsr storefront,  to drive thru options available  </li>
                    <li className="mb-4">trend setting design </li>
                </ul>
            </article>

            <img src={bruhsheading2} alt="" className="w-98 relative bottom-99 mx-auto"/>
            <img src={bruhsheading3} alt="" className="w-98 relative bottom-99 mx-auto"/>

            <img src={youtube} alt="youtube" className="w-full -mt-102"/>
            <div className='flex overflow-hidden'>
          <motion.div 
          className='flex' 
          animate={{ x: ['0%', '-100%'] }}  // Move from left to right
          transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,  // Controls speed of the animation
            ease: 'linear'
          }
          }}
          >
            <img className='inline-block  ' src={bruhz} alt='' />
            <img className='inline-block ' src={bruhz} alt=''/>
          </motion.div>
        </div>
        <article className="flex flex-row bg-gray-300  -mb-8">
            <div className="w-200 border border-black">
                <div className="pt-16 px-8 mb-8">
                    <h3 className="text-4xl font-bold">INITIAL INVESTMENT:</h3>
                    <ul className="list-disc">
                        <li>$340,000  to $1,270,000 PER RESTAURANT</li>
                        <li>REQUIRED TO DEVELOP (2) OR MORE RESTAURANTS</li>
                        <li>MUST HAVE $1,250,000 LIQUID ASSETS</li>
                        <li>MUST HAVE $2,500,000 LIQUID net worth </li>
                    </ul>
                </div>

                <div className="px-8">
                    <h3 className="text-4xl font-bold">RESTAURANT OWNERSHIP & <br/> DEVELOPMENT</h3>
                    <p className="font-bold">*FIRM REQUIREMENTS*</p>
                    <ul>
                        <li>CURRENTLY OWN/OPERATE 2+ QSR OR FAST CASUAL RESTAURANTS IN THE MARKET AREA OF INTERESTS</li>
                        <li>CANNOT Currently HAVE OWNERSHIP IN A FRIED CHICKEN OR BOBA CONCEPT</li>
                        <li>HAVE STRONG OPERATIONAL METRICS AND REFERRALS FROM YOUR CURRENT FRANCHISE SYSTEM</li>
                    </ul>
                </div>
          </div>
          <div className="px-8 w-350 border border-black" >
            <h3 className="font-bold text-3xl mb-4"> WANT TO LEARN MORE ABOUT BRUH'S HOT CHICKEN?</h3>
            <p className="mb-2">fill out the form below and a frahcnise representiave will contact you within 24 hours.</p>
            <p className="mb-2">Considerinng only expreinced multi-unit resturasnt franchiseees at this time</p>
            <form>
                <label className="inline-block mb-4">
                    <p>First Name</p>
                    <input className="rounded-2xl w-80 "/>
                </label>
                <label className="inline-block ml-6 ">
                    <p>Last Name</p>
                    <input className="rounded-2xl w-80"/>
                </label>
                <label className="inline-block mb-4">
                    <p>Email</p>
                    <input className="rounded-2xl w-80  "/>
                </label >
                <label className="inline-block ml-6">
                    <p>Mobile Number</p>
                    <input className="rounded-2xl w-80"/>
                </label>
                <label className="inline-block mb-4">
                    <p>City</p>
                    <input className="rounded-2xl w-80 "/>
                </label>
                <label className="inline-block ml-6">
                    <p>State</p>
                    <input className="rounded-2xl w-80"/>
                </label>
                <label className="inline-block mb-4">
                    <p>Address</p>
                    <input className="rounded-2xl w-80"/>
                </label>
                <label className="inline-block ml-6">
                    <p>Territory of interest</p>
                    <input className="rounded-2xl w-80"/>
                </label>
                <label className="inline-block mb-4">
                    <p>Number of stores to develop</p>
                    <input className="rounded-2xl w-80"/>
                </label>
                
                <label className="inline-block ml-6">
                    <p>Networth</p>
                    <input className="rounded-2xl w-80"/>
                </label>
                <label className="inline-block mb-4">
                    <p>Liquid cash available for investment</p>
                    <input className="rounded-2xl w-80"/>
                </label>
                <label className="inline-block ml-6 mb-4">
                    <p>Where did you hear about us</p>
                    <select className="rounded-2xl w-80">
                        <option>select an option</option>
                        <option>Social media</option>
                        <option>Friends</option>
                        <option>Television</option>
                    </select>
                </label>
                
                <label className="mb-8">
                    <p>Do you currently own and operate restaurants?</p>
                    <button className="rounded-2xl w-32 bg-white ">Yes</button>
                    <button className="rounded-2xl w-32 bg-white ml-4">No</button>
                </label>

                <label className="block my-4">
                    <p>DESCRIBE RESTAURANT EXPERIENCE: BRANDS OWNED AND NUMBER OF LOCATIONS</p>
                    <textarea className="rounded-2xl w-full h-16"></textarea>
                </label>

                <button className="block rounded-2xl bg-white h-12 w-80 mx-auto my-8"> Submit</button>
            </form>
          </div>

        </article>
         

        </section>
    )

}

 export default Franchising;