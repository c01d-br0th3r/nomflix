import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Poster from "Components/Poster";

const Container = styled.div`
  padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upComing, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              isMovie={true}
              year={movie.release_date && movie.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              isMovie={true}
              year={movie.release_date && movie.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="Upcoming">
          {upComing.map(movie => (
            <Poster
              key={movie.id}
              id={movie.id}
              title={movie.original_title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              isMovie={true}
              year={movie.release_date && movie.release_date.substring(0, 4)}
            />
          ))}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upComing: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
