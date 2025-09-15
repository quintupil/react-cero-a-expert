const firstName = "Carlos";
const lastName = "García";
const favoriteGames = ["Elden Ring", "Smash", "Metal Gear"];
const isActive = false;
const address = {
  zipCode: "ABC-123",
  country: "Chile",
};

export const MyAwesomeApp = () => {
  return (
    <>
      {/* Lo que va entre corchete son expresiones validas de JavaScript*/}
      <h1>{firstName}</h1>
      <h3>{lastName}</h3>
      <p>{favoriteGames.join(", ")}</p>
      <h1>{isActive ? "Activo" : "No activo"}</h1>
      <p>{JSON.stringify(address)}</p>
    </>
  );
};
