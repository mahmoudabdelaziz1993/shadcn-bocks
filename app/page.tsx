import { BasicHero } from "@/registry/new-york/blocks/basic-hero-block";

export default function Home() {
  return (

    <>
      <BasicHero />
      <BasicHero reverse={true} />
    </>

  );
}
