import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Poster from "Components/Poster";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  width: 40%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  border-radius: 10px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 30px;
`;

const Title = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

const ItemContainer = styled.div``;

const Item = styled.span``;

const Divider = styled.span`
  margin: 10px;
`;

const Overview = styled.p`
  font-size: 14px;
  opacity: 0.7;
  line-height: 1.5;
  margin-top: 20px;
`;

const Season = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 125px);
  margin: 30px 0;
  grid-gap: 10px;
`;

const DetailPresenter = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
        />
        <Data>
          <Title>
            {result.original_title
              ? result.original_title
              : result.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>/</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time} min
            </Item>
            <Divider>/</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name}, `
                )}
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <Season>
            {result.seasons
              ? result.seasons.map(season => (
                  <Poster
                    id={season.id}
                    imageUrl={season.poster_path}
                    title={season.name}
                    year={season.air_date.slice(0, 4)}
                  />
                ))
              : ""}
          </Season>
        </Data>
      </Content>
    </Container>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default DetailPresenter;
