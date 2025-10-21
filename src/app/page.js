import Hero from "./components/Hero";
import EpisodeList from "./components/EpisodeList";

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center p-6 space-y-10">
      <Hero />
      <EpisodeList />
    </section>
  );
}
