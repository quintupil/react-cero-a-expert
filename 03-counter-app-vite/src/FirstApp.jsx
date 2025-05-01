//43. Proptypes
//PropType: Se debe importar manualmente esta librería, y se hace desde vite.
import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  /**Este codigo genera deficiencia a la hora de utilizar este código, porque el titulo si no viene arroja un error en cosnola del navegador**/
  /*Lo mas optimo es utilizar Proptypes */
  /*if (!title) {
    throw new Error("El title no existe!!!");
  }*/

  return (
    <>
      {/* <div data-testid="test-title">{title}</div> */}
      <h1 data-testid="test-title">{title}</h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
};
