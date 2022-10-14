import styled from "styled-components";


export const Table = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

`;

export const Main = styled.div`
	background: #A8A8A8;
`;

export const Itens = styled.a`
	display: block;
	font-size: 15px;
`;

export const Title = styled.h1`
	font-size: 24px;
`;

export const List = styled.li`
	margin: 1rem;
`;                              

export const Container = styled.ul`
	display: flex;
  flex-wrap: wrap;
	align-items: center;
	justify-content: center;

  list-style: none;

  margin: 0;
  padding: 0;
`;

export const Cards_item = styled.li`
	display: flex;
  padding: 1rem;
`;

export const Card = styled.div`

  border-radius: 0.25rem;

  display: flex;
  flex-direction: column;
  overflow: hidden;

	margin-right: 6rem;

	@media (max-width: 40rem) {
		margin-right: 0rem;
	}
`;

export const Content = styled.div`
  padding: .5rem;

	display: flex;
	justify-content: center;

	@media (max-width: 40rem) {
		flex-wrap: wrap;
	}
`;