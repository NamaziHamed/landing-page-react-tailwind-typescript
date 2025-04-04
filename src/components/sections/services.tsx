import services from "../../utils/services-data";
import Container from "../shared/container";
import Paragraph from "../shared/Paragraph";
import Title from "../shared/title";
import Service from '../cards/service'

export default function Services() {
  return (
    <section id="services">
      <Container className="space-y-10 md:space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Title>Our Ai Services</Title>
          <Paragraph>
            Discover how AI can revolutionize your business by streamlining
            operations, enhancing decision-making, and unlocking new
            opportunities. Our services include:
          </Paragraph>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {
                services.map(
                    (service,key)=>(
                        <Service
                        key={key}
                        title={service.title}
                        description = {service.description}
                        icon = {service.icon}/>
                    )
                )
            }
        </div>
      </Container>
    </section>
  );
}
