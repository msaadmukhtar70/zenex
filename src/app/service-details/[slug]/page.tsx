import { notFound } from 'next/navigation';
import serviceDetails from '@/data/service_details_data';
import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeroServiceDetails from '@/components/hero/HeroServiceDetails';
import ServiceAreaDetails from '@/components/service/ServiceAreaDetails';
import DetailsBanner from '@/components/details/DetailsBanner';
import ServiceDetailsFaq from '@/components/faq/ServiceDetailsFaq';
import AboutHomeFour from '@/components/about/AboutHomeFour';

// ✅ Define type here (not in a separate file)
type ServiceDetailType = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  faq: { question: string; answer: string }[];
  cta: string;
};

type Params = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return serviceDetails.map(service => ({ slug: service.slug }));
}

export default function ServicePage({ params }: Params) {
  const service = serviceDetails.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroServiceDetails data={service as ServiceDetailType} />
            <ServiceAreaDetails data={service.features} />
            <DetailsBanner images={service.images ?? []} />
           <ServiceDetailsFaq
  faq={service.faq}
  title={service.title}
  description={service.description}
  features={service.features}
/>

            <AboutHomeFour />
          </main>
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  );
}
