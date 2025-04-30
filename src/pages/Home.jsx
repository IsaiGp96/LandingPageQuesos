import Hero from '../components/Hero';
import Products from '../components/Products';

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Hero />
          <Products />
        </main>
      </div>
    </>
  );
}
