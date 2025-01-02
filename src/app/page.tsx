import { Hero } from './components/hero';
import { TweetList } from './components/tweet-list';
import { TwitterForm } from './components/twitter-form';
import { Container } from './ui/container';


export default function Home() {
  return (
    <Container>
     <Hero />
     <TwitterForm />
     <TweetList />
    </Container>
    
  );
}
