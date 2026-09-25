import { Github, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

export function Footer() {
  return (
    <footer className="site-footer" aria-label="Footer">
      <div className="page-shell footer-shell">
        <p>© {new Date().getFullYear()} Harmanpreet Singh</p>
        <p>AI Engineer · Berlin</p>
        <div className="footer-links">
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={16} aria-hidden />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email">
            <Mail size={16} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
