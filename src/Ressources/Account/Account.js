import PropTypes from 'prop-types';

const Account = props => {
    // Rendu du composant
    return (
      <section className="account">
        {/* Contenu du compte */}
        <div className="account-content-wrapper">
          {/* Titre du compte */}
          <h3 className="account-title">{props.title}</h3>
          {/* Montant du compte */}
          <p className="account-amount">{props.amount}</p>
          {/* Description du montant */}
          <p className="account-amount-description">{props.description}</p>
        </div>
        {/* Bouton pour voir les transactions */}
        <div className="account-content-wrapper cta">
          <button className="transaction-button">Voir les transactions</button>
        </div>
      </section>
    );
  };
  
  // Définition des types des props
  Account.propTypes = {
    title: PropTypes.string, // Titre du compte
    amount: PropTypes.string, // Montant du compte
    description: PropTypes.string, // Description du montant
  };
  
  export default Account;