import * as React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { type Container, type ISourceOptions } from "@tsparticles/engine";
import particlesoptions from "@/src/lib/particlesConfig.json";

export type PageBannerProps = {
  title: string;
  subtitle?: string;
};

export function PageBanner({ title, subtitle }: PageBannerProps) {
  const [init, setInit] = React.useState(false);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  React.useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = React.useMemo(
    () => particlesoptions as unknown as ISourceOptions,
    [],
  );

  return (
    <section
      data-component="PageBanner"
      className="relative flex h-28 w-screen items-center md:h-48"
    >
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="absolute inset-0"
        />
      )}
      <header className="container relative mx-auto px-10 text-white">
        <div className="p-4">
          <hr className="mx-0 mb-4 w-24 border-t-2 border-dashed border-white" />
          <h1 className="bg-black-gradient inline uppercase text-xl md:text-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="bg-black-gradient">{`Filtering for: ${subtitle}`}</p>
          )}
        </div>
      </header>
    </section>
  );
}

export default PageBanner;
