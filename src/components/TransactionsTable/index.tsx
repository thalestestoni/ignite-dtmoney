import { Container } from "./styles";

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">RS12.000</td>
                        <td>Desenvolvimento</td>
                        <td>10/04/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- RS900.000</td>
                        <td>Casa</td>
                        <td>12/04/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}