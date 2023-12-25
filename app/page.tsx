
import Hero from "@/components/main/Hero";
import Shops from "@/components/main/Shops";
import Coffee from "@/components/main/Coffee";
import SecondHero from "@/components/main/SecondHero";


export default function Home(){
  return(
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Coffee/>
        <SecondHero/>
        <Shops/>
         
      </div>
    </main>
  )
}

