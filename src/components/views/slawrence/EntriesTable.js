import React from 'react';

const EntriesTable = (props) => {
    return (
        <table className="EntriesTable">
            <tbody>
                <tr>
                    <th id="bet-id">ID</th>
                    <th className="desktop-bet-item">Setter</th>
                    <th className="desktop-bet-item">Taker</th>
                    <th className="desktop-bet-item">Winner</th>
                    <th className="desktop-bet-item" id="description">Bet</th>
                    <th className="desktop-bet-item">Amount</th>
                    <th className="desktop-bet-item">Status</th>
                    <th className="mobile-bet-item" id="bet-info">Info</th>
                </tr>
                {props.betData.map((bet, index) => {
                    return (
                        <tr key={index} className="desktop-bet-view">
                            <td id="bet-id">{bet._id}</td>
                            <td className="desktop-bet-item">{bet.setterName}</td>
                            <td className="desktop-bet-item">{bet.takerName}</td>
                            <td className="desktop-bet-item">{bet.winnerName}</td>
                            <td className="desktop-bet-item" id="description">{bet.description}</td>
                            <td className="desktop-bet-item">$ {bet.amount}</td>
                            <td className="desktop-bet-item">{bet.status}</td>
                            <td className="mobile-bet-item">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Setter</td>
                                            <td className="mobile-item-divider">-</td>
                                            <td>{bet.setterName}</td>
                                        </tr>
                                        <tr>
                                            <td>Taker</td>
                                            <td className="mobile-item-divider">-</td>
                                            <td>{bet.takerName}</td>
                                        </tr>
                                        <tr>
                                            <td>Winner</td>
                                            <td className="mobile-item-divider">-</td>
                                            <td>{bet.winnerName}</td>
                                        </tr>
                                        <tr>
                                            <td>Bet</td>
                                            <td className="mobile-item-divider">-</td>
                                            <td>{bet.description}</td>
                                        </tr>
                                        <tr>
                                            <td>Amount</td>
                                            <td className="mobile-item-divider">-</td>
                                            <td>$ {bet.amount}</td>
                                        </tr>
                                        <tr>
                                            <td>Status</td>
                                            <td className="mobile-item-divider">-</td>
                                            <td>{bet.status}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default EntriesTable;