import Image from "next/image";
import React from "react";
  export default function Home(){
  return (
    <div className="h-screen bg-slate-50">
    <header className="bg-white shadow">
      <div className=" container mx-auto px-6 py-4 flex justify-between items-center">
        <Image src="/ddsgnrimage.jpg" alt="ddsgnr" width={130.6} height={16} />
        <nav className="flex space-x-20">
        <button className=" px-6 py-4 space-x-12 ">
          <a className="text-slate-950 hover:text-red-500">Home</a>
          <a className="text-slate-950 hover:text-red-500">Courses</a>
          <a className="text-slate-950 hover:text-red-500">Services</a>
          <a className="text-slate-950 hover:text-red-500">Achievement</a>
          <a className="text-slate-950 hover:text-red-500">About Us</a>
          <a className="text-slate-950 hover:text-red-500">Testimonial</a></button>
        </nav>
        <div className="flex space-x-4">
          <button className="text-slate-950 px-4 py-2 rounded bg-slate-50 border: black outline hover:text-blue-500 ">Login</button>
          <button className="text-white px-4 py-2 rounded bg-slate-950 hover:text-blue-500">Sign Up</button>
          </div>
          </div>
          </header>
         <div className="flex h-screen">
        <div className="line-height-[24px] justify-center items-start m-48">
        <h1 className="text-[50px] font-bold text-slate-950">Learn new skills</h1>
        <h1 className="text-[50px] font-bold text-slate-950">online with ease</h1>
        <p className="text-[23px] text-slate-950 p-4">Discover a wide range of courses covering a varity of subjects,taught by the expert instructors</p>
        <div className="flex space-x-10 p-4">
          <button className="text-slate-50 bg-slate-950 px-10 py-4 rounded hover:text-blue-500">Start learning now</button>
          <button className="text-slate-950 bg slate-50 px-10 py-4 rounded border: black outline hover:text-blue-500">Explore courses </button>
        </div>
        </div>
          <div>
          <div style={{ display:'flex',justifyContent:'flex-end'}}>
          <Image src="/figma.jpg" alt="images" width={640} height={800} ></Image>
          </div>
          </div>
          </div>
          <div className="h-screen bg-slate-50">
            <div>
            <h2 className="text-[50px] font-bold text-slate-950  text-center">Explore Courses By Category</h2>
            <p className="text-[20px] text-slate-950  p-4 text-center">Discover a wide range of coursescovering a variety of subjects,taught by the expert instructors.</p>
            <Image src={"/courses.jpg"} alt="courses" width={1300} height={800}></Image>
          </div>
          </div>
          <div className="h-screen bg-slate-50">
            <div className="font-bold text-[50px]">
              <h1 className="text-slate-950 text-center"> Our Achivements</h1></div>
            <p className="text-[26px] text-slate-950 justify-item-center px-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra </p>
            <p className="text-slate-950 px-96 text-[26px]">ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
           <div className="flex  space-x-18 text-slate-950">
            <h1 className="text-[44px] p-28 font-bold">+200<br />Courses</h1>
            <h1 className="text-[44px] p-28 font-bold">500K <br />Mentors</h1>
            <h1 className="text-[44px] p-28 font-bold">370K<br />Students</h1>
            <h1 className="text-[44px] p-28 font-bold">100+<br />Recognition</h1>
            </div>
            </div>

          <div className="h-screen width-100 bg-slate-50">
            <div className="text-slate-950">
              <h1 className="font-bold text-[50px] text-center">Courses</h1>
              <p className="text-slate-950 text-[20px] text-center">Your Ultimate Guide To Learning</p>
              <div>
                  <button className="text-slate-950 text-[20px] space-x-40 px-96 py-12">
                    <a className="text-slate-950 hover:text-red-400 ">Popular</a>
                    <a className="text-slate-950 hover:text-red-400" >Recommanded</a>
                    <a className="text-slate-950 hover:text-red-400" >Best Price</a>
                  </button>
              </div>
              
            </div>
            <section className="bg-slate-50 py-12">
              <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 shadow-lg gap-8 rounded-lg">
                
            <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden">
              <Image src="/firstimage.jpg" alt="firstimage" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-950">UX/UI Design 201</h3>
                <p className="text-slate-950">Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Suspendisse varius enim in eros.</p>
            <button className="text-slate-950 border: black outline rounded-lg p-1">Enroll Now</button>
            </div>
            </div>
            
            <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden">
              <Image src="/secondimage.jpg" alt="secondimage" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-950">Introduction to Python</h3>
                <p className="text-slate-950">Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Suspendisse varius enim in eros.</p>
             <button className="text-slate-950 border:black outline p-1 rounded-lg">Enroll Now</button>
              </div>
            </div>
          
            <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden">
              <Image src="/thirdimage.jpg" alt="thirdimage" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-950">Data Analysis for Beginners</h3>
                <p className="text-slate-950">Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Suspendisse varius enim in eros.</p>
              <button className="text-slate-950 border:black outline p-1 rounded-lg">Enroll Now</button>
              </div>
            </div>
            
            <div className=" bg-slate-50 rounded-lg shadow-lg overflow-hidden">
              <Image src="/fourthimage.jpg" alt="fourthimage" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-950">Art Specilization</h3>
                <p className="text-slate-950">Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Suspendisse varius enim in eros.</p>
              <button className="text-slate-950 border:black outline rounded-lg p-1">Enroll Now </button>
              </div>
              </div>
              
            <div className=" bg-slate-50 rounded-lg shadow-lg overflow-hidden">
              <Image src="/fifthimage.jpg" alt="fifthimage" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-bold text-slate-950">Rule of law</h3>
                <p className="text-slate-950">Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit. Suspendisse varius enim in eros.</p>
              <button className="text-slate-950 border:black outline rounded-lg p-1">Enroll Now</button>
              </div>
                  </div>
                  <div className="bg-slate-50 rounded-lg shadow-lg overflow-hidden">
                    <Image src="/sixthimage.jpg" alt="sixthimage" className="w-full h-64 object-cover" />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-slate-950">Introduction to webflow</h3>
                      <p className="text-slate-950">Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Suspendisse varius enim in eros.</p>
                    <button className="text-slate-950 border:black outline rounded-lg p-1">Enroll Now</button>
                    </div>
                  </div>
                  </div>
                  </div>
              </section>
          </div>
          
          </div>
          
  )


}

