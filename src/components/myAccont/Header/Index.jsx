import Image from 'next/image';
import { Container } from './style';

export default function Header() {
	return (
		<Container>
			<div class="Logo">
				<Image src="/user.svg" width="40px" height="40px"></Image>
			</div>
		</Container>
	);
}
