import { useLocation, useNavigate } from "react-router-dom";

interface FooterLinkProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink = ({ id, children, className = "" }: FooterLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(scrollToTarget, 100); 
    } else {
      scrollToTarget();
    }
  };

  return (
    <a href={`/#${id}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default FooterLink;
