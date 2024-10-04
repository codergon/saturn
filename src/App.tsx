import {
  Info,
  XCircle,
  CheckCircle,
  WarningCircle,
} from "@phosphor-icons/react";
import { Toaster } from "sonner";

import Home from "pages/home";

function App() {
  return (
    <>
      <main>
        <Home />
      </main>

      <Toaster
        theme="light"
        duration={2500}
        position="bottom-right"
        className="toast-block"
        icons={{
          info: <Info size={16} weight="fill" color="#eba267" />,
          error: <XCircle size={16} weight="fill" color="#ff5c5c" />,
          success: <CheckCircle size={18} weight="fill" color="#16f19d" />,
          warning: <WarningCircle size={16} weight="fill" color="#eba267" />,
        }}
      />
    </>
  );
}

export default App;
