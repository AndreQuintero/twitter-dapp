import { Hero } from './components/hero';
import { TwitterForm } from './components/twitter-form';
import { Container } from './ui/container';


export default function Home() {
  return (
    <Container>
     <Hero />
     <TwitterForm />
    </Container>
    
  );
}
