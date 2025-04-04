import Container from "../shared/container";
import Title from "../shared/title";

const logos = [
  "discord",
  "openai",
  "paypal",
  "slack",
  "spotify",
  "youtube",
];

export default function Brands() {
  return (
    <section className="space-y-8">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <Title>Trusted By Industry Leaders</Title>
        </div>
        <div className="flex justify-center flex-wrap gap-4">
          {logos.map((logo, key) => (
            <div
              key={key}
              className="p-4 sm:p-5 rounded-xl bg-body border
                border-box-border group"
            >
              <img
                width="100"
                height="60"
                className="h-7 sm:h-10 w-auto ease-linear duration-300 grayscale 
                group-hover:!grayscale-0 group-hover:scale-105"
                src={`src/assets/logos/${logo}.png`}
                alt={`${logo}'s logo`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
