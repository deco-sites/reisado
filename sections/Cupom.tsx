export interface Props {
  codigo: string;
  descricao: string;
}

export default function Cupom({
  codigo = "REISADO10",
  descricao = "Desconto de 10% nos produtos da Reisado",
}: Props) {
  return (
    <div className="bg-pink-200 w-72">
      <p><b>Cupom: {codigo}</b></p>
      <p>{descricao}</p>
    </div>
  );
}
