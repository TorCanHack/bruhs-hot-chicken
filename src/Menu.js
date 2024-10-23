import React from "react";
import fries1 from './ASSETS/fries1.png'
import fries2 from './ASSETS/fries2.png'
import fries3 from './ASSETS/fries3.png'
import loadedfries1 from './ASSETS/loadedfries1.png'
import loadedfries2 from './ASSETS/loadedfries2.png'
import bmenu from './ASSETS/headingmenu.png'
import { motion } from "framer-motion";
import sandwinch1 from './ASSETS/sandwinch1.png'
import sandwinch2 from './ASSETS/sandwinch2.png'
import combomeal1 from './ASSETS/combomeal1.png'
import combomeal2 from './ASSETS/combomeal2.png'
import combomeal3 from './ASSETS/combomeal3.png'
import ct1 from './ASSETS/ct1.png'
import ct2 from './ASSETS/ct2.png'
import header from './ASSETS/header.png'
import salad1 from './ASSETS/salad1.png'
import salad2 from './ASSETS/salad2.png'
import sauce1 from './ASSETS/sauce1.png'
import sauce2 from './ASSETS/sauce2.png'
import sauce3 from  './ASSETS/sauce3.png'
import sauce4 from './ASSETS/sauce4.png'
import sauce5 from './ASSETS/sauce5.png'
import sauce6 from './ASSETS/sauce6.png'
import sauce7 from './ASSETS/sauce7.png'
import sides1 from './ASSETS/sides1.png'
import sides2 from './ASSETS/sides2.png'
import coke from './ASSETS/coke.png'

const Menu = () => {

    return (
        <section className="">
            <div className="bg-dark_purple ">
                <img src={bmenu} alt="letter" className="mx-auto w-80"/>
            </div>
            <div className='overflow-hdden text-white bg-yellow-500'>
                <motion.div 
                className='flex whitespace-nowrap'
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
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
          
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>

                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>
                    <p className='mx-2'>#REALLY F#*KING ORGANIC</p>

                </motion.div>
        

            </div>

            <article className="bg-[url('/public/rumbledPapper.jpg')]">
                <article>
                    <h2 className="text-6xl font-bold pl-20 pt-12 mb-8">CHICKEN SANDWHICHES</h2>

                    <article className="flex flex-row justify-center items-center">
                        <img src={sandwinch1} alt="fries"/>
                       <div className="flex flex-col justify-center items-center w-80">
                            <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                            <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                            <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                       </div>
                    </article>

                    <article className="flex flex-row justify-center items-center">
                        <div className="flex flex-col justify-center items-center w-80">
                            <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                            <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                            <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                       </div>
                        <img src={sandwinch2} alt="fries"/>
                        
                    </article>
                    
                </article>

                <article>
                    <h2 className="text-6xl font-bold pl-20 pt-12 mb-8">COMBO MEAL</h2>
                    <article className="flex flex-row  justify-between px-16 py-8">
                        <article className="flex flex-col justify-center items-center w-80">
                            <img src={combomeal1} alt="fries"/>
                            <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                            <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                            <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                        </article>

                        <article className="flex flex-col justify-center items-center w-80">
                            <img src={combomeal2} alt="fries"/>
                            <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                            <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                            <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                        </article>

                        <article className="flex flex-col justify-center items-center w-80">
                            <img src={combomeal3} alt="fries"/>
                            <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                            <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                            <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                        </article>

                    </article>
                </article>

                <article>
                    <h2 className="text-6xl font-bold pl-20 pt-12 mb-8">CHICKEN TENERONI'S</h2>
                    <article className="flex flex-row justify-between  px-28 py-8">

                        <article className="flex flex-col justify-center items-center w-98">
                            <img src={ct1} alt="fries"/>
                            <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                            <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                            <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                        </article>

                        <article className="flex flex-col justify-center items-center w-98">
                            <img src={ct2} alt="fries"/>
                            <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                            <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                            <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                        </article>

                    </article>

                </article>

                <article className="bg-dark_purple">
                    <img src={header} alt="smile good" className="mx-auto"/>

                </article>

                <h2 className="text-6xl font-bold pl-20 pt-12 mb-8">FRIES</h2>
                <article className="flex flex-row  justify-between px-16">
                    <article className="flex flex-col justify-center items-center w-80">
                        <img src={fries1} alt="fries"/>
                        <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                        <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                        <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                    </article>

                    <article className="flex flex-col justify-center items-center w-80">
                        <img src={fries2} alt="fries"/>
                        <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                        <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                        <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                    </article>

                    <article className=" flex flex-col justify-center items-center w-80">
                        <img src={fries3} alt="fries"/>
                        <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                        <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                        <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                    </article>
                    
                    
                </article>

                <article>
                    <h2 className="text-6xl font-bold pl-20 pt-12 mb-8">LOADED FRIES</h2>
                    <article className="flex flex-row">  

                     <article className="flex flex-col justify-center items-center">
                            <img src={loadedfries1} alt="fries" className="mb-4"/>
                            <div className="flex flex-col text-center items-center w-80">
                                <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                                <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                                <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                            </div>
                        </article>

                        <article className="flex flex-col justify-center items-center">
                            <img src={loadedfries2} alt="fries" className="mb-4"/>
                            <div className="flex flex-col text-center items-center w-80">
                                <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                                <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                                <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                            </div>
                        </article>

                    </article>

                </article>

                <article>
                    <h2 className="text-6xl font-bold pl-20 pt-12 mb-8">SALADS</h2>

                    <article className="flex flex-row justify-center items-center">
                        <img src={salad1} alt="fries"/>
                       <div className="flex flex-col justify-center items-center w-80">
                            <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                            <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                            <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                       </div>
                    </article>

                    <article className="flex flex-row justify-center items-center">
                        
                       <div className="flex flex-col justify-center items-center w-80">
                            <h3 className="font-bold text-4xl">Original Bruh’s</h3>
                            <p className="text-center my-4">Our tiktok famous Original Hot Chicken sandwiche, Served on a brioche bun w/fries, pickles, slaw & house sauce.</p>
                            <button className="bg-red-500 rounded-2xl text-white w-32 h-8">order online</button>
                       </div>

                       <img src={salad2} alt="fries"/>
                    </article>

                </article>

                <article>
                    <h2 className="text-6xl font-bold pl-20 pt-12 mb-8">SAUCES</h2>

                    <article className="grid grid-cols-4 gap-4 ">
                        <div className="flex flex-col justify-center items-center w-64">
                            <img src={sauce1} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </div>

                        <div className="flex flex-col justify-center items-center w-64">
                            <img src={sauce2} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </div>

                        <div className="flex flex-col justify-center items-center w-64">
                            <img src={sauce3} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </div>

                        <div className="flex flex-col justify-center items-center w-64">
                            <img src={sauce4} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </div>

                        <div className="flex flex-col justify-center items-center w-64">
                            <img src={sauce5} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </div>

                        <div className="flex flex-col justify-center items-center w-64">
                            <img src={sauce6} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </div>

                        <div className="flex flex-col justify-center items-center w-64">
                            <img src={sauce7} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </div>
                        
                    </article>
                </article>

                <article>
                    <h2 className="text-6xl font-bold pl-20 pt-12 mb-8">SIDES</h2>
                    <article className="flex flex-row px-40">
                        <article className="flex flex-col justify-center items-center w-64">
                            <img src={sides1} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </article>

                        <article className="flex flex-col justify-center items-center w-64">
                            <img src={sides2} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </article>

                        <article className="flex flex-col justify-center items-center w-64">
                            <img src={sides1} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </article>

                        <article className="flex flex-col justify-center items-center w-64">
                            <img src={sides2} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </article>

                    </article>
                </article>

                <article>
                    <h2 className="text-6xl font-bold pl-20 pt-12 mb-8">DRINKS</h2>
                    <article className="flex flex-row justify-between">
                        <article className="flex flex-col justify-center items-center w-64">
                            <img src={coke} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </article>

                        <article className="flex flex-col justify-center items-center w-64">
                            <img src={coke} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </article>

                        <article className="flex flex-col justify-center items-center w-64">
                            <img src={coke} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </article>

                        <article className="flex flex-col justify-center items-center w-64">
                            <img src={coke} alt=""/>
                            <h3>Orginal Bruh Sauce</h3>
                        </article>

                    </article>
                </article>


            </article>

        </section>
    )

}

export default Menu;