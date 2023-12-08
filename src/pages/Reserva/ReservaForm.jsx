import React, { useReducer, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useReservaContext } from "../../context/ReservaContext";

const ReservaForm = ({ reserva, onChange }) => {
  const [vagaSelecionada, setVagaSelecionada] = useState(null);
  const [vagasDisponiveis, setVagasDisponiveis] = useState(0);

  const { adicionarReserva } = useReservaContext();

  const navigate = useNavigate();

  useEffect(() => {
    // Recupera a vaga selecionada do localStorage ao montar o componente
    const storedVaga = localStorage.getItem("vagaSelecionada");
    if (storedVaga) {
      const parsedVaga = JSON.parse(storedVaga);
      setVagaSelecionada(parsedVaga);
      setVagasDisponiveis(parsedVaga.vagasdisponiveis);
    }
  }, []);

  const decrementarVagasDisponiveis = () => {
    if (vagasDisponiveis > 0) {
      setVagasDisponiveis(vagasDisponiveis - 1);
    }
  };

  const calcularValorTotal = () => {
    const horaEntrada = new Date(`2023-01-01T${reserva.horaEntrada}`);
    const horaSaida = new Date(`2023-01-01T${reserva.horaSaida}`);

    // Calcula a diferença em milissegundos
    const diferencaEmMilissegundos = horaSaida - horaEntrada;

    // Converte a diferença para horas
    const diferencaEmHoras = diferencaEmMilissegundos / (1000 * 60 * 60);

    // Calcula o valor total multiplicando as horas pela taxa (8 pré-definida)
    const valorTotal = diferencaEmHoras * parseFloat(vagaSelecionada.valorhora);

    // Formata o valor total para Reais
    const valorTotalFormatado = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valorTotal);

    // Atualiza o estado da reserva com o valor total
    onChange("valorTotal", valorTotalFormatado);
  };

  const handleEnviarReserva = () => {
    // Verifica se há vagas disponíveis antes de fazer a reserva
    if (vagasDisponiveis > 0) {
      decrementarVagasDisponiveis();
      const novaReserva = {
        id: new Date().getTime(),
        nome: reserva.nome,
        placa: reserva.placa,
        email: reserva.email,
        data: reserva.data,
        horaEntrada: reserva.horaEntrada,
        horaSaida: reserva.horaSaida,
        valorTotal: reserva.valorTotal,
      };
      adicionarReserva(novaReserva);
      navigate("/ListarReservasFeitas", {
        state: { valorTotal: reserva.valorTotal },
      });
    } else {
      alert("Não há mais vagas disponíveis!");
    }
  };

  return (
    <div className="p-2" style={{ border: "10px solid var(--azulclaroapp)" }}>
      <form>
        <div class="mb-3">
          <div className="mb-4 rounded bg-gray-200 p-2 shadow">
            <p className="mb-3 text-xl font-bold">
              Reservas disponíveis: {vagasDisponiveis} reservas
            </p>
            {vagaSelecionada ? (
              <div>
                <h2>{vagaSelecionada.estabelecimento}</h2>
                <p>Localização: {vagaSelecionada.localizacao}</p>
                <p>Horário de Funcionamento: {vagaSelecionada.horario}</p>
                <p>Contato: {vagaSelecionada.contato}</p>
                <p>Valor por Hora: R${vagaSelecionada.valorhora}/Hr</p>
              </div>
            ) : (
              <p>Nenhuma vaga selecionada</p>
            )}
          </div>
          <label htmlfor="name" class="mb-2 block text-base font-medium">
            Seu nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Digite seu nome"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={reserva.nome}
            onChange={(e) => onChange("nome", e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlforfor="placa" class="mb-2 block text-base font-medium">
            Sua placa
          </label>
          <input
            id="placa"
            name="placa"
            type="text"
            placeholder="Digite sua placa"
            class="rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={reserva.placa}
            onChange={(e) => onChange("placa", e.target.value)}
          />
        </div>
        <div>
          <label htmlfor="email" class="mb-2 block text-base font-medium">
            Seu E-mail
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Digite seu E-mail"
            class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            value={reserva.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </div>
        <div>
          <label htmlfor="data" class="block text-base font-medium">
            Data:
          </label>
          <input
            id="data"
            type="date"
            data="data"
            class="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.data}
            onChange={(e) => onChange("data", e.target.value)}
          />
        </div>
        <div>
          <label htmlfor="time" class="block text-base font-medium">
            Hora de entrada:
          </label>
          <input
            id="timeStart"
            name="time"
            type="time"
            class="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.horaEntrada}
            onChange={(e) => onChange("horaEntrada", e.target.value)}
            onBlur={calcularValorTotal}
          />
          <label htmlfor="time" class="block text-base font-medium">
            Hora de saída:
          </label>
          <input
            id="timeEnding"
            type="time"
            name="time"
            class="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.horaSaida}
            onChange={(e) => onChange("horaSaida", e.target.value)}
            onBlur={calcularValorTotal}
          />
        </div>
        <div>
          <label htmlFor="valorTotal" className="block text-base font-medium">
            Valor Total:
          </label>
          <input
            id="valorTotal"
            type="text"
            name="valorTotal"
            className="py-2 px-6 border border-[#e0e0e0]"
            value={reserva.valorTotal}
            readOnly
          />
          <button
            type="submit"
            className="bg-[#0335fc] text-white py-2 px-4 rounded mt-4"
            onClick={handleEnviarReserva}
          >
            Enviar Reserva
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReservaForm;
