import Card from "./Card";
import SubTitle from "./SubTitle";
import Template from "./Template";
import mfep from "../../public/Image/mfep.png";

const Project = () => {
	return (
		<Template>
			<div>
				<SubTitle title='Project' />
			</div>
			<Card>
				<Card.Body image={mfep}>
					<Card.Title title='MFEP' />
					<Card.Description>
						MFEP adalah sebuah aplikasi yang digunakan untuk mengelola
						data mahasiswa, dosen, mata kuliah, dan nilai. Aplikasi ini
						dibuat menggunakan framework Laravel dan Vue.js
					</Card.Description>
				</Card.Body>
				<Card.Body image={mfep}>
					<Card.Title title='MFEP' />
					<Card.Description>
						MFEP adalah sebuah aplikasi yang digunakan untuk mengelola
						data mahasiswa, dosen, mata kuliah, dan nilai.
						MFEP adalah sebuah aplikasi yang digunakan untuk mengelola
						data mahasiswa, dosen, mata kuliah, dan nilai.
					</Card.Description>
				</Card.Body>
				<Card.Body image={mfep}>
					<Card.Title title='MFEP' />
					<Card.Description>
						MFEP adalah sebuah aplikasi yang digunakan untuk mengelola
						data mahasiswa, dosen, mata kuliah, dan nilai.
						MFEP adalah sebuah aplikasi yang digunakan untuk mengelola
						data mahasiswa, dosen, mata kuliah, dan nilai.
					</Card.Description>
				</Card.Body>
				
				
			</Card>
		</Template>
	);
};

export default Project;
