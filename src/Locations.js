import React from "react";
import sf from './ASSETS/SAN FRANSICO.png'
import oakland from './ASSETS/oakland.png'
import lasVegas from './ASSETS/las vegas.png'
import LA from './ASSETS/LA.png'
import vinceBeach from './ASSETS/venice.png'
import carson from './ASSETS/city of carson.png'
import vendors from './ASSETS/vendors.png'
import locationheading from './ASSETS/locationheading.png'

const Locations = () => {

    return (
        <section className="p-8">
            <img src={locationheading} alt="location heading"/>
            <article className="grid grid-cols-3 gap-4">

                <article className="flex flex-col justify-center items-center border border-gray-300 w-96.5 rounded-2xl">
                    <h2 className="text-white text-3xl">SAN FRANCISCO</h2>
                    <img className="w-96 my-4" src={sf} alt="san francisco"/>
                    <h3 className="text-red-600 text-3xl">CLOSED</h3>
                    <img className="w-80 my-4" src={vendors} alt="food vendors"/>
                </article>

                <article className="flex flex-col justify-center items-center border border-gray-300 w-96.5 rounded-2xl">
                    <h2 className="text-white text-3xl">OAKLAND</h2>
                    <img className="w-96 my-4" src={oakland} alt="san francisco"/>
                    <h3 className="text-red-600 text-3xl">CLOSED</h3>
                    <img className="w-80 my-4" src={vendors} alt="food vendors"/>
                </article>

                <article className="flex flex-col justify-center items-center border border-gray-300 w-96.5 rounded-2xl">
                    <h2 className="text-white text-3xl">LAS VEGAS</h2>
                    <img className="w-96 my-4" src={lasVegas} alt="san francisco"/>
                    <h3 className="text-red-600 text-3xl">CLOSED</h3>
                    <img className="w-80 my-4" src={vendors} alt="food vendors"/>
                </article>

                <article className="flex flex-col justify-center items-center border border-gray-300 w-96.5 rounded-2xl">
                    <h2 className="text-white text-3xl">CARSON</h2>
                    <img className="w-96 my-4" src={carson} alt="san francisco"/>
                    <h3 className="text-red-600 text-3xl">CLOSED</h3>
                    <img className="w-80 my-4" src={vendors} alt="food vendors"/>
                </article>

                <article className="flex flex-col justify-center items-center border border-gray-300 w-96.5 rounded-2xl">
                    <h2 className="text-white text-3xl">LOS ANGLELES</h2>
                    <img className="w-96 my-4" src={LA} alt="san francisco"/>
                    <h3 className="text-red-600 text-3xl">CLOSED</h3>
                    <img className="w-80 my-4" src={vendors} alt="food vendors"/>
                </article>

                <article className="flex flex-col justify-center items-center border border-gray-300 w-96.5 rounded-2xl">
                    <h2 className="text-white text-3xl">VENICE BEACH</h2>
                    <img className="w-96 my-4" src={vinceBeach} alt="san francisco"/>
                    <h3 className="text-red-600 text-3xl">CLOSED</h3>
                    <img className="w-80 my-4" src={vendors} alt="food vendors"/>
                </article>


            </article>
            
        </section>
    )

}

export default Locations;