import { FileDown, FileText } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import useCvDownload from "../../hooks/useCvDownload";

/**
 * One button for every "get my CV" action on the site.
 *  mode="download" (default) -> downloads the PDF from public/cv/, or opens
 *                                the on-site CV when there is no PDF file
 *  mode="preview"            -> always opens the on-site CV
 * The label adapts to what actually happens on click.
 */
export default function CvButton({
  label,
  mode = "download",
  variant = "secondary",
  icon,
  className = "",
  wrapperClassName = "inline-block",
}) {
  const { hasFile, download, openCv } = useCvDownload();
  const previews = mode === "preview" || !hasFile;

  return (
    <AnimatedButton
      type="button"
      onClick={previews ? openCv : download}
      variant={variant}
      className={className}
      wrapperClassName={wrapperClassName}
      icon={icon ?? (previews ? <FileText size={16} /> : <FileDown size={16} />)}
      ariaLabel={previews ? "View CV" : "Download CV as PDF"}
    >
      {label ?? (previews ? "View CV" : "Download CV")}
    </AnimatedButton>
  );
}
