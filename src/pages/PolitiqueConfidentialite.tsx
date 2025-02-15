import React from "react";

interface PolitiqueConfidentialiteProps {
  setActivePage: (page: "home" | "mentions" | "confidentialite") => void;
}

const PolitiqueConfidentialite: React.FC<PolitiqueConfidentialiteProps> = ({
  setActivePage,
}) => {
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
          Politique de Confidentialité
        </h1>

        <h2 className="text-2xl font-bold mt-6 mb-4">Introduction</h2>
        <p>
          Stéphane Godin, psychologue et hypnothérapeute, s'engage à protéger la
          confidentialité des données personnelles des utilisateurs de ce site.
          Cette politique explique comment vos données sont collectées,
          utilisées et protégées.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Données collectées</h2>
        <p>
          Les données suivantes peuvent être collectées :<br />
          - Nom et prénom
          <br />
          - Adresse e-mail
          <br />
          - Numéro de téléphone
          <br />
          - Messages laissés via le formulaire de contact
          <br />
          Ces données sont collectées uniquement avec votre consentement
          explicite.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          Utilisation des données
        </h2>
        <p>
          Les données collectées sont utilisées pour :<br />
          - Répondre à vos demandes de renseignements
          <br />
          - Prendre rendez-vous
          <br />- Vous informer des actualités liées à mon activité (si vous
          avez donné votre consentement)
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Protection des données</h2>
        <p>
          Vos données sont stockées de manière sécurisée et ne sont jamais
          partagées avec des tiers sans votre consentement, sauf obligation
          légale.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données
          (RGPD), vous avez le droit :<br />
          - D'accéder à vos données
          <br />
          - De les rectifier ou de les supprimer
          <br />
          - De vous opposer à leur utilisation
          <br />
          Pour exercer ces droits, contactez-moi à l'adresse suivante :{" "}
          <a
            href="mailto:stephane.godin.pyjc@orange.fr"
            className="text-[#9A889D] hover:text-[#7A687D]"
          >
            stephane.godin.pyjc@orange.fr
          </a>
          .
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Cookies</h2>
        <p>
          Ce site utilise des cookies pour améliorer l'expérience utilisateur.
          Vous pouvez désactiver les cookies via les paramètres de votre
          navigateur.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">
          Modifications de la politique
        </h2>
        <p>
          Cette politique de confidentialité peut être mise à jour
          périodiquement. La version la plus récente sera toujours disponible
          sur cette page.
        </p>
      </div>
    </div>
  );
};

export default PolitiqueConfidentialite;
