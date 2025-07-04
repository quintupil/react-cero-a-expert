import { useMemo } from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {

  //const params = useParams();
  //console.log(params);

  //const { id, ...rest } = useParams();
  //console.log(id, rest);

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroById( id ), [ id ]); 
  
  //console.log( hero );
  const onNavigateBack = () => {
    navigate(-1);
  }
    //console.log('onNavigateBack');

  if ( !hero ) {
    //return <h1>404 - Not found</h1>  
    return <Navigate to="/marvel" />
  }

  return (
    <>
      <div className="row mt-5">
        <div className="col-4">
          <img 
            src={`src/assets/heroes/${hero.id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail"
          />
        </div>

        <div className="col-8">
          <h3>{ hero.superhero }</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> <b>Ater Ego:</b> { hero.alter_ego}</li>
            <li className="list-group-item"> <b>Publisher:</b> { hero.publisher}</li>
            <li className="list-group-item"> <b>First appearance:</b> { hero.first_appearance}</li>
          </ul>
          <h5 className="mt-3"> Characters </h5>
          <p>{hero.characters}</p>

          <button 
            className="btn btn-outline-primary"
            onClick={onNavigateBack}
          >
            Regresar
          </button>
        </div>
          
      </div>
        
    </>
  )
}
