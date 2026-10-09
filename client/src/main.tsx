import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { captureFirstTouch } from "@/lib/tigonLead";

// Remember the landing page's utm_*/gclid/fbclid for lead attribution (first touch, 30 days).
captureFirstTouch();

createRoot(document.getElementById("root")!).render(<App />);
