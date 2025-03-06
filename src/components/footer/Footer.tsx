/* eslint-disable prefer-const */
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-[#00003C] text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-medium">
            Segurize Soluções em Seguros | Copyright: {data}
          </p>
          <p className="text-lg">Acesse nossas redes sociais</p>

          <div className="flex gap-2">
            <a
              className="hover:scale-105 transition-transform duration-200"
              href="https://www.linkedin.com/in/seu_usuario"
              target="_blank"
            >
              <LinkedinLogo size={48} weight="regular" />
            </a>
            <a
              className="hover:scale-105 transition-transform duration-200"
              href="https://www.instagram.com/seu_usuario"
              target="_blank"
            >
              <InstagramLogo size={48} weight="regular" />
            </a>
            <a
              className="hover:scale-105 transition-transform duration-200"
              href="https://www.facebook.com/seu_usuario"
              target="_blank"
            >
              <FacebookLogo size={48} weight="regular" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
