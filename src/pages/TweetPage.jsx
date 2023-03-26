import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import BeatLoader from 'react-spinners/BeatLoader';
import Header from '../components/Header';
import TweetInput from '../components/TweetInput';
import { TweetList } from '../components/TweetList';
import { getTweets } from '../api/tweet';

const StyledDiv = styled.div`
  height: calc(100vh - 68px);
  overflow-y: scroll;
`;

const StyledMessage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  place-items: center;
  color: var(--color-secondary);
`;

export default function TweetPage() {
  const [isLoading, setIsLoading] = useState(true);
  const {
    currentUser,
    tweets,
    setTweets,
    tweetInput,
    handleInputChange,
    handleAddTweet,
  } = useOutletContext();

  useEffect(() => {
    const getTweetsAsync = async () => {
      try {
        const tweets = await getTweets();
        console.log('tweets get!');
        setTweets(tweets);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getTweetsAsync();
  }, []);

  return (
    <>
      <Header headerText="測試" />
      <StyledDiv>
        <TweetInput
          tweetInput={tweetInput}
          currentUser={currentUser}
          onChange={handleInputChange}
          onAddTweet={handleAddTweet}
        />
        {!isLoading && (
          <TweetList user={currentUser} tweets={tweets} type="tweet" />
        )}
        {isLoading && (
          <StyledMessage>
            <div>
              <BeatLoader color="var(--color-theme)" />
            </div>
          </StyledMessage>
        )}
      </StyledDiv>
    </>
  );
}
