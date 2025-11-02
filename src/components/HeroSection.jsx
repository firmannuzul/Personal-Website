import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return (
    <section
     id="hero"
     className="relative min-h-screen flex flex-col items-center justify-center px-4"
     >
        {/* <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                         {" "}
                         Firman
                         </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                         {""}
                        Nuzul
                         </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                Building scalable, high-performance web solutions through clean architecture,
                modern frameworks, and efficient full-stack engineering.
                </p>
                

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="hero-section-img">
            <img src="/hero.png" alt="herosection" />
        </div> */}

<div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-12">
  {/* Bagian Tulisan */}
  <div className="text-center md:text-left md:w-1/2 space-y-6 z-10">
    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
      <span className="opacity-0 animate-fade-in">Hi, I'm</span>
      <span className="text-primary opacity-0 animate-fade-in-delay-1"> Firman</span>
      <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Nuzul</span>
    </h1>

    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
      Building scalable, high-performance web solutions through clean architecture,
      modern frameworks, and efficient full-stack engineering.
    </p>

    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
      <a href="#projects" className="cosmic-button">
        View My Work
      </a>
    </div>
  </div>

  {/* Bagian Gambar */}
  <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
    <img
      src="/hero.png"
      alt="herosection"
      className="w-64 md:w-96 object-contain animate-fade-in-delay-3"
    />
  </div>
</div>



























        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-primary-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" /> 
        </div>
     </section>
    )
}