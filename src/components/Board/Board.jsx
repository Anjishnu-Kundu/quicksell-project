import React, { useEffect, useState } from 'react';
import './Board.css';
import Column from '../Column/Column';
import { fetchTickets } from '../../services/api';

const Board = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      const data = await fetchTickets();
      setTickets(data);
    };
    getTickets();
  }, []);

  const filterTicketsByStatus = (status) => tickets.filter((ticket) => ticket.status === status);

  return (
    <div className="board">
      <Column title="Backlog" tasks={filterTicketsByStatus('Backlog')} />
      <Column title="To Do" tasks={filterTicketsByStatus('Todo')} />
      <Column title="In Progress" tasks={filterTicketsByStatus('In progress')} />
    </div>
  );
};

export default Board;
