import { Analytics } from "@vercel/analytics/react";
import Page from "./Page";

export type IconProps = React.HTMLAttributes<SVGElement>;

function App() {
  return (
    <>
      <Page />
      <Analytics />
    </>
  );
}

export default App;
