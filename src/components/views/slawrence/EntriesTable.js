import React, { Component } from 'react';

const EntriesTable = (props) => {
    return (
        <table className="EntriesTable">
            <tbody>
                <tr>
                    <th id="bet-id">ID</th>
                    <th className="desktop-bet-item">Setter</th>
                    <th className="desktop-bet-item">Taker</th>
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
                            <td className="desktop-bet-item" id="description">{bet.description}</td>
                            <td className="desktop-bet-item">${bet.amount}</td>
                            <td className="desktop-bet-item">{bet.status}</td>
                            <td className="mobile-bet-item">
                                <ul>
                                    <li>Setter: {bet.setterName}</li>
                                    <li>Taker: {bet.takerName}</li>
                                    <li>Bet: {bet.description}</li>
                                    <li>Amount: ${bet.amount}</li>
                                    <li>Status: {bet.status}</li>
                                </ul>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default EntriesTable;