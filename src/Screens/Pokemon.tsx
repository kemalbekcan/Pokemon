import { connect } from "react-redux";
import React, { Fragment, useEffect, useState } from "react";
import Error from "../Components/Error";
import Navbar from "../Components/Navbar";
import Loading from "../Components/Loading";
import List from "../Components/List";
import { getPokemons } from "../actions/pokemonActions";
import { bindActionCreators, Dispatch } from "redux";
import Pagination from "../Components/Pagination";

interface IProps {
  getPokemons: () => void;
  pokemons: any;
  loading: boolean;
  failedMessage: string;
}

const Pokemon: React.FunctionComponent<IProps> = ({
  getPokemons,
  pokemons,
  loading,
  failedMessage,
}: IProps) => {
  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage] = useState<number>(9);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = pokemons.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number: any) => setCurrentPage(number);

  return loading || pokemons == null ? (
    <Loading />
  ) : (
    <Fragment>
      <Navbar />
      <section>
        <div className="container">
          {failedMessage && (
            <Error
              error={failedMessage}
              role={"alert"}
              className={"alert-danger"}
            />
          )}
          <div className="row">
            <div className="col-md-12 mt-3">
              <div className="row">
                <div className="w-100 d-flex flex-row flex-wrap">
                  <List pokemons={currentPost} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={pokemons.length}
        paginate={paginate}
      />
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  pokemons: state.pokes.pokemons,
  loading: state.pokes.loading,
  failedMessage: state.pokes.failedMessage,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPokemons: bindActionCreators(getPokemons, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
