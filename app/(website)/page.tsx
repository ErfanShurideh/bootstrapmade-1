import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
   CheckCheck,
   ChevronsRight,
   FileText,
   Headset,
   Menu,
   Smile,
   UsersRound,
} from "lucide-react";

const page = () => {
   return (
      <section>
         <header className="text-[#444444]">
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
            
         </main>
         <footer></footer>
      </section>
   );
};

export default page;
