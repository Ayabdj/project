import AdvancedSearch from "./AdvancedSearch";
import img1 from "../../../public/Rectangle 119.png"
function SectionOne  ()  {
  return (
    <>
      <section 
        className="min-h-screen relative py-2 "
        style={{
          backgroundImage: `url(${img1})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      ><section className="container">
        <div className=" w-full flex-col z-10 flex justify-center items-center sm:px-4 pt-44 relative pb-16 mb-80 md:mb-28">
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-semibold max-w-4xl text-center text-white">
            Trouvez des artisans de confiance pour vos besoins avec DZ Artisan
          </h1>
        </div>
        <AdvancedSearch /></section>
      </section>
    </>
  );
}

export default SectionOne;
