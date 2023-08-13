import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const PokeContext = createContext();

const initialStates = {
  selectedType: "",
  allPokemon: [],
  isLoading: false,
  searchQuery: "",
  sortBy: "idAscending",
};

function reducer(state, action) {
  switch (action.type) {
    case "selection":
      return {
        ...state,
        selectedType: action.payload,
      };
    case "fetchingPokemon":
      return {
        ...state,
        allPokemon: [...state.allPokemon, action.payload],
      };
    case "loading":
      return {
        ...state,
        isLoading: action.payload,
      };
    case "searching":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "sorting":
      return {
        ...state,
        sortBy: action.payload,
        searchQuery: "",
      };

    default:
      throw new Error("Unknown action");
  }
}

function PokeProvider({ children }) {
  const [
    { allPokemon, selectedType, isLoading, searchQuery, sortBy },
    dispatch,
  ] = useReducer(reducer, initialStates);

  function handleTypeSelection(type) {
    dispatch({ type: "selection", payload: type });
  }

  function handleSearch(e) {
    dispatch({ type: "searching", payload: e.target.value });
  }

  function handleSelectSort(e) {
    dispatch({ type: "sorting", payload: e.target.value });
  }

  const sortedAndFilteredRecords = useMemo(() => {
    let filteredPokemon = allPokemon;

    if (searchQuery.length > 0) {
      filteredPokemon = filteredPokemon.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedType) {
      filteredPokemon = filteredPokemon.filter(
        (pokemon) => pokemon.types[0].type.name === selectedType
      );
    }

    return filteredPokemon.sort((a, b) => {
      if (sortBy === "idAscending") {
        return a.id - b.id;
      }
      if (sortBy === "idDescending") {
        return b.id - a.id;
      }
      if (sortBy === "expAscending") {
        return a.base_experience - b.base_experience;
      }
      if (sortBy === "expDescending") {
        return b.base_experience - a.base_experience;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }, [allPokemon, searchQuery, sortBy, selectedType]);

  const fetchPokemon = async () => {
    try {
      dispatch({ type: "loading", payload: true });

      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1118");
      const data = await res.json();

      function getPokemonObject(res) {
        res.forEach(async (pokemon) => {
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
          );
          const data = await res.json();
          dispatch({
            type: "fetchingPokemon",
            payload: data,
          });
        });
      }

      getPokemonObject(data.results);
    } finally {
      dispatch({ type: "loading", payload: false });
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <PokeContext.Provider
      value={{
        handleSelectSort,
        handleTypeSelection,
        allPokemon,
        searchQuery,
        handleSearch,
        sortBy,
        sortedAndFilteredRecords,
        isLoading,
        fetchPokemon,
        selectedType,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
}

function usePoke() {
  const context = useContext(PokeContext);
  if (context === undefined) throw new Error("Unknown action");
  return context;
}

export { usePoke, PokeProvider };
