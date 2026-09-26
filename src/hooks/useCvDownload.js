import { useCallback, useEffect, useState } from "react";
import { cvMeta } from "../data/cvData";

/** Fired by any "open CV" trigger so the modal can be mounted once, in App. */
export const CV_OPEN_EVENT = "portfolio:cv-open";

/**
 * Probes (once per session) whether a real PDF was placed in public/cv/.
 * The content-type check matters: static hosts and the Vite dev server answer
 * unknown paths with index.html and a 200 status, which would otherwise be
 * downloaded as a broken file.
 */
let availability = null;
let bytes = 0;

function probePdf() {
  if (typeof window === "undefined" || typeof fetch !== "function") {
    return Promise.resolve(false);
  }
  if (!availability) {
    availability = fetch(cvMeta.file, { method: "HEAD" })
      .then((res) => {
        const ok =
          res.ok && (res.headers.get("content-type") || "").includes("pdf");
        if (ok) bytes = Number(res.headers.get("content-length") || 0);
        return ok;
      })
      .catch(() => false);
  }
  return availability;
}

/**
 * Single entry point for every CV action on the site.
 *  - hasFile: a real PDF is available and will be downloaded directly
 *  - size:    PDF size in KB (0 when unknown)
 *  - status:  "checking" | "ready" | "fallback"
 *  - download(): download the PDF, or open the on-site CV when there is none
 *  - openCv(): open the on-site CV preview at any time
 */
export default function useCvDownload() {
  const [status, setStatus] = useState("checking");
  const [size, setSize] = useState(0);

  useEffect(() => {
    let alive = true;
    probePdf().then((ok) => {
      if (!alive) return;
      setStatus(ok ? "ready" : "fallback");
      setSize(bytes);
    });
    return () => {
      alive = false;
    };
  }, []);

  const openCv = useCallback(() => {
    window.dispatchEvent(new CustomEvent(CV_OPEN_EVENT));
  }, []);

  const download = useCallback(() => {
    if (status === "ready") {
      const a = document.createElement("a");
      a.href = cvMeta.file;
      a.download = cvMeta.fileName;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }
    openCv();
  }, [status, openCv]);

  return {
    status,
    hasFile: status === "ready",
    size: size ? Math.max(1, Math.round(size / 1024)) : 0,
    download,
    openCv,
  };
}
