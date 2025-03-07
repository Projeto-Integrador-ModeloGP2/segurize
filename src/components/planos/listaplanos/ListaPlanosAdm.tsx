/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from "react-router-dom";

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import Plano from "../../../models/Plano";
import { buscar } from "../../../services/Service";
import { ThreeDots } from "react-loader-spinner";
import CardPlano1 from "../cardplanos/CardPlanos";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaPlanosAdm() {
  const navigate = useNavigate();

  const [planos, setPlanos] = useState<Plano[]>([]);

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarPlanos() {
    try {
      await buscar("/planos", setPlanos, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    buscarPlanos();
  }, [planos.length]);

  return (
    <>
      {planos.length === 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh", // ocupa 100% da altura da viewport
          }}
        >
          <ThreeDots
            visible={true}
            height="120"
            width="120"
            color="#00003c"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col mx-2">
          <div
            className="container mx-auto my-4 
                        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {planos.map((plano) => (
              <CardPlano1 key={plano.id} plano={plano} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaPlanosAdm;
