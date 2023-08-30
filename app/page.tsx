import WelcomeSection from '@/components/WelcomeSection'
import AboutSection from '@/components/AboutSection';
import Skills from '@/components/Skills';

export default function Home() {
	return (
		<section className="flex flex-col gap-4 py-8 md:py-10 select-none">
			<WelcomeSection />
			<AboutSection />
			<Skills />
		</section>
	);
}
