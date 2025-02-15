import React from "react";
interface MentionsLegalesProps {
  setActivePage: (page: "home" | "mentions" | "confidentialite") => void;
}

const MentionsLegales: React.FC<MentionsLegalesProps> = ({ setActivePage }) => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-4 py-12 text-gray-700">
        {/* Bouton Retour */}
        <button
          onClick={() => setActivePage("home")}
          className="mb-8 text-[#9A889D] hover:text-[#7A687D] underline transition duration-300"
        >
          ← Retour à l'accueil
        </button>
        <h1 className="text-3xl font-bold text-center mb-8">
          Mentions Légales
        </h1>

        <h2 className="text-2xl font-bold mt-6 mb-4">Éditeur du site</h2>
        <p>
          Ce site est édité par :<br />
          <strong>Stéphane Godin</strong>
          <br />
          Psychologue et Hypnothérapeute
          <br />
          279 Avenue Félix Geneslay, 72100 Le Mans
          <br />
          Téléphone :{" "}
          <a
            href="tel:0632145942"
            className="text-[#9A889D] hover:text-[#7A687D]"
          >
            06.32.14.59.42
          </a>
          <br />
          E-mail :{" "}
          <a
            href="mailto:stephane.godin.pyjc@orange.fr"
            className="text-[#9A889D] hover:text-[#7A687D]"
          >
            stephane.godin.pyjc@orange.fr
          </a>
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Hébergeur du site</h2>
        <p>
          Ce site est hébergé par :<br />
          <strong>Nom de l'hébergeur</strong>
          <br />
          Adresse de l'hébergeur
          <br />
          Téléphone :{" "}
          <a href="tel:" className="text-[#9A889D] hover:text-[#7A687D]">
            XX.XX.XX.XX.XX
          </a>
          <br />
          Site web :{" "}
          <a
            href="https://www.nom-hebergeur.com"
            className="text-[#9A889D] hover:text-[#7A687D]"
          >
            www.nom-hebergeur.com
          </a>
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Activité</h2>
        <p>
          Stéphane Godin est un psychologue et hypnothérapeute indépendant,
          exerçant sous le numéro SIRET : <strong>XXX XXX XXX XXXXX</strong>.
          <br />
          Le site a pour but de présenter les services proposés et de permettre
          aux visiteurs de prendre rendez-vous.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          Propriété intellectuelle
        </h2>
        <p>
          Tous les éléments du site (textes, images, logos, etc.) sont la
          propriété exclusive de Stéphane Godin, sauf mention contraire. Toute
          reproduction, distribution ou utilisation sans autorisation est
          strictement interdite.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Responsabilité</h2>
        <p>
          Stéphane Godin ne peut être tenu responsable des dommages directs ou
          indirects résultant de l'utilisation du site ou des informations qu'il
          contient.
        </p>
      </div>
    </div>
  );
};

export default MentionsLegales;
