import styled from "styled-components";

export const Container = styled.section`
	height: 100px;

	background: var(--color-gray);

	display: flex;
	justify-content: flex-end;
	align-items: center;

	.Logo{
		padding: 13px;
		height: 70px;
		width: 70px;

		border-radius: 50%;

		justify-content: center;
		align-items: center;

		background: var(--gray-dark);

		margin-right: 3%;
	}
`;