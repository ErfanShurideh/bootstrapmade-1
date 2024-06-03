import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
   CheckCheck,
   ChevronsRight,
   Circle,
   Dribbble,
   Earth,
   FileText,
   Gauge,
   Headset,
   Menu,
   MonitorPlay,
   Play,
   Quote,
   Smile,
   Tent,
   UsersRound,
} from "lucide-react";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import image from "../../public/testimonials-5.jpg";

const page = () => {
   return (
      <section>
         <header className="text-dark-brown">
            <div className="container flex justify-between items-center py-4">
               {/* Logo */}
               <div className="font-bold text-2xl text-slate-900">MULTI</div>
               {/* Menu section */}
               <div>
                  {/* mobile menu */}
                  <div className="lg:hidden">
                     <Sheet>
                        <SheetTrigger className="flex justify-center items-center">
                           <Menu />
                        </SheetTrigger>
                        <SheetContent>
                           <ul className="w-full flex flex-col py-10 gap-y-6">
                              <li className="w-full text-primary">Home</li>
                              <li className="w-full">About</li>
                              <li className="w-full">Services</li>
                              <li className="w-full">Portfolio</li>
                              <li className="w-full">Drop Down</li>
                              <li className="w-full">Contact</li>
                              <li className="w-full mt-2">
                                 <button className="w-full py-2 px-4 text-left text-white bg-primary rounded-md">
                                    Get Started
                                 </button>
                              </li>
                           </ul>
                        </SheetContent>
                     </Sheet>
                  </div>
                  {/* desctop menu */}
                  <div className="hidden lg:block">
                     <ul className="flex justify-center items-center gap-x-4">
                        <li className="px-2 text-primary">Home</li>
                        <li className="px-2">About</li>
                        <li className="px-2">Services</li>
                        <li className="px-2">Portfolio</li>
                        <li className="px-2">Drop Down</li>
                        <li className="px-2">Contact</li>
                        <li className="px-2 flex justify-center items-center">
                           <button className="py-2 px-4 text-left text-white bg-primary rounded-md">
                              Get Started
                           </button>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </header>
         <main>
            {/* Introduction */}
            <section></section>
            {/* About Us */}
            <section className="container flex flex-col justify-center items-start gap-y-14 py-14">
               <div>
                  <span className="text-sm text-[#aaaaaa] tracking-widest relative after:absolute after:-right-32 after:top-1/3 after:w-28 after:mt-0.5 after:h-[1px] after:bg-primary">
                     ABOUT
                  </span>
                  <h2 className="font-extrabold text-3xl text-dark-blue pt-2">
                     ABOUT US
                  </h2>
               </div>
               <div className="text-dark-brown text-opacity-85 flex flex-col lg:flex-row justify-center items-start gap-x-8 gap-y-10">
                  <div className="flex flex-col flex-1">
                     <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     </p>
                     <ul className="flex flex-col justify-center items-start gap-y-3 mt-4">
                        <li className="flex justify-start items-start">
                           <span className="text-primary">
                              <CheckCheck className="w-5" />
                           </span>
                           <p className="ml-2">
                              Ullamco laboris nisi ut aliquip ex ea commodo consequat
                           </p>
                        </li>
                        <li className="flex justify-start items-start">
                           <span className="text-primary">
                              <CheckCheck className="w-5" />
                           </span>
                           <p className="ml-2">
                              Duis aute irure dolor in reprehenderit in voluptate velit
                           </p>
                        </li>
                        <li className="flex justify-start items-start">
                           <span className="text-primary">
                              <CheckCheck className="w-5" />
                           </span>
                           <p className="ml-2">
                              Ullamco laboris nisi ut aliquip ex ea commodo consequat
                           </p>
                        </li>
                     </ul>
                  </div>
                  <div className="flex flex-col justify-center items-start flex-1">
                     <p className="">
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum.
                     </p>
                     <button className="px-10 py-2 mt-6 border-2 border-primary rounded-md text-primary text-sm transition-all duration-300 hover:bg-primary hover:text-white">
                        Learn More
                     </button>
                  </div>
               </div>
               <div className="w-full grid grid-cols-4 gap-6 text-dark-brown text-opacity-85">
                  <div className="col-span-4 md:col-span-2 lg:col-span-1 px-6 py-6 shadow-xl">
                     <div className="flex justify-start items-center gap-x-4">
                        <span className="text-primary">
                           <Smile className="size-9" />
                        </span>
                        <span className="pb-5 font-bold text-4xl text-darker-blue">
                           232
                        </span>
                     </div>
                     <div>
                        <p className="text-sm">
                           <span className="font-bold mr-1">Happy Clients</span>
                           consequuntur quae qui deca rode
                        </p>
                     </div>
                     <div className="flex items-center gap-x-1.5 mt-4 font-semibold text-sm text-dark-blue">
                        Fine out More
                        <ChevronsRight className="size-3" />
                     </div>
                  </div>
                  <div className="col-span-4 md:col-span-2 lg:col-span-1 px-6 py-6 shadow-xl">
                     <div className="flex justify-start items-center gap-x-4">
                        <span className="text-primary">
                           <FileText className="size-9" />
                        </span>
                        <span className="pb-5 font-bold text-4xl text-darker-blue">
                           232
                        </span>
                     </div>
                     <div>
                        <p className="text-sm">
                           <span className="font-bold mr-1">Projects</span>
                           adipisci atque cum quia aut numquam delectus
                        </p>
                     </div>
                     <div className="flex items-center gap-x-1.5 mt-4 font-semibold text-sm text-dark-blue">
                        Fine out More
                        <ChevronsRight className="size-3" />
                     </div>
                  </div>
                  <div className="col-span-4 md:col-span-2 lg:col-span-1 px-6 py-6 shadow-xl">
                     <div className="flex justify-start items-center gap-x-4">
                        <span className="text-primary">
                           <Headset className="size-9" />
                        </span>
                        <span className="pb-5 font-bold text-4xl text-darker-blue">
                           232
                        </span>
                     </div>
                     <div>
                        <p className="text-sm">
                           <span className="font-bold mr-1">Hours Of Support</span>
                           aut commodi quaerat. Aliquam ratione
                        </p>
                     </div>
                     <div className="flex items-center gap-x-1.5 mt-4 font-semibold text-sm text-dark-blue">
                        Fine out More
                        <ChevronsRight className="size-3" />
                     </div>
                  </div>
                  <div className="col-span-4 md:col-span-2 lg:col-span-1 px-6 py-6 shadow-xl">
                     <div className="flex justify-start items-center gap-x-4">
                        <span className="text-primary">
                           <UsersRound className="size-9" />
                        </span>
                        <span className="pb-5 font-bold text-4xl text-darker-blue">
                           232
                        </span>
                     </div>
                     <div>
                        <p className="text-sm">
                           <span className="font-bold mr-1">Hard Workers</span>
                           rerum asperiores dolor molestiae doloribu
                        </p>
                     </div>
                     <div className="flex items-center gap-x-1.5 mt-4 font-semibold text-sm text-dark-blue">
                        Fine out More
                        <ChevronsRight className="size-3" />
                     </div>
                  </div>
               </div>
            </section>
            {/* Why Us */}
            <section className="flex flex-col lg:flex-row">
               {/* video */}
               <div className="h-[400px] lg:h-auto lg:w-[500px] xl:w-[600px] flex justify-center items-center bg-whyus bg-center bg-cover">
                  <a
                     href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                     className="size-16 flex justify-center items-center rounded-full bg-primary ring-[12px] ring-[rgba(237,80,43,0.4)] transition duration-300 hover:scale-125">
                     <Play className="fill-white size-8 text-primary" />
                  </a>
               </div>
               {/* description */}
               <div className="lg:flex-1 bg-[#F7F9FD] px-2 lg:px-6 xl:px-20 py-8 lg:py-10 xl:py-12">
                  <h3 className="font-normal text-3xl text-dark-blue leading-[44px]">
                     Eum ipsam laborum deleniti
                     <span className="font-bold ml-1">velit pariatur architecto</span>
                  </h3>
                  <p className="text-sm text-dark-brown text-opacity-75 leading-[22px] py-2">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                     eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
                     irure dolor in reprehenderit
                  </p>
                  <div>
                     <Accordion
                        className="flex flex-col gap-y-4 mt-2"
                        type="single"
                        collapsible>
                        <AccordionItem
                           className="px-4 py-2 border-0 bg-white rounded-md"
                           value="item-1">
                           <AccordionTrigger className="flex justify-between gap-x-4 items-start text-left text-darker-blue [&>svg]:size-5 transition duration-300 hover:no-underline hover:text-primary">
                              <span className="dec">
                                 <span className="font-bold text-primary mr-2">01</span>
                                 Non consectetur a erat nam at lectus urna duis?
                              </span>
                           </AccordionTrigger>
                           <AccordionContent className="text-base text-dark-brown">
                              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                              volutpat lacus laoreet non curabitur gravida. Venenatis
                              lectus magna fringilla urna porttitor rhoncus dolor purus
                              non.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                           className="px-4 py-2 border-0 bg-white rounded-md"
                           value="item-2">
                           <AccordionTrigger className="flex justify-between gap-x-4 items-start text-left text-darker-blue [&>svg]:size-5 transition duration-300 hover:no-underline hover:text-primary">
                              <span className="dec">
                                 <span className="font-bold text-primary mr-2">02</span>
                                 Feugiat scelerisque varius morbi enim nunc?
                              </span>
                           </AccordionTrigger>
                           <AccordionContent className="text-base text-dark-brown">
                              Dolor sit amet consectetur adipiscing elit pellentesque
                              habitant morbi. Id interdum velit laoreet id donec ultrices.
                              Fringilla phasellus faucibus scelerisque eleifend donec
                              pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                              ultrices eros in cursus turpis massa tincidunt dui.
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem
                           className="px-4 py-2 border-0 bg-white rounded-md"
                           value="item-3">
                           <AccordionTrigger className="flex justify-between gap-x-4 items-start text-left text-darker-blue [&>svg]:size-5 transition duration-300 hover:no-underline hover:text-primary">
                              <span className="dec">
                                 <span className="font-bold text-primary mr-2">03</span>
                                 Dolor sit amet consectetur adipiscing elit?
                              </span>
                           </AccordionTrigger>
                           <AccordionContent className="text-base text-dark-brown">
                              Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                              sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                              nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                              pellentesque eu tincidunt. Lectus urna duis convallis
                              convallis tellus. Urna molestie at elementum eu facilisis
                              sed odio morbi quis
                           </AccordionContent>
                        </AccordionItem>
                     </Accordion>
                  </div>
               </div>
            </section>
            {/* chech our services */}
            <section className="container">
               <div className="py-10">
                  <span className="text-sm text-[#aaaaaa] tracking-widest relative after:absolute after:-right-32 after:top-1/3 after:w-28 after:mt-0.5 after:h-[1px] after:bg-primary">
                     SERVICES
                  </span>
                  <h2 className="font-extrabold text-3xl text-dark-blue leading-[44px] pt-1">
                     CHECK OUR SERVICES
                  </h2>
               </div>
               <div className="grid grid-cols-6 gap-6 pb-14">
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <Dribbble className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Lorem Ipsum
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias
                        excepturi
                     </p>
                  </div>
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <FileText className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Sed ut perspiciatis
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore
                     </p>
                  </div>
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <Gauge className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Magni Dolores
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia
                     </p>
                  </div>
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <Earth className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Nemo Enim
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                        blanditiis
                     </p>
                  </div>
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <MonitorPlay className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Dele cardo
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        Quis consequatur saepe eligendi voluptatem consequatur dolor
                        consequuntur
                     </p>
                  </div>
                  <div className="h-[330px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col justify-center items-center shadow-xl px-6 transition-all duration-300 hover:bg-primary [&>div>#iconBox]:hover:bg-white [&>div>#iconBox>svg]:hover:text-primary [&>h5]:hover:text-white [&>p]:hover:text-white">
                     <div className="w-16 h-[66px] relative z-20 after:absolute after:-z-10 after:-top-2 after:-left-2 after:w-16 after:h-[66px] after:bg-[rgb(249,198,187)] after:rounded-md">
                        <div
                           id="iconBox"
                           className="w-full h-full flex justify-center items-center bg-primary rounded-md overflow-hidden transition duration-300">
                           <Tent className="size-7 text-white transition dura" />
                        </div>
                     </div>
                     <h5 className="py-4 font-bold text-2xl text-darker-blue transition duration-300">
                        Divera don
                     </h5>
                     <p className="text-center text-sm text-dark-brown text-opacity-85 transition duration-300">
                        Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit
                        aspernatur
                     </p>
                  </div>
               </div>
            </section>
            {/* testimonials */}
            <section className="bg-[#F7F9FD]">
               <section className="container">
                  <div className="py-14">
                     <span className="text-sm text-[#aaaaaa] tracking-widest relative after:absolute after:-right-32 after:top-1/3 after:w-28 after:mt-0.5 after:h-[1px] after:bg-primary">
                        TESTIMONIALS
                     </span>
                     <h2 className="font-extrabold text-3xl text-dark-blue pt-2">
                        TESTIMONIALS
                     </h2>
                  </div>
                  <div className="xl:flex xl:justify-center xl:items-center xl:gap-x-10">
                     <div className="xl:flex-1 pl-10">
                        <div className="pl-14 pr-6 py-8 md:pb-20 bg-white shadow-xl relative">
                           {/* avatar */}
                           <div className="w-[80px] h-[80px] absolute top-9 -left-10 rounded-md overflow-hidden ring-4 ring-white rotat">
                              <Image
                                 src={image}
                                 alt="testimonials-5"
                                 className="object-cover object-center"
                                 fill
                              />
                           </div>
                           <div className="pt-2 pb-4">
                              <div className="font-bold text-xl text-dark-brown">
                                 John Larson
                              </div>
                              <div className="text-sm text-dark-brown text-opacity-70">
                                 Entrepreneur
                              </div>
                           </div>
                           <div className="text-left text-dark-brown text-opacity-85 italic">
                              <div className="inline-block font-bold text-5xl text-[#f9c6bb] leading-[0px] align-top mr-1 mt-1">
                                 ،،
                              </div>
                              Quis quorum aliqua sint quem legam fore sunt eram irure
                              aliqua veniam tempor noster veniam enim culpa labore duis
                              sunt culpa nulla illum cillum fugiat legam esse veniam culpa
                              fore nisi cillum quid.
                              <div className="inline-block font-bold text-5xl text-[#f9c6bb] leading-[0px] align-bottom rotate-180 ml-1 mb-1.5">
                                 ،،
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="flex-1 pl-10 hidden xl:block">
                        <div className="pl-14 pr-6 py-8 md:pb-20 bg-white shadow-xl relative">
                           {/* avatar */}
                           <div className="w-[80px] h-[80px] absolute top-9 -left-10 rounded-md overflow-hidden ring-4 ring-white rotat">
                              <Image
                                 src={image}
                                 alt="testimonials-5"
                                 className="object-cover object-center"
                                 fill
                              />
                           </div>
                           <div className="pt-2 pb-4">
                              <div className="font-bold text-xl text-dark-brown">
                                 Matt Brandon
                              </div>
                              <div className="text-sm text-dark-brown text-opacity-70">
                                 Freelancer
                              </div>
                           </div>
                           <div className="text-left text-dark-brown text-opacity-85 italic">
                              <div className="inline-block font-bold text-5xl text-[#f9c6bb] leading-[0px] align-top mr-1 mt-1">
                                 ،،
                              </div>
                              Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                              multos export minim fugiat minim velit minim dolor enim duis
                              veniam ipsum anim sunt elit fore quem dolore labore illum
                              veniam.
                              <div className="inline-block font-bold text-5xl text-[#f9c6bb] leading-[0px] align-bottom rotate-180 ml-1 mb-1.5">
                                 ،،
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="py-16 flex justify-center items-center align-middle gap-x-2">
                     <Circle className="size-3 text-primary bg-primary rounded-full" />
                     <Circle className="size-3 text-primary" />
                     <Circle className="size-3 text-primary" />
                     <Circle className="size-3 text-primary" />
                     <Circle className="size-3 text-primary" />
                  </div>
               </section>
            </section>
            {/* Call To Action */}
            <section className="py-14 bg-darker-blue">
               <div className="container flex flex-col justify-center items-center">
                  <div className="font-bold text-2xl text-white text-center">Call To Action</div>
                  <div className="mt-3 text-white text-center">
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                     dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                     non proident, sunt in culpa qui officia deserunt mollit anim id est
                     laborum.
                  </div>
                  <button className="px-10 py-2 mt-6 border-2 border-primary rounded-md text-sm text-white">Call To Action</button>
               </div>
            </section>
            
         </main>
         <footer></footer>
      </section>
   );
};

export default page;
