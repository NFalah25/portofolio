import Card from "./Card";
import SubTitle from "./SubTitle";
import Template from "./Template";
import mfep from "../../public/Image/mfep.png";
import laravel from "../../public/Image/logo/laravel.png";
import sql from "../../public/Image/logo/mysql.png";
import bootstrap from "../../public/Image/logo/bootstrap.png";
import zeus from "../../public/Image/sim-gym.png";
import sarpras from "../../public/Image/sim-sarpras.png";
import transferme from "../../public/Image/transfer-me.png";
import tailwind from "../../public/Image/logo/tailwind.png";
import react from "../../public/Image/logo/reactjs.png";
import inertia from "../../public/Image/logo/inertia.png";
import midtrans from "../../public/Image/logo/midtrans.png";
import flutter from "../../public/Image/logo/flutter.png";
import python from "../../public/Image/logo/python.png";

const Project = () => {
	return (
		<Template className={"h-full pb-20"}>
			<div>
				<SubTitle title='Project' />
			</div>
			<Card>
				<Card.Body image={zeus}>
					<Card.Title
						title='Sistem Informasi Manajemen - Zeus Physique'
						href={"https://github.com/NFalah25/SIM-GYM"}
					/>
					<Card.Description>
						MFEP adalah sebuah aplikasi yang digunakan untuk mengelola
						data mahasiswa, dosen, mata kuliah, dan nilai. MFEP adalah
						sebuah aplikasi yang digunakan untuk mengelola data
						mahasiswa, dosen, mata kuliah, dan nilai.
					</Card.Description>
					<TempStack>
						<Card.TechStack
							image={laravel}
							stack='Laravel'
						/>
						<Card.TechStack
							image={sql}
							stack='MySQL'
						/>
						<Card.TechStack
							image={tailwind}
							stack='TailwindCSS'
						/>
						<Card.TechStack
							image={react}
							stack='ReactJS'
						/>
						<Card.TechStack
							image={midtrans}
							stack='Midtrans'
						/>
						<Card.TechStack
							image={inertia}
							stack='InertiaJS'
						/>
					</TempStack>
				</Card.Body>
				<Card.Body image={mfep}>
					<Card.Title
						title='Sistem Pengambilan Keputusan - MFEP'
						href={"https://github.com/NFalah25/SPK-MFEP"}
					/>
					<Card.Description>
						MFEP adalah sebuah aplikasi yang digunakan untuk mengelola
						data mahasiswa, dosen, mata kuliah, dan nilai. Aplikasi ini
						dibuat menggunakan framework Laravel dan Vue.js
					</Card.Description>
					<TempStack>
						<Card.TechStack
							image={laravel}
							stack='Laravel'
						/>
						<Card.TechStack
							image={sql}
							stack='MySQL'
						/>
						<Card.TechStack
							image={bootstrap}
							stack='Bootstrap'
						/>
					</TempStack>
				</Card.Body>

				<Card.Body image={sarpras}>
					<Card.Title
						title='Sistem Informasi Manajemen - Sarpras Polinema'
						href={""}
					/>
					<Card.Description>
						MFEP adalah sebuah aplikasi yang digunakan untuk mengelola
						data mahasiswa, dosen, mata kuliah, dan nilai. MFEP adalah
						sebuah aplikasi yang digunakan untuk mengelola data
						mahasiswa, dosen, mata kuliah, dan nilai.
					</Card.Description>
					<TempStack>
						<Card.TechStack
							image={laravel}
							stack='Laravel'
						/>
						<Card.TechStack
							image={sql}
							stack='MySQL'
						/>
						<Card.TechStack
							image={bootstrap}
							stack='Bootstrap'
						/>
					</TempStack>
				</Card.Body>
				<Card.Body image={transferme}>
					<Card.Title
						title='Transfer Me'
						href={""}
					/>
					<Card.Description>
						MFEP adalah sebuah aplikasi yang digunakan untuk mengelola
						data mahasiswa, dosen, mata kuliah, dan nilai. MFEP adalah
						sebuah aplikasi yang digunakan untuk mengelola data
						mahasiswa, dosen, mata kuliah, dan nilai.
					</Card.Description>
					<TempStack>
						<Card.TechStack
							image={flutter}
							stack={"Flutter"}
						/>
						<Card.TechStack
							image={python}
							stack={"Python"}
						/>
					</TempStack>
				</Card.Body>
			</Card>
		</Template>
	);
};

const TempStack = ({ children }) => {
	return <div className={"w-full flex flex-wrap justify-center"}>{children}</div>;
};

export default Project;
