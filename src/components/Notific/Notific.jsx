import PropTypes from 'prop-types';
import css from './Notific.module.css';
const Notific = ({ message }) => {
  return <p className={css.title}>{message}</p>;
};

Notific.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notific;
