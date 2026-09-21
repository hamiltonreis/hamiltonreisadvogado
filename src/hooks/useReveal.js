import { useEffect, useRef, useState } from 'react';

/*
  Hook leve de scroll-reveal baseado em IntersectionObserver.
  Evita dependências externas de animação (framer-motion/gsap),
  mantendo o bundle enxuto e compatível com React 17 / CRA 4.
*/
export default function useReveal(options = {}) {
	const ref = useRef(null);
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const node = ref.current;
		if (!node) return undefined;

		if (typeof IntersectionObserver === 'undefined') {
			setVisible(true);
			return undefined;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(node);
				}
			},
			{ threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
		);

		observer.observe(node);
		return () => observer.disconnect();
	}, [options]);

	return [ref, visible];
}
