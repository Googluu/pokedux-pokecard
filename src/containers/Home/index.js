/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Searcher from '../../component/Searcher';
import PokemonList from '../../component/PokemonList';
import { getPokemons } from '../../api/getPokemons';
import { setPokemons as setPokemonsAction } from '../../actions';
import './styles.css';

const mapStateToProps = (state) => ({
  pokemons: state.list,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsAction(value)),
});

function Home({ setPokemons, pokemons }) {
  useEffect(() => {
    getPokemons().then((res) => {
      setPokemons(res.results);
    });
  }, []);

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

Home.defaultProps = {
  pokemons: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
