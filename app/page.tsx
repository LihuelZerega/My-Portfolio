import WelcomeSection from '@/components/WelcomeSection'
import AboutSection from '@/components/AboutSection';
import Skills from '@/components/Skills';

export default function Home() {
	return (
		<section className="flex flex-col select-none">
			<WelcomeSection />
			<AboutSection />
			<Skills />
		</section>
	);
}
