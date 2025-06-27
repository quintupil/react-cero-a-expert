
import { heroes } from '../data/heroes';

/**
 * Filters heroes by their name.
 * 
 * @param {string} name - The name to filter heroes by.
 * @returns {Array} - Array of heroes that match the given name.
 */

export const getHeroesByName = (name = "") => {
  name = name.toLocaleLowerCase().trim();

  if (name.length === 0) return [];

  return heroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes( name )
  );
};
