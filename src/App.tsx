import { AuroraBackground } from "./components/ui/aurora-background";
import { motion } from "framer-motion";
import { Dock, DockIcon } from "@/components/ui/dock";
import GithubIcon from "./components/icons/github";
import LinkedinIcon from "./components/icons/linkedin";
import { WordPullUp } from "./components/ui/word-pull-up";
import { BlurIn } from "./components/ui/blur-in";
import { HoverButton } from "./components/ui/hover-button";

export type IconProps = React.HTMLAttributes<SVGElement>;

function App() {
  return (
    <AuroraBackground>
      <div className="relative flex flex-col gap-4 items-center justify-center px-4">
        <BlurIn
          word="BOUHDJEUR Salahe-eddine"
          className="text-4xl font-bold text-black dark:text-white"
          delay={0.5}
        />

        <WordPullUp
          delay={1.5}
          className="text-2xl font-extralight tracking-[-0.02em] text-black dark:text-white md:leading-[5rem]"
          words="Full-Stack Software Engineer"
        />
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=""
        >
          <div className="flex flex-col gap-4">
            <HoverButton>
              <a href="https://www.sagby.fr/" target="_blank">
                Portfolio
              </a>
            </HoverButton>
            <HoverButton>
              <a href="/public/BOUHDJEUR_SALAHE-EDDINE_CV.pdf" target="_blank">
                CV
              </a>
            </HoverButton>
          </div>
          <div className="relative">
            <Dock direction="middle">
              <DockIcon>
                <a href="https://github.com/Sagbyy" target="_blank">
                  <GithubIcon className="size-6 text-white" />
                </a>
              </DockIcon>
              <DockIcon>
                <a
                  href="https://www.linkedin.com/in/salahe-eddine-b-090aa6225/"
                  target="_blank"
                >
                  <LinkedinIcon className="size-6" />
                </a>
              </DockIcon>
            </Dock>
          </div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}

export default App;
