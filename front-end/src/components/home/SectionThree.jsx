import React from 'react';

function SectionThree() {
  const sectionThree = {
    img1: '../../../public/pc.jpg', // Vous pouvez ajouter une URL d'image ici
    img2: '../../../public/telephone.jpg', // Vous pouvez ajouter une URL d'image ici
    title: 'Comment ça fonctionne',
    etap: [
      'Choisissez un artisan en fonction de ses compétences, de sa localisation et de ses réalisations.',
      'Contactez plusieurs artisans pour recevoir des propositions adaptées à vos besoins.',
      'Comparez les offres, discutez avec les artisans et gérez tout directement sur la plateforme.'
    ]
  };

  return (
    <div className='container grid grid-cols-2 gap-4 py-16'>
        {/* Section pour les photos */}
        <div className='relative px-5'>
        <img
          src={sectionThree.img1}
          alt="Illustration 1"
          className="w-[98%] h-[470px] border rounded-xl"
        />
        <img
          src={sectionThree.img2}
          alt="Illustration 2"
          className="absolute w-45 h-40  rounded-xl top-0.5 right-8 border-white border-4 "
        />
      </div>

      {/* Section pour le texte */}
      <div>
        <h1 className="text-2xl font-bold  pb-10 pl-4">{sectionThree.title}</h1>
        <div className="flex flex-col gap-6 font-semibold">
          {sectionThree.etap.map((etape, index) => (
            <div key={index} className="flex  items-center gap-2">
              <span className="text-white border rounded-full py-2 px-4 text-center  bg-primary  mr-2">{index + 1}</span>
              <p className='leading-9'>{etape}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
