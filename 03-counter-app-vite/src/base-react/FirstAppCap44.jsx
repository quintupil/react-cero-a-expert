//43. Proptypes
//PropType: Se debe importar manualmente esta librería, y se hace desde vite.
import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle }) => {
  /**Este codigo genera deficiencia a la hora de utilizar este código, porque el titulo si no viene arroja un error en cosnola del navegador**/
  /*Lo mas optimo es utilizar Proptypes */
  /*if (!title) {
    throw new Error("El title no existe!!!");
  }*/

  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </>
  );
};

FirstApp.prototype = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.number.isRequired,
};

FirstApp.defaultProps = {
  title: "No hay titulo",
  subTitle: "No hay subtitulo",
};
