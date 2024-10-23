
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './ASSETS/logo.png'
import hero from './ASSETS/Untitled design(2).png'
import heading from './ASSETS/THE OG OF.png'
import pepper from './ASSETS/peps.png'
import { motion } from "framer-motion"
import hero2 from './ASSETS/_e3ad8435-fa17-4a86-a56a-a134d703cf7d.jpeg'
import hero3 from './ASSETS/burger smile.jpg'
import sandwhich from './ASSETS/burger.png'
import meal2 from './ASSETS/meal22.png'
import meal3 from './ASSETS/meal33.png'
import bruhz from './ASSETS/bruhs.png'
import frozen_food from './ASSETS/bruh-frozen food.png'
import cool_chicken from './ASSETS/coolchicken.png'
import logo_white from './ASSETS/logo(white).png'
import certified from './ASSETS/certified b .png'
import logo3 from './ASSETS/bruhs2.png';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import About from './About';
import Menu from './Menu';
import Franchising from './Franchising';
import Locations from './Locations';


function App() {
  return (
    <Router>
      <main className="border border-black bg-dark_purple overflow-hidden">
        <header className='flex flex-row  justify-between items-center bg-gradient-to-tr from-dark_purple to-yellow-400'>
          <img src={logo} alt='' className='w-44 h-20 '/>
          <nav className=' w-98  h-8 '>
            <ul className='flex flex-row justify-between relative z-50 '>
              <li className='ml-2'>
                <Link to="/">
                  HOME
                </Link>
              </li>
              <li className='ml-4'><Link to="/about">ABOUT</Link></li>
              <li><Link to="/menu">MENU</Link></li>
              <li><Link to="/franchising">FRANCHISING</Link></li>
              <li><Link to="/locations">LOCATIONS</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/franchising" element={<Franchising/>}/>
          <Route path="/locations" element={<Locations/>}/>
          
        </Routes>

        <footer className='flex flex-row justify-between items-center bg-black text-white'>
        <div className='flex flex-col h-44'>
          <img src={logo_white} alt='' className='w-40'/>
          <img src={certified} alt='' className='w-32'/>
        </div>
        <ul className='flex flex-row justify-between w-98'>
          <li><Link to="/about">ABOUT US</Link></li>
          <li><Link to="/menu">ORDER ONLINE</Link></li>
          <li><Link to="/menu">MENU</Link></li>
          <li><Link to="/franchising">FRANCHISING</Link></li>
          <li><Link to="/franchising">INVEST</Link></li>
        </ul>
        <div className='flex flex-row justify-between w-72 h-8'>
          <FaFacebook size={30}/>
          <FaTwitter size={30}/>
          <FaInstagram size={30}/>
          <FaTiktok size={30}/>
        </div>

      </footer>
      </main>
      
    </Router>
    
      
      
  );
}

const Home = () => {
  return (
    <section>
      <motion.div
      initial={{ y: -100, opacity: 0 }} // Start above the screen
      animate={{ y: 500, opacity: 1 }}  // Move down by 500px
      transition={{ duration: 5, ease: "easeOut" }} // 5 seconds duration, slowing down 
      >

        <img src={pepper} alt='' className='-mt-96 mx-auto relative top-36 '/>

      </motion.div>
      
      <img src={heading} alt='' className="-mt-52 -mb-100 mx-auto "/>
      <img src={hero} alt='' className=' w-full h-600  mx-auto'/>
      <div className='flex flex-row mx-auto  w-96 -mb-100'>
        <button className='h-12 w-48 bg-orange-400 rounded-3xl'>Order Online</button>
        <button className='h-12 w-48 bg-green-700 rounded-3xl'>Pick Up</button>
      </div>

      <div id='overlay' className='relative top-97 h-500 bg-black opacity-50 z-10'></div>

      <img src={hero2} alt='' className=' h-500'/>
      <img src={hero3} alt='' className='relative bottom-97 h-500 w-350 ml-auto'/>
      <h2 className='text-white text-9xl relative bottom-98 text-center z-50'>GOOD SMILE</h2>
      <img src={logo3} alt='' className='w-96 h-48 mx-auto relative bottom-98 z-50 -mb-101'/>
      <div className='overflow-hdden text-white'>
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
      

      

      <article className='flex flex-col justify-center items-center bg-white'>
        <div className='flex flex-row justify-between  w-1000'>
        
          <img src={sandwhich} alt='' className='w-480 h-480'/>
        
          <div  className='h-480 w-480 p-4'>

            <h2 className='text-3xl font-bold mt-12 leading-10'>TRY OUR TIKTOK FAMOUS BRUHS SPICY CHICKEN SANDWHICH MEAL!</h2>

            <p className='my-4'>Enjoy our organic, alll natural spicy chicken sandwhiches, kettle cooked to perfection, topped with our signature bruh's sauce, creamy cheese sauce fresh kalesaw and our Ticktok famous cripsy house made pickles. All served on a perfectly toasted brioche bun. Served with curly or waffle fries everyday</p>

            <button className='w-44 h-12 bg-red-500 rounded-3xl mt-4'>ORDER NOW</button>
          </div>
        </div>

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
            <img className='inline-block' src={bruhz} alt=''/>
            <img className='inline-block' src={bruhz} alt=''/>
          </motion.div>
        </div>

        <div className='flex flex-row justify-between w-1000'>
        
          <div  className='h-480 w-480 p-4'>

            <h2 className='text-3xl font-bold mt-28 leading-10'>CHICKEN TENDERONI'S MEAL</h2>

            <p className='my-4'>Enjoy our organic, alll natural spicy chicken sandwhiches, kettle cooked to perfection, topped with our signature bruh's sauce, creamy cheese sauce fresh kalesaw and our Ticktok famous cripsy house made pickles. All served on a perfectly toasted brioche bun. Served with curly or waffle fries everyday</p>

            <button className='w-44 h-12 bg-red-500 rounded-3xl mt-4' >ORDER NOW</button>
          </div>

          <img src={meal2} alt=''className='w-480 h-480'/>
        </div>

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
            <img className='inline-block' src={bruhz} alt=''/>
            <img className='inline-block' src={bruhz} alt=''/>
          </motion.div>
        </div>
      
        <div className='flex flex-row justify-between w-1000'>
        
          <img src={meal3} alt=''className='w-480 h-480'/>
        
          <div  className='h-480 w-480 p-4'>

            <h2 className='text-3xl font-bold mt-28 leading-10'>TRY OUR FINGER LICKING CHICKEN SALAD!</h2>

            <p className='my-4'>Enjoy our organic, alll natural spicy chicken sandwhiches, kettle cooked to perfection, topped with our signature bruh's sauce, creamy cheese sauce fresh kalesaw and our Ticktok famous cripsy house made pickles. All served on a perfectly toasted brioche bun. Served with curly or waffle fries everyday</p>

            <button className='w-44 h-12 bg-red-500 rounded-3xl mt-4'>ORDER NOW</button>
          </div>
        </div>

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
            <img className='inline-block' src={bruhz} alt=''/>
            <img className='inline-block' src={bruhz} alt=''/>
          </motion.div>
        </div>
      

      </article>
      <article className='flex flex-row justify-between py-12 px-32 text-white h-480'>

        <div className='w-96 h-480'>
          <h3 className='text-3xl font-bold  leading-10'>JUST WHEN YOU THOUGHT IT COULDN'T GET ANY BETTER</h3>

          <p className='my-8'> IT GOT BETTER! We pride ourselves in offering our customers 100% all day everyday</p>

          <button  className='w-44 h-12 bg-red-500 rounded-3xl mt-4'>PRE ORDER</button>
        </div>

        <div>
          <img src={frozen_food} alt='' className='h-80 w-620'/>
          <h3 className='text-xl font-bold text-center mt-4'>SOON TO BE IN YOUR FROZEN FOOD AISLE</h3>
        </div>
      </article>

      <article className='flex flex-row justify-between bg-white py-12 px-32'>

        <div className='h-480 w-480'>
          <h3 className='text-3xl font-bold  leading-10 mt-32'>FARM RAISED. 100% NATURAL <br/>
          MADE IN CALIFORNIA</h3>

          <p className='mt-4 mb-12'>100% farm raised chickens and organic ingredients no gimmicks </p>
          <a href='www.example.com' className='text-red-500 underline'>FIND OUT MORE INFORMATION</a>
        </div>
        <img src={cool_chicken} alt='' className='h-480 w-620'/>
      </article>

      
    </section>
  )
}

export default App;
