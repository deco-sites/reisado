export interface Props {
    codigo: string,
    descricao: string
}

export default function Cupom({
    codigo = "REISADO10",
    descricao = "Desconto de 10% nos produtos da Reisado"
}: Props) {
    return (
        <div>
            <div>Cupom: {codigo}</div>
            <div>{descricao}</div>
        </div>
    )
}