import {Link} from 'react-router-dom';

const CharactersByHero = ({alter_ego, characters}) => {
    // if (alter_ego === characters) return <></>;
    // return <p>{ characters }</p>;
    return (alter_ego === characters) 
    ? <></>
    : <p>{ characters }</p>;
}

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  
  const heroImageUrl = `src/assets/heroes/${id}.jpg`;
  //const charactesByHero = (<p>{ characters }</p>);

  return (
    <div className="col">
      <div className="card">
        <div className="row no-gutters">

          <div className="col-4">
            <img src={heroImageUrl} className="card-img" alt={superhero} />
          </div>

          <div className="col-8">
            <div className="card-body">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{ alter_ego }</p>
                {
                    //( alter_ego !== characters ) && charactesByHero
                }
                <CharactersByHero characters={characters} alter_ego={alter_ego}/>
                <p className="card-text">
                    <small className="text-muted">{ first_appearance }</small>
                </p>

                <Link to={`/${ id }`}>
                    Más...
                </Link>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
