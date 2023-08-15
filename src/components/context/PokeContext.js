import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

const PokeContext = createContext();

const initialStates = {
  selectedType: "",
  selectedType2: "",
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
        sortBy: "idAscending",
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

  const handleTypeSelection = useCallback((type) => {
    dispatch({ type: "selection", payload: type });
  }, []);

  const handleSearch = useCallback((e) => {
    dispatch({ type: "searching", payload: e.target.value });
  }, []);

  const handleSelectSort = useCallback((e) => {
    dispatch({ type: "sorting", payload: e.target.value });
  }, []);

  let filteredPokemon = allPokemon;

  if (searchQuery.length > 0) {
    filteredPokemon = filteredPokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (selectedType) {
    filteredPokemon = filteredPokemon.filter(
      (pokemon) =>
        pokemon.types[0].type.name === selectedType ||
        (pokemon.types[1] && pokemon.types[1].type.name === selectedType)
    );
  }

  filteredPokemon.sort((a, b) => {
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

  const fetchPokemon = async () => {
    try {
      dispatch({ type: "loading", payload: true });

      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500");
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

  const value = useMemo(() => {
    return {
      handleSelectSort,
      handleTypeSelection,
      allPokemon,
      searchQuery,
      handleSearch,
      sortBy,
      filteredPokemon,
      isLoading,
      fetchPokemon,
      selectedType,
    };
  }, [
    allPokemon,
    filteredPokemon,
    isLoading,
    searchQuery,
    selectedType,
    sortBy,
    handleSearch,
    handleSelectSort,
    handleTypeSelection,
  ]);

  return <PokeContext.Provider value={value}>{children}</PokeContext.Provider>;
}

function usePoke() {
  const context = useContext(PokeContext);
  if (context === undefined) throw new Error("Unknown action");
  return context;
}

export { usePoke, PokeProvider };
