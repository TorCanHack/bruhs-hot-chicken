import React from "react";
import tes from './ASSETS/image.png'
import about_us_img from './ASSETS/about_us_img.png'
import team_photo from './ASSETS/team_photo.png'
import malik from './ASSETS/malik.png'
import bb from './ASSETS/burgerburger.png'
import tv from './ASSETS/tv.png'
import fire from './ASSETS/burning kicthen.jpg'
import logos from './ASSETS/demlogos.png'
import vegasfacility from './ASSETS/northvegaskitchen.png'
import beach from './ASSETS/palm trees.png'
import certified from './ASSETS/certified.png'
import hotbox from './ASSETS/bruh.boxpng.png'
import first_step from './ASSETS/first step.jpg'


const About = () => {

    return (
        <section className="bg-dark_purple py-12 px-20">
            <img src={tes} alt=""/>
         
            <div className="flex flex-row justify-between items-center py-8">
                <div className=" text-white w-620 ">
                    <p className="mb-4">AT BRUHS HOT CHICKEN, WE’RE NOT JUST REDEFINDING THE FAST CASUAL EXPERIENCE. WE’EW BRINGING A WHOLE NEW LEVEL OF FLAVOUR AND QUALITY TO THE TABLE.. OUR SECRET? IT ALL STARTS WITH OUR COMMITMENT TO USING ORGANIC, LOCALLY-SOURCHED CHECKEN THAT’S RAISED WITH CARE AND WITHOUT ANY UNNECESSARY ADDITIVES.</p> 
            
                    <p className="mb-4">bUT WE’RE NOT JUST SERVING UP DELICIOUS CHICKEN, WE’RE ALL ABOUT IGNITING YOUR TASTE BUDS WITHA FIERY EXPLOSION OF FLAVOR. OUR JOURNEY BEGAN WITH A BOLD DREAM AND $200 IN OUR POCKETS,</p>

                    <p className="mb-4">SO, WHAT MAKES OUR CHICKEN SO SPECIAL? IT’S ALL ABOUT THE PERFECT BLEND OF SPICES, THE CRISPY GOLDEN EXTERI-OR AND THE JUICY, TENDER MEAT THAT KEEPS YOU COMING BACK FOR MORE. WHETHER YOU LIKE IT MILD OR EXTRA SPICY, WE’VE GOT SOMTHING TO SATISFY EVERY CRAVING.</p>

                    <p>WHAT STARTED AS A FOOD CRAFT SERVICE FOR A MOVIE SET QUICKLY TURNED INTO A SENSATION, THANKS TO OUR AMAZING CUSTOMERS. YOUR LOVE FOR OUR HOT CHICKEN SPREAD LIKE WILDFIRE AND BEFORE WE KNEW IT, BRUHS HOT CHICKEN BECAME THE TALK OF THE TOWN.</p>

                </div>
                <img src={about_us_img} alt='' className="w-620"/>
            </div>
            <article>
                <img src={team_photo} alt='' className="w-620 mx-auto"/>

               
                <div>
                    <h2 className="text-white text-5xl text-center -mb-52 mt-20 underline decoration-wavy decoration-yellow-300">HISTORY OF BRUH'S HOT CHICKEN </h2>

                   
                    <h3 className="text-white text-5xl relative top-72 text-center">2017</h3>
                    <div className="bg-white  w-64 p-4 rounded-2xl  relative top-80 left-80 text-center">
                        <h3 className="text-2xl my-2 underline">The Journey Begins !</h3>
                        <p className="">Josue approaches multiple farms and distributors who thought the idea was crazy talk</p>
                        <img src={first_step} alt=""/>
                    </div>
                    <div id="small_line" className="bg-white h-1 w-16 relative top-56 left-97.2"></div>

                    <div className="bg-white h-44 w-52 rounded-2xl  relative top-72 left-97.7 text-center p-4">
                        <h3 className="text-2xl  underline  ">Action !</h3>
                        <p>We launch Bruh's hot chicken at a movie production set in Hollywood,CA</p>
                    </div>
                    <div id="small_line" className="bg-white h-1 w-16 relative top-40 left-97.6"></div>

                    <div className="bg-white h-48 w-72 rounded-2xl  relative top-52 left-72 p-4 text-center">
                        <h3 className="text-2xl my-2 underline">Our first Pop-Up Kitchen</h3>
                        <p>working out of a Performance shop in Los Angeles we offered Bruh’s Hot Chicken as a Late night foodie go to</p>
                    </div>
    
                    <div id="small_line" className="bg-white h-1 w-16 relative top-20 left-97.2"></div>

                    <h3 className="text-white text-5xl relative top-72 text-center">2018</h3>

                    <div  className="bg-white h-36 w-80 rounded-2xl  relative top-80 left-64 p-4 text-center">
                        <h3 className="text-2xl my-2 underline">2nd Pop-up location open</h3>
                        <p>We open a second location in the famous Fairfax District</p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-60 left-97.2"></div>

                    <img src={malik} alt="" className=" relative top-96 left-97.5 -mt-64"/>

                    <div className="flex flex-row justify-center items-center relative top-64 left-97.7 border border-white h-60 w-300 bg-white rounded-2xl p-4 overflow-hidden">

                        
                        
                        <div className="">
                            <h3 className="text-2xl my-2 underline">Malik joins the team</h3>
                            <p>Malik Joins the Team! , from MTV’s “The Real World” to starting a successful Screenprinting company working with companies such as Zappos.com, University of Berkeley , Dethrone Brands, Nike and Under Armour. Malik Brings 17 Years Experience in Marketing and Brand Management. </p>
                        </div>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-20 left-97.6"></div>

                    <h3 className="text-white text-5xl relative top-72 text-center">2019</h3>

                    <div className="bg-white h-36 w-80 rounded-2xl  relative top-80 left-64 p-4 text-center">
                        <h3 className="text-2xl my-2 underline">3rd Pop-up location open</h3>
                        <p>Berkeley , CA Artist Gathering Location (First Fridays)</p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-56 left-97.2"></div>
                    
                    

                    <h3 className="text-white text-5xl relative top-72 text-center mt-20">2020</h3>

                    <div className="relative top-80 left-97.7   h-36 w-80 rounded-2xl bg-white p-4 text-center">
                        <h3 className="text-2xl my-2 underline">80 000 orders</h3>
                        <p>We celebrate by adding a new item on our “Secret Menu” </p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-56 left-97.6"></div>

                    <div className="relative top-72 left-72 rounded-2xl bg-white p-4 text-center w-72 ">
                        <img src={bb} alt="" className=""/>
                        <div>
                            <h3  className="text-2xl my-2 underline">Sesh Foodies Award 2020</h3>
                            <p>we won 1st place in the Sesh Foodies Award 2020 “Best Chicken Product”</p>
                        </div>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-36 left-97.2"></div>

                    <div className="relative top-18 left-97.7 rounded-2xl bg-white p-4 text-center w-80">
                        <h3 className="text-2xl my-2 underline">Environment Friendly</h3>
                        <p>In working with Mass Factor Media all Bruh’s Hot Chicken packaging is 100% Recyclable and printed with biodegradeable inks </p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative -top-20 left-97.6"></div>

                    <div className="relative top-36 left-97.7 rounded-2xl bg-white p-4 text-center w-97">
                        <h3  className="text-2xl my-2 underline">Bruhs DAO Smart Contract</h3>
                        <p className="my-4">As An Experimental piece of History we Created a smart Contract on the Etherum Network. the goals of Bruhs DAO are to facilitate the tranparency of ag related and ecosystem transactions to measure and confirm the end quality of consumer goods.  Bruh’s Capsule Contract</p>
                        <h4 className="font-bold">0x8e55ae2d325c4af6327aa0ca5291b5f041821254</h4>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-20 left-97.6"></div>

                    <h3 className="text-white text-5xl relative top-48 text-center">2021</h3>

                    <div className="relative top-60 left-97.7 rounded-2xl bg-white p-4 text-center w-72">
                        <h3 className="text-2xl my-2 underline">Doordash , UberEats ChowNow , Caviar </h3>
                        <p>119,000+ ORDERS TO DATE</p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-36 left-97.6"></div>

                    <div className="relative top-60 left-72 rounded-2xl bg-white p-4 text-center w-72">
                        <h3 className="text-2xl my-2 underline">We Hit  $150,000+ in Revenue !</h3>
                        <p>Within 6 Months we Generate $150,000 in Revenue</p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-36 left-97.2"></div>

                    <div className="relative top-60 left-97.7 rounded-2xl bg-white p-4 text-center w-72">
                        <h3 className="text-2xl my-2 underline">4th Pop-up Location Opened </h3>
                        <p>Downtown Oakland Webster Location Delivery Only </p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-36 left-97.6"></div>

                    <h3 className="text-white text-5xl relative top-72 text-center">2022</h3>
                    <img src={tv} alt="" className="relative top-60 left-96.4 z-10"/>

                    <div className="relative top-20 left-97.8 rounded-2xl bg-white  text-center w-48  z-20">
                        <div>
                            
                            <p>165,000+ ORDERS</p>
                        </div>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-12 left-97.6"></div>

                    <div className="relative top-40 left-72 rounded-2xl bg-white p-4 text-center w-72">
                        <h3 className="text-2xl my-2 underline">Rolled with the punches </h3>
                        <p>The Pandemic made us shift into Delivery Only Racking in $591,000 in Sales !</p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-12 left-97.2"></div>

                    <div className="relative top-20 left-97.7 rounded-2xl bg-white p-4 text-center w-72">
                        <h3 className="text-2xl my-2 underline">Bruh’s Hot Chicken Franchise Agreements</h3>
                        <p>Restaurant Partner Program Inititated, Vetting Multiple pontetial Bruh’s Hot Chicken Owners.</p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative -top-20 left-97.6"></div>

                    <div>
                        <img src={fire} alt="" className="z-10 relative rounded-2xl"/>
                        <div className="relative -top-64 left-97.7 rounded-2xl bg-white p-4 text-center w-72">
                            <h3 className="text-2xl my-2 underline"> Kitchen fire</h3>
                            <p>We Had A grease fire at our Oakland ,CA International Blvd Ghost Kitchen. no one were hurt thank goodness. we were forced to close that location resulting in a  $-570,000 Loss.</p>
                        </div>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative -top-80 left-97.6"></div>
                    <div id="small_line" className="bg-white h-1 w-16 relative -top-81 left-97.2"></div>

                    <h3 className="text-white text-5xl relative top-0 text-center">2023</h3>

                    <div className="relative top-6  left-97.7 rounded-2xl bg-white p-4 text-center w-72">
                        <h3 className="text-2xl my-2 underline">INNOVATION !</h3>
                        <p>Thru Strategic Partnerships and our amazing Farmers collective we partake on producing a Frozen food Product all 100% Organic , Farm Fresh and Cage Free. </p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative -top-12 left-97.6"></div>

                    <div className="relative top-12 left-72 rounded-2xl bg-white p-4 text-center w-72">
                        <h3 className="text-2xl my-2 underline">285K+ Orders Sold to Date !</h3>
                        <p className="mt-4">285,920 ORDERS Via Third Party Delivery Partners </p>
                        <div>
                            <img src={logos} alt="" className="w-full h-28"/>
                        </div>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative -top-12 left-97.2"></div>

                    <h3 className="text-white text-5xl relative top-72 text-center">2024</h3>

                    <div className="relative top-96 left-97.7 rounded-2xl bg-white p-4 text-center w-72">
                        <h3 className="text-2xl my-2 underline">Carson Location Coming Soon</h3>
                        <p>We plan to Open our Carson,CA Location Q4 2024</p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-72 left-97.6"></div>

                    <div className="relative top-96 left-48 rounded-2xl bg-white p-4 text-center w-96">
                        <h3 className="text-2xl my-2 underline">Las Vegas Manufacturing Facility </h3>
                        <p>Working with our production partners in bringing Bruhs Hot Chicken to Market we have signed a lease to our first FDA Approved Manufacturing facility </p>
                        <img src={vegasfacility} alt=""/>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-72 left-97.2"></div>

                    <h3 className="text-white text-5xl relative top-97 text-center">2025</h3>

                    <div className="relative top-97 left-72 rounded-2xl bg-white p-4 text-center w-72">
                        <h3 className="text-2xl my-2 underline">Venice Beach Location Coming Soon</h3>
                        <p>thru strategic partnerships we are launching a Bruhs Hot Chicken on Venice Beach August 2024 </p>
                        <img src={beach} alt=""/>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-72 left-97.2"></div>

                    <div className="relative top-97 left-97.7 flex flex-col justify-center rounded-2xl bg-white p-4 text-center w-40">
                        <img src={certified} alt=""/>

                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-96 left-97.6"></div>

                    

                    <div className="relative top-97 left-64 rounded-2xl bg-white p-4 text-center w-80">
                        <h3 className="text-2xl my-2 underline">Public Benefit Ceritification</h3>
                        <p>In support of our mission , By 2025 we will obtain certification for Really Awesome Brands to be a Public-Benefit Corporation</p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-96.4 left-97.2"></div>

                    <div className="relative top-97.7 left-97.7 rounded-2xl bg-white p-4 text-center w-98">
                        <h3 className="text-2xl my-2 underline">Bruh’s Hot Chicken® Tenderoni’s™ </h3>
                        <p>Find Bruh’s Hot Chicken® Tenderoni’s™ At your local grocers in the Frozen Section!</p>
                        <img src={hotbox} alt=""/>
                        
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-96.4 left-97.6"></div>

                    <div className="relative top-97.7 left-72 rounded-2xl bg-white p-4 text-center w-72">
                        <h3 className="text-2xl my-2 underline">Las Vegas Manufacturing Facility </h3>
                        <p>Working with our production partners in bringing </p>
                    </div>

                    <div id="small_line" className="bg-white h-1 w-16 relative top-97 left-97.2"></div>

                    
                

                    <div className="flex bg-white h-3000 w-1 mx-auto -mt-105"></div>
                    
                    
                   
                </div>
                
            </article>
            


        </section>
    )

}

export default About;