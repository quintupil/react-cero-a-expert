import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  //const params = useParams();
  //console.log(params);

  //const { id, ...rest } = useParams();
  //console.log(id, rest);

  const { id } = useParams();
  const hero = getHeroById(id);
  console.log( hero );

  if ( !hero ) {
    //return <h1>404 - Not found</h1>  
    return <Navigate to="/marvel" />
  }

  return (
    <>
        <h1>{ hero.superhero }</h1>
    </>
  )
}
