import styled from 'styled-components';

export const Author = styled.div``;

export const HeadControls = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const SortableHeader = styled.th`
  background-color: ${props => (props['data-active'] ? 'pink' : 'default')}
  &:hover {
    cursor: pointer;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
export const Cell = styled.td`
  padding: 5px;
`;

export const Row = styled.tr`
  &:hover {
    cursor: pointer;
    background-color: beige;
  }
`;
