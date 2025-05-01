//42. Comunicación entre componentes - Prop

//props: Me permite mantener un canal de comunicación entre el Padre y el Hijo

//1 code:
//export const FirstApp = (props) => {

//2 code: Destructurando las properties
//export const FirstApp = ({ title }) => {

//3 code:
export const FirstApp = ({ title = "Valor por defecto", subTitle }) => {
  //console.log(props);
  //console.log(props.title);
  return (
    <>
      <h1>{title}</h1>
      <p>{subTitle + 1}</p>
    </>
  );
};
