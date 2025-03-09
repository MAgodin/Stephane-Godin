import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown, ChevronUp } from "lucide-react";
import "./index.css";
import homePicture from "../public/home-picture.jpg";
import stephaneGodinImage from "../public/stephane-godin.png.webp";
import MentionsLegales from "./pages/MentionsLegales";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite";

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<
    "home" | "mentions" | "confidentialite"
  >("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState<"leMans" | "laval">(
    "leMans"
  );
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const smoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const maps = {
    leMans:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2672.1064581101786!2d0.2027853!3d47.9897897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e288f7d83d9999%3A0x402c8d731d6c5f0!2s279%20Av.%20F%C3%A9lix%20Geneslay%2C%2072100%20Le%20Mans!5e0!3m2!1sfr!2sfr!4v1709911444179!5m2!1sfr!2sfr",
    laval:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.9643997021158!2d-0.771895123058652!3d48.072330071236316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4808fdf14e59786d%3A0x172a94c5d007c6eb!2s26%20Rue%20Jules%20Ferry%2C%2053000%20Laval!5e0!3m2!1sfr!2sfr!4v1739705980639!5m2!1sfr!2sfr",
  };

  const accordionItems = [
    {
      title:
        "Les conditions nécessaires à la réussite d'un suivi psychologique",
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            Le suivi psychologique nécessite, comme préalable, une détermination
            sans faille de la personne à vouloir régler ses problématiques.
            Cette détermination est le facteur principal de la réussite de tout
            suivi psychologique.
          </p>
          <p>
            (Les cas de dépression nécessitent de travailler d’abord sur la mise
            en place de cette détermination.)
          </p>
          <p>Dans la pratique, la détermination se traduit par :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              Une présence assidue et régulière du patient aux rendez-vous.
            </li>
            <li>Le règlement des séances manquées.</li>
            <li>
              La mise en pratique, en dehors des séances, des méthodes et
              concepts transmis lors des rendez-vous.
            </li>
          </ul>
          <p>
            C’est sur cette détermination que s’appuient les compétences du
            thérapeute, compétences qui sont également indispensables à la
            réussite du traitement.
          </p>
          <p>
            Enfin, la relation au psychologue peut à elle seule suffire à la
            guérison, mais elle ne peut habituellement pas se passer des
            compétences du professionnel et de la détermination du patient.
          </p>
        </div>
      ),
    },
    {
      title: "Pourquoi un suivi psychologique ?",
      content: (
        <div className="space-y-4 text-gray-700">
          <p>Un suivi psychologique est utile pour :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Traiter les traumatismes psychologiques.</li>
            <li>
              Mieux se comprendre, d’élaborer et solder les problématiques
              psychiques.
            </li>
            <li>
              Mieux se vivre au quotidien, notamment pour ce qui est des
              troubles anxieux et dépressifs.
            </li>
            <li>Adresser des problématiques de couple.</li>
            <li>Agir pour se restructurer psychiquement.</li>
            <li>Apprendre à contenir sa souffrance et ses émotions.</li>
            <li>Être complémenté par une approche en hypnothérapie.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "En savoir plus sur les méthodes utilisées",
      content: (
        <div className="space-y-4 text-gray-700">
          <p>Les méthodes utilisées incluent :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              <strong>L’écoute rogérienne :</strong> Une écoute bienveillante et
              dynamique qui vise à accueillir la personne dans sa pleine
              humanité. Il ne s’agit pas d’une position où le psychologue se
              contente d’écouter sans rien dire, mais d’un suivi centré sur le
              dialogue.
            </li>
            <li>
              <strong>L’EMDR :</strong> Une thérapie psychocorporelle destinée à
              adresser les traumatismes psychiques.
            </li>
            <li>
              <strong>L’ICV (Intégration du Cycle de Vie) :</strong> Une
              thérapie de pointe pour adresser les traumatismes psychiques
              simples et complexes, permettant une intégration progressive dans
              un cours de vie normal.
            </li>
            <li>
              <strong>La TIFT :</strong> Traite le trauma en travaillant
              l’émotion et en permettant une réassociation au corps.
            </li>
            <li>
              <strong>L’Intelligence Relationnelle :</strong> S’appuie sur la
              relation au thérapeute comme base du traitement.
            </li>
            <li>
              <strong>L’hypnose ericksonienne :</strong> Permet à l’inconscient
              de trouver les ressources utiles pour solutionner nos questions,
              de façon douce et respectueuse des équilibres psychiques déjà en
              place.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Pourquoi l'hypnose ericksonienne ?",
      content: (
        <div className="space-y-4 text-gray-700">
          <p>L’hypnose ericksonienne est utile pour :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Réduire les résistances psychiques.</li>
            <li>Accéder plus facilement à l’inconscient.</li>
            <li>Apprendre à se relaxer.</li>
            <li>
              Agir sur le psychisme (confiance en soi, angoisses,
              traumatismes…).
            </li>
            <li>Être complémenté par un suivi psychologique.</li>
          </ul>
        </div>
      ),
    },
    {
      title: "En savoir plus sur l'hypnose",
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            L’hypnose est un état de conscience modifié dans lequel vous gardez
            toute votre volonté de décision. Cet état, naturel, est parfois
            qualifié d’hyper-conscience. Le sujet y est actif de sorte à
            favoriser le changement.
          </p>
        </div>
      ),
    },
    {
      title: "L'hypnose Ericksonienne",
      content: (
        <div className="space-y-4 text-gray-700">
          <p>
            L’hypnose ericksonienne est un outil dont les applications peuvent
            être thérapeutiques. En tant qu’outil thérapeutique, l’hypnose
            participe d’une démarche d’accompagnement du sujet.
          </p>
          <p>
            L’hypnose ericksonienne permet d’accéder à des ressources
            inconscientes, utiles pour aider le psychisme à mieux être.
          </p>
          <p>
            L’accès à l’inconscient nécessite un état de détente physique et
            psychique, assez profond, proche de celle du sommeil (même si le
            sujet ne dort pas). La fonction logique de l’esprit laisse alors sa
            place à la fonction imaginative.
          </p>
          <p>
            Ce phénomène, central en hypnose, est également naturel et inhérent
            à la nature humaine : il est en effet fréquent de vivre dans notre
            vie quotidienne des expériences au cours desquelles la conscience se
            relâche et laisse place à un état modifié de conscience, dans lequel
            nos filtres habituels n’agissent plus.
          </p>
          <p>
            L’état modifié de conscience, appelé transe hypnotique, permet
            d’accéder aux ressources de l’inconscient pour nous vivre mieux.
          </p>
          <p>
            Pour entrer en transe, l’hypnothérapeute s’appuie sur des techniques
            d’induction amenant le sujet à un état de transe. Une fois en
            transe, le travail thérapeutique est guidé par le thérapeute, en
            fonction des demandes du patient ainsi que des problématiques
            identifiées.
          </p>
          <p>
            Ce travail s’appuie sur les limites et les ressources internes du
            sujet afin de mettre en mouvement un processus thérapeutique, de
            sorte à solder les difficultés psychiques.
          </p>
          <p>
            Les champs d’application de l’hypnose sont nombreux, à l’image des
            situations et expériences de vie. Elle représente notamment un outil
            utile, précieux et efficace dans les domaines suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              Amélioration des potentiels : renforcement de l’énergie et des
              performances physiques, développement de la concentration,
              facilitation des apprentissages, de la mémoire, gestion du stress
              et des émotions, augmentation de la motivation.
            </li>
            <li>
              Accompagnement des troubles psychosomatiques : migraines, crises
              d’asthme, problèmes de peau, troubles liés au plaisir, à la
              sexualité, bégaiements…
            </li>
            <li>
              Gestion des douleurs (chroniques, aiguës, post-intervention…) et
              travail sur les compétences psycho-motrices (rapport au corps, au
              temps, à l’espace).
            </li>
            <li>
              Troubles du sommeil, du rythme cardiaque, de la respiration.
            </li>
            <li>
              Accompagnement des différentes pathologies psychologiques :
              troubles névrotiques spécifiques, angoisses, troubles du
              comportement alimentaire, état dépressif, dépendances…
            </li>
          </ul>
          <p>
            Au regard des nombreuses indications relatives à l’usage de
            l’hypnose dans le domaine de l’accompagnement ainsi que des
            techniques utilisées et de leurs incidences sur les patients, la
            pratique de l’hypnose nécessite tout à la fois d’avoir suivi une
            formation sérieuse (en hypnose proprement dite, mais également en
            psychothérapie, psychologie, psychopathologie), une éthique ainsi
            qu’un cadre déontologique rigoureux.
          </p>
        </div>
      ),
    },
    {
      title: "Formations",
      content: (
        <div className="space-y-4 text-gray-700">
          <p>Mes formations incluent :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>
              Formé à l'ICV (Intégration du Cycle de Vie) par l’institut Double
              Hélice.
            </li>
            <li>
              Formé à l'hypnose par l’institut de formation Psynapse.
              Retrouvez-moi dans{" "}
              <a
                href="https://psynapse.fr/annuaire-therapeutes/?process=true&praticien=godin&lieu=Le%20Mans,%20France&discipline="
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9A889D] hover:text-[#7A687D] underline transition duration-300"
              >
                l’annuaire
              </a>
              .
            </li>
            <li>DU de neuropsychologie à l'université de Caen.</li>
          </ul>

          <p>Autres formations suivies :</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>EMDR / HEXAFOR.</li>
            <li>TIFT / Mme Janner Steffan.</li>
            <li>IR (Intelligence Relationnelle) / SelfThérapie.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white py-4 fixed w-full z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <span
                  onClick={() => setActivePage("home")}
                  className="text-2xl font-bold text-gray-900 cursor-pointer hover:text-[#9A889D] transition duration-300"
                >
                  Stéphane Godin
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                onClick={() => {
                  setActivePage("home");
                  smoothScroll("specialisations");
                }}
                className="text-gray-800 hover:text-[#9A889D] transition duration-300 transform hover:translate-x-1 cursor-pointer"
              >
                Spécialisations
              </a>
              <a
                onClick={() => {
                  setActivePage("home");
                  smoothScroll("seances");
                }}
                className="text-gray-800 hover:text-[#9A889D] transition duration-300 transform hover:translate-x-1 cursor-pointer"
              >
                Séances
              </a>
              <a
                onClick={() => {
                  setActivePage("home");
                  smoothScroll("contact");
                }}
                className="text-gray-800 hover:text-[#9A889D] transition duration-300 transform hover:translate-x-1 cursor-pointer"
              >
                Contact
              </a>
              <a
                href="tel:0632145942"
                className="bg-[#9A889D] text-white px-4 py-2 rounded hover:bg-[#7A687D] transition duration-300"
              >
                06 32 14 59 42
              </a>
            </div>
            {/* Bouton du menu mobile */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 focus:outline-none transition-transform duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X size={24} className="transform rotate-90" />
                ) : (
                  <Menu size={24} className="transform rotate-0" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-2 space-y-2">
            <a
              href="#specialisations"
              onClick={(e) => {
                e.preventDefault();
                const specialisationsElement =
                  document.getElementById("specialisations");
                if (specialisationsElement) {
                  specialisationsElement.scrollIntoView({ behavior: "smooth" });
                }
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-800 hover:text-[#9A889D] transition duration-300"
            >
              Spécialisations
            </a>
            <a
              href="#seances"
              onClick={(e) => {
                e.preventDefault();
                const seancesElement = document.getElementById("seances");
                if (seancesElement) {
                  seancesElement.scrollIntoView({ behavior: "smooth" });
                }
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-800 hover:text-[#9A889D] transition duration-300"
            >
              Séances
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactElement = document.getElementById("contact");
                if (contactElement) {
                  contactElement.scrollIntoView({ behavior: "smooth" });
                }
                setIsMenuOpen(false);
              }}
              className="block py-2 text-gray-800 hover:text-[#9A889D] transition duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {activePage === "home" && (
        <>
          {/* Hero Section */}
          <section
            className="pt-48 pb-32 relative min-h-screen text-center"
            style={{
              backgroundImage: `url(${homePicture})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
            }}
          >
            {/* Overlay sombre pour améliorer la lisibilité du texte */}
            <div className="absolute inset-0 bg-[#9A889D] bg-opacity-30"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full">
              <div className="max-w-3xl">
                {/* Titre plus grand et centré */}
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                  Psychologue
                  <br />
                  <span className="text-4xl md:text-5xl">Hypnothérapeute</span>
                  <br />
                  <span className="text-2xl md:text-3xl">LAVAL / LE MANS</span>
                </h1>

                {/* Description */}
                <p className="text-lg text-white mb-8">
                  Psychologue expert judiciaire
                </p>
                {/* Bouton centré et plus visible */}
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    const contactElement = document.getElementById("contact");
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition duration-300"
                >
                  Prendre rendez-vous
                </a>
              </div>
            </div>
          </section>

          {/* Specializations Section */}
          <motion.section
            id="specialisations"
            className="py-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                La prise en charge :
              </h2>
              <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6">
                  Le suivi psychologique
                </h3>
                <p className="text-gray-700 mb-6">
                  Je propose une prise en charge intégrative de la personne en
                  recherche de bien-être et qui souhaite traiter les difficultés
                  qui se présentent à elle. Je suis spécialisé dans le
                  traitement des troubles anxieux et des troubles du stress
                  post-traumatique.
                </p>
                <p className="text-gray-700 mb-6">
                  Ma pratique s'appuie sur différentes méthodes, notamment
                  l'écoute bienveillante, la psychologie positive,
                  l'auto-hypnose, et des thérapies spécifiquement adaptées au
                  traitement du psychotraumatisme.
                </p>
                <div className="space-y-2">
                  {accordionItems.map((item, index) => (
                    <div key={index} className="border-b border-[#9A889D]">
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left py-2 flex justify-between items-center hover:text-[#7A687D] transition duration-300"
                        aria-expanded={openAccordionIndex === index}
                      >
                        <span>→ {item.title}</span>
                        <span>
                          {openAccordionIndex === index ? (
                            <ChevronUp size={20} />
                          ) : (
                            <ChevronDown size={20} />
                          )}
                        </span>
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          openAccordionIndex === index
                            ? "max-h-[1000px]"
                            : "max-h-0"
                        }`}
                      >
                        <div className="pb-4 text-gray-700">{item.content}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Sessions Section */}
          <section id="seances" className="py-20 bg-[#D8C5DB]">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Séances
              </h2>
              <div className="max-w-4xl mx-auto space-y-6 text-gray-800">
                <p className="transition-all duration-300 hover:bg-[#E8D5EB] hover:px-4 hover:py-2 hover:rounded-lg">
                  ✓ En ce qui concerne le suivi psychologique, il faut en
                  moyenne de 6 à 12 mois de suivi à raison d'une fois par
                  semaine / deux fois par mois pour traiter une difficulté mais
                  les traitements peuvent être plus longs.
                </p>
                <p className="transition-all duration-300 hover:bg-[#E8D5EB] hover:px-4 hover:py-2 hover:rounded-lg">
                  ✓ Le prix d'une séance est de 55€. Des arrangements tarifaires
                  sont possibles, sur demande et selon la situation, sur
                  présentation de pièces justificatives. Les séances accueillant
                  des couples coûtent 90€ et durent une heure.
                </p>
                <p className="transition-all duration-300 hover:bg-[#E8D5EB] hover:px-4 hover:py-2 hover:rounded-lg">
                  ✓ Durée d'une séance : 45 minutes maximum (une heure pour les
                  couples)
                </p>
                <p className="transition-all duration-300 hover:bg-[#E8D5EB] hover:px-4 hover:py-2 hover:rounded-lg">
                  ✓ Tout rendez-vous manqué est dû.
                </p>
                <p className="transition-all duration-300 hover:bg-[#E8D5EB] hover:px-4 hover:py-2 hover:rounded-lg">
                  ✓ Paiement en chèque ou en espèces.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="max-w-6xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Prise de rendez-vous
              </h2>

              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-gray-700 mb-4">
                  Pour prendre rendez-vous il suffit de me contacter par SMS,
                  par mail ou sur{" "}
                  <a
                    href="https://www.doctolib.fr/psychologue/le-mans/stephane-godin?pid=practice-522784"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9A889D] hover:text-[#7A687D] underline transition duration-300"
                  >
                    Doctolib
                  </a>{" "}
                  où figurent les rendez-vous disponibles.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                <div>
                  <h3 className="text-xl font-bold mb-6">Adresse</h3>
                  <p className="text-gray-700 mb-4">
                    279 Avenue Félix Geneslay, 72100 Le Mans
                  </p>
                  <div className="space-y-2 text-gray-700 mb-6">
                    <p>Possibilité de parking à l’arrière du bâtiment.</p>
                    <p>Bus 21 ou 5 arrêt Maroc ou Ronceray.</p>
                    <p>
                      Un autre cabinet est également ouvert au{" "}
                      <strong>26 rue Jules Ferry à LAVAL</strong> (voir Doctolib
                      pour les horaires d’ouverture des deux lieux).
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 mb-6">
                    <button
                      onClick={() => setSelectedAddress("leMans")}
                      className="px-4 py-2 bg-[#9A889D] text-white rounded hover:bg-[#7A687D] transition duration-300"
                    >
                      Carte du Mans
                    </button>
                    <button
                      onClick={() => setSelectedAddress("laval")}
                      className="px-4 py-2 bg-[#9A889D] text-white rounded hover:bg-[#7A687D] transition duration-300"
                    >
                      Carte de Laval
                    </button>
                  </div>
                  <div className="aspect-w-16 aspect-h-9">
                    <iframe
                      src={maps[selectedAddress]}
                      className="w-full h-[300px] border-0 rounded-lg"
                      loading="lazy"
                      title="Carte Google Maps"
                      sandbox="allow-scripts allow-same-origin"
                    ></iframe>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-6">Stéphane Godin</h3>
                  <img
                    src={stephaneGodinImage}
                    alt="Stéphane Godin"
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                    width={192}
                    height={192}
                  />
                  <div className="space-y-4 text-center">
                    <p className="flex items-center justify-center">
                      <Phone className="w-5 h-5 mr-3 text-[#000000]" />
                      <a
                        href="tel:0632145942"
                        className="text-[#000000] hover:text-[#7A687D] transition duration-300"
                      >
                        06.32.14.59.42
                      </a>
                    </p>
                    <p className="flex items-center justify-center">
                      <Mail className="w-5 h-5 mr-3 text-[#000000]" />
                      <a
                        href="mailto:stephane.godin.pyjc@orange.fr"
                        className="text-[#000000] hover:text-[#7A687D] transition duration-300"
                      >
                        stephane.godin.pyjc@orange.fr
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activePage === "mentions" && (
        <MentionsLegales setActivePage={setActivePage} />
      )}
      {activePage === "confidentialite" && (
        <PolitiqueConfidentialite setActivePage={setActivePage} />
      )}
      {/* Footer */}
      <motion.footer
        className="bg-black text-white py-8 mt-12 border-t border-[#333]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          {/* Contenu du footer */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Liens */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <a
                href="#"
                onClick={() => setActivePage("mentions")}
                className="hover:text-gray-300 transition duration-300"
              >
                Mentions légales
              </a>
              <span className="hidden md:inline">|</span>
              <a
                href="#"
                onClick={() => setActivePage("confidentialite")}
                className="hover:text-gray-300 transition duration-300"
              >
                Politique de confidentialité
              </a>
            </div>

            {/* Crédits */}
            <div className="text-center md:text-right">
              <p>
                Site réalisé par{" "}
                <a
                  href="https://www.linkedin.com/in/marc-andr%C3%A9-godin-5b035b231/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#9A889D] hover:text-[#7A687D] underline transition duration-300"
                >
                  Marc-André Godin
                </a>
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            <a
              href="https://www.linkedin.com/in/marc-andr%C3%A9-godin-5b035b231/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9A889D] transition duration-300"
            ></a>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
