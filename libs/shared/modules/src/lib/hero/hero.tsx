import { Button } from '@hotato/shared/components'

/* eslint-disable-next-line */
export interface HeroProps {}

export function Hero(props: HeroProps) {
  return (
    <section className="mod-hero">
      <h1 className="dark:text-white">Hi! Im Toan Nguyen</h1>
      <h3 className="dark:text-white">Hello</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur eius libero quibusdam rem iusto, animi non nemo eligendi eum. Molestias eveniet eos quidem vero quisquam consectetur tempore illo earum, atque ipsa? Ratione quis dolorum dolores minima suscipit, voluptate necessitatibus.</p>
      <Button className="bg-purple-600 text-white px-6">Hire Me!</Button>
    </section>
  );
}

export default Hero;
