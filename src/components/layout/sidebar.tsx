
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import payingmanimage from "./../../assets/standingman.jpg";

export default function Sidebar() {
  return (
    <div className="hidden md:block w-[400px] bg-[#0e0e2c] text-white p-8 relative">
      <div className="mb-16">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-[#0e0e2c] rounded-full" />
          </div>
          <span className="text-xl font-bold">CASHEW</span>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold leading-tight">
          Welcome to <br />
          Najaf's application <br />
        </h2>

        <Link href="#" className="mt-6 inline-flex items-center text-sm hover:underline">
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-2">
        {/* <div className="grid grid-cols-2 gap-4">
          <div className="h-24 w-24 border border-white/20 rounded-md flex items-center justify-center">
            <div className="w-12 h-12 bg-white/80 rounded-full" />
          </div>
          <div className="h-24 w-24 border border-white/20 rounded-md flex items-center justify-center">
            <div className="w-12 h-12 bg-white/80 rounded-md" />
          </div> 
        </div>*/}
        
        <div className="border-t border-white/10 mt-8 pt-4 flex justify-center">
          <Image 
            src={payingmanimage}
            alt="Emirates ID Footer" 
            width={500} 
            height={150} 
            className="rounded-lg object-cover" 
          />
        </div>
      </div>
    </div>
  );
}